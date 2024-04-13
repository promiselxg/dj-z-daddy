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
import React from "react";
import { FiPlus } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  media_type: z.string({
    required_error: "Please select an email to display.",
  }),
  description: z
    .union([z.string().min(4)])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

const VideoModal = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    console.log(data);
    console.log(media);
  }
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="flex items-center gap-3 bg-[--admin-primary-bg] hover:bg-[#04315f] transition-all delay-75">
            <FiPlus />
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
                          <SelectItem value="image">Image</SelectItem>
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
                          placeholder="Tell us a little bit about yourself"
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
                  <UploadButton
                    className="items-start"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
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

export default VideoModal;
