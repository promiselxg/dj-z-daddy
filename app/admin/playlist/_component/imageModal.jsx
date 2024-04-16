import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { barlow } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { UploadButton } from "@/utils/uploadthing";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import { ImageUp } from "lucide-react";

const FormSchema = z.object({
  media_type: z.string({
    required_error: "Please select an email to display.",
  }),
  description: z
    .union([z.string()])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

const ImageModal = () => {
  const { toast } = useToast();
  const [mediaUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit({ media_type, description }) {
    setLoading(true);
    const formData = {
      mediaUrl,
      description,
      mediaType: media_type,
    };
    try {
      const resp = await axios.post("/api/imageUpload", formData);
      setLoading(false);
      if (resp?.data?.message) {
        toast({
          title: resp.data.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Image Upload successfull.",
        });
        window.location = window.location;
        setImageUrl("");
      }
      //console.log(resp.data.message);
    } catch (error) {
      setLoading(false);
      toast({
        title: error,
      });
    }
  }

  const handleRemoveItem = async (value) => {
    const res = await axios.delete("/api/uploadthing", {
      data: {
        url: value,
      },
    });
    if (res?.data.message === "ok") {
      setImageUrl("");
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="flex items-center gap-2">
            <ImageUp size={20} />
            <span>Image Upload</span>
          </div>
        </DialogTrigger>

        <DialogContent
          className={cn(
            `${barlow.className}  bg-[--secondary-bg] text-[#fff] font-[600]`
          )}
        >
          <DialogHeader>
            <DialogTitle>Media Library</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-y-5 flex-col"
              >
                <FormField
                  control={form.control}
                  name="media_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Media Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-[--primary-bg] outline-none border-[--primary-text-color] rounded-[5px]">
                            <SelectValue placeholder="Media type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="image">Gallery</SelectItem>
                          <SelectItem value="banner">Banner</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Description (
                        <span className="italic text-sm font-[400]">
                          optional
                        </span>
                        )
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Description"
                          className="resize-none w-full h-20 p-2 bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px]  text-[#fff] font-[500]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-y-1">
                  <FormLabel>File Upload.</FormLabel>
                  <div className="flex items-center gap-3 mt-2">
                    {mediaUrl ? (
                      <>
                        <Image
                          src={mediaUrl}
                          width={100}
                          height={50}
                          alt="image"
                          className="border h-50"
                        />
                        <FiX
                          className="text-[30px] text-white bg-red-700 rounded-full p-2 cursor-pointer hover:opacity-[0.6] transition-all delay-75"
                          onClick={() => handleRemoveItem(`${mediaUrl}`)}
                        />
                      </>
                    ) : (
                      <UploadButton
                        className="items-start"
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          setImageUrl(res[0].url);
                          toast({
                            title: "Upload completed:",
                          });
                        }}
                        onUploadError={(error) => {
                          toast({
                            title: "File Upload Failed",
                            variant: "destructive",
                          });
                        }}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-[--admin-primary-bg] hover:bg-[#04315f] w-fit transition-all delay-75"
                  >
                    Create new Media Document.
                  </Button>
                </div>
              </form>
            </Form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageModal;
