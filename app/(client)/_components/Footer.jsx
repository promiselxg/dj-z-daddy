"use client";

import { barlow, open_sans, syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { SlSocialSpotify } from "react-icons/sl";
import { PiTiktokLogoLight } from "react-icons/pi";
import { Phone, Mail, MapPin, Youtube } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter your name.",
  }),
  email: z
    .string({ required_error: "Please enter your email address" })
    .email({ message: "Invalid email address." }),

  message: z.string({
    required_error: "Please fill this field.",
  }),
});

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit({ name, email, message }) {
    const formData = {
      name,
      email,
      message,
    };
    try {
      const response = await axios.post("/api/mail", formData);
      if (response?.data?.message === "ok") {
        toast({
          title: "Message sent successfully.",
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-full md:h-screen bg-[--secondary-bg]" id="contact">
        <div
          className={cn(
            `${open_sans.className} w-full mx-auto p-10 md:p-20 flex justify-between gap-8 text-white flex-col`
          )}
        >
          <div className="flex gap-5 md:flex-row flex-col-reverse">
            <div className="w-full md:w-1/2">
              <p
                className={cn(
                  `${barlow.className} my-2 text-sm leading-relaxed italic text_normal`
                )}
              >
                Send us information about your event including what type of
                event and the date and we’ll get back to you with availability
                and a quote right away.
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex gap-y-5 flex-col w-full"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Full Name"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email Address"
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
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
                  <div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-[--admin-primary-bg] hover:bg-[#04315f] w-full md:w-fit transition-all delay-75"
                    >
                      Send Message.
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <div className="w-full md:w-1/2 flex text-center md:items-center flex-col gap-5 justify-between md:gap-0 md:justify-start ">
              <div className="my-5 flex flex-col items-start md:items-center">
                <span>
                  <h1
                    className={cn(
                      `${syne.className} text-[30px] md:text-[40px] font-[600] uppercase `
                    )}
                  >
                    ADDRESS
                  </h1>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin /> 1080 Brickell Ave
                </span>
                <span className="flex items-center gap-2">
                  <MapPin /> Miami - Florida
                </span>
              </div>
              <div className="flex flex-col items-start md:items-center">
                <span>
                  <h1
                    className={cn(
                      `${syne.className} text-[30px] md:text-[40px] font-[600] uppercase `
                    )}
                  >
                    CONTACT
                  </h1>
                </span>
                <h1
                  className={cn(
                    `${open_sans.className} text-[20px] flex items-center gap-2`
                  )}
                >
                  <Mail /> info@email.com
                </h1>
                <h1
                  className={cn(
                    `${syne.className} text-[40px] font-[600] uppercase flex items-center gap-2`
                  )}
                >
                  <Phone /> + 014656
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-[#000]">
        <div className="w-full mx-auto p-10 md:p-20 flex justify-between gap-8 ">
          <div className="md:w-1/2 mx-auto flex justify-center items-center text-center flex-col">
            <Image
              src="/image/logo.jpg"
              width={300}
              height={50}
              alt="logo"
              className="w-[400px] h-[200px] object-cover"
            />
            <div className="my-5">
              <p
                className={cn(
                  `${open_sans.className} font-[400] text-sm text-[--primary-text-color] leading-[1.7]`
                )}
              >
                The best thing about being a DJ is making people happy. There is
                nothing like seeing people get up from a table to dance or the
                expression on their face when they hear a song they love. I also
                love to educate people on music they have never heard.
              </p>
            </div>
            <div className="flex items-center text-[--primary-text-color] mb-5 gap-4">
              <a
                href="https://www.youtube.com/@Djzaddy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all delay-75 hover:text-[--text-brown] cursor-pointer"
              >
                <Youtube size={40} />
              </a>
              <a
                href="https://open.spotify.com/user/jg47bne0dyy3hnj0wb882b3qs?si=TjEelt1VTnGIXCuPqm_qgQ "
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all delay-75 hover:text-[--text-brown] cursor-pointer"
              >
                <SlSocialSpotify size={40} />
              </a>
              <a
                href="https://www.instagram.com/deejay_zaddy/?igsh=bG54dnNudWh2ZjIz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all delay-75 hover:text-[--text-brown] cursor-pointer"
              >
                <FiInstagram size={40} />
              </a>
              <a
                href="https://www.tiktok.com/@bidexibile?_t=8lYEdBiZYMz&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all delay-75 hover:text-[--text-brown] cursor-pointer"
              >
                <PiTiktokLogoLight size={40} />
              </a>
              <a
                href="https://tidal.com/user/146443404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image/tidal.png"
                  width={100}
                  height={20}
                  alt="tidal"
                  className="rounded-[10px]"
                />
              </a>
            </div>
            <p
              className={cn(
                `${open_sans.className} font-[400] text-sm text-[--primary-text-color] leading-[1.7]`
              )}
            >
              Copyright &copy; {currentYear} Z-addy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
