"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/login", formData);
      if (data?.message !== "Login Successfull") {
        toast({
          description: data?.message,
          variant: "destructive",
        });
        setLoading(false);
      } else {
        router.push(`/admin/playlist?q=${data?.userInfo?.token}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full px-5 md:w-1/2 mx-auto flex justify-center items-center flex-col md:h-screen h-fit">
          <Image
            src="/image/logo.jpg"
            width={200}
            height={200}
            alt="logo"
            className="md:mb-5"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:w-1/2 w-full gap-y-3 text-white font-[600] uppercase"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border-none outline-0 p-3 rounded-md bg-[--primary-bg] text-white font-[600]"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-none outline-0 p-3 rounded-md bg-[--primary-bg] text-white font-[600]"
            />

            <button
              disabled={loading}
              type="submit"
              className="border-none outline-none bg-[--admin-primary-bg] p-3 rounded-md uppercase text-white font-[600] hover:opacity-[0.8] transition-all delay-75 hover:text-[#000]  disabled:cursor-not-allowed mt-5"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
