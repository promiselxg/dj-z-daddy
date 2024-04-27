"use client";
import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { VerifyClientToken } from "@/utils/verifyClientToken";
import { columns } from "./_components/table/columns";
import { DataTable } from "./_components/table/data-table";
import BioModal from "../playlist/_component/bioModal";
import HomePageModal from "../playlist/_component/bioImgModal";

const Home = () => {
  const [data, setData] = useState([]);
  VerifyClientToken();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/bio`);
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
            Manage Bio
          </h1>
          <div className="flex items-center gap-4">
            <BioModal className="flex items-center gap-2 bg-[--admin-primary-bg] rounded-[8px] p-2 text-white hover:bg-[--header-bg] transition-all delay-75" />
            <HomePageModal className="flex items-center gap-2 bg-[--header-bg]  rounded-[8px] p-2 text-white hover:bg-[--admin-primary-bg] transition-all delay-75" />
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Home;
