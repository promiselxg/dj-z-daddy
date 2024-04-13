import { barlow, montserrat, open_sans } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./_components/Sidebar";

import { DataTable } from "./_components/table/data-table";
import { columns } from "./_components/table/columns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadBtn } from "@/lib/cloudinaryUpload";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div className="w-full flex h-fit flex-col gap-y-5">
        <div className="w-full flex items-center justify-between">
          <h1
            className={cn(
              `${montserrat.className} font-[600] text-[20px] uppercase`
            )}
          >
            Dashboard
          </h1>
          <Dialog>
            <DialogTrigger>
              <Button className="flex items-center gap-3 bg-[--admin-primary-bg] hover:bg-[#04315f] transition-all delay-75">
                <FiPlus />
                <span>Create new Event.</span>
              </Button>
            </DialogTrigger>
            <DialogContent
              className={cn(
                `${barlow.className}  bg-[--secondary-bg] text-[#fff] font-[600]`
              )}
            >
              <DialogHeader>
                <DialogTitle>Create a new Event.</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <div className="w-full flex flex-col gap-y-3">
                  <label htmlFor="title" className="text-[#fff]">
                    Event Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="flex items-center w-full p-3 bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px] text-[#fff] font-[500]"
                  />
                  <label htmlFor="description" className="text-[#fff]">
                    Event Description
                  </label>
                  <textarea
                    type="date"
                    name="description"
                    id="description"
                    className="w-full h-20 p-2 bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px]  text-[#fff] font-[500]"
                  ></textarea>
                  <div className="w-full flex justify-between gap-5 items-center">
                    <div className="flex flex-col w-1/3 gap-y-2">
                      <label htmlFor="description" className="text-[#fff]">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name=""
                        id=""
                        className="w-full p-2 bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px]"
                      />
                    </div>
                    <div className="flex flex-col w-2/3 gap-y-2">
                      <label htmlFor="description" className="text-[#fff]">
                        &nbsp;
                      </label>
                      {/* <input
                        type="file"
                        name=""
                        id=""
                        className="w-full p-2 bg-[--primary-bg] outline-none border border-[--primary-text-color] rounded-[5px]"
                      /> */}
                      <UploadBtn />
                    </div>
                  </div>
                  <div className="my-3">
                    <Button className="bg-[--admin-primary-bg] hover:bg-[#04315f] w-fit transition-all delay-75">
                      Create new Event
                    </Button>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
