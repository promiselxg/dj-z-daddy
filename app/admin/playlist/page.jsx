"use client";
import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { DataTable } from "../_components/table/data-table";
import { columns } from "../_components/table/columns";
import { useEffect, useState } from "react";
import axios from "axios";
import { VerifyClientToken } from "@/utils/verifyClientToken";

const Home = () => {
  const [data, setData] = useState([]);
  VerifyClientToken();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/media`);
      setData(response?.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex h-fit flex-col gap-y-5">
        <div className="w-full flex items-center justify-between flex-col md:flex-row gap-y-3 md:gap-y-0">
          <h1
            className={cn(
              `${montserrat.className} font-[600] text-[20px] uppercase`
            )}
          >
            Dashboard
          </h1>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Home;
