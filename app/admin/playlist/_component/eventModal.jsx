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
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  title: z.string({
    required_error: "Please enter an Event Title.",
  }),
  description: z.string({
    required_error: "Please enter a Title.",
  }),
});

const EventModal = () => {
  const [date, setDate] = useState();
  const { toast } = useToast();
  const [mediaUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit({ title, description }) {
    setLoading(true);
    const formData = {
      mediaUrl,
      description,
      title,
      eventDate: date,
    };
    try {
      const resp = await axios.post("/api/eventUpload", formData);
      setLoading(false);
      if (resp?.data?.message) {
        toast({
          title: resp.data.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Event Created successfull.",
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
            <DialogTitle>Create an Event.</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-y-5 flex-col"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Event Title"
                          {...field}
                          className="w-full p-2 bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px]  text-[#fff] font-[500]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Event Description"
                          className="resize-none w-full h-20 p-2 bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px]  text-[#fff] font-[500]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel>Event Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px]  text-[#fff] font-[500] justify-start text-left ",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`);
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

export default EventModal;
