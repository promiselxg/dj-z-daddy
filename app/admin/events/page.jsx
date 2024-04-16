"use client";
import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import EventModal from "../playlist/_component/eventModal";
import { DataTable } from "./_components/table/data-table";
import { columns } from "./_components/table/columns";

const Event = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/eventUpload`);
      setData(response?.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex h-fit flex-col gap-y-5">
        <div className="w-full flex items-center justify-between">
          <h1
            className={cn(
              `${montserrat.className} font-[600] text-[20px] uppercase`
            )}
          >
            Manage Events.
          </h1>
          <div className="flex gap-3">
            <EventModal className="flex items-center gap-2 bg-[--admin-primary-bg] rounded-[8px] p-2 text-white hover:bg-[--header-bg] transition-all delay-75" />
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Event;
