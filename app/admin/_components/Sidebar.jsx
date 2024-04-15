"use client";

import { barlow } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdOutlinePermMedia } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import AudioModal from "../playlist/_component/audioModal";
import VideoModal from "../playlist/_component/videoModal";
import ImageModal from "../playlist/_component/imageModal";
import { Bookmark } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/6 flex bg-[--secondary-bg] h-screen fixed">
        <div className="w-full">
          <div
            className={cn(
              `${barlow.className} h-[70px] flex items-center w-full p-5 bg-[--admin-primary-bg] font-[600] text-white uppercase text-[20px] mb-5`
            )}
          >
            DJ Z-addy
          </div>
          <div className="">
            <ul className="text-[--primary-text-color] list-disc flex flex-col">
              <li className="hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] border-l-2 border-l-transparent">
                <Link href="/admin" className="flex items-center gap-2">
                  <LuLayoutDashboard size={20} />
                  Dashboard
                </Link>
              </li>
              <li className="hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] border-l-2 border-l-transparent">
                <Link
                  href="/admin/playlist"
                  className="flex items-center gap-2"
                >
                  <MdOutlinePermMedia size={20} />
                  Media Library
                </Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] border-l-2 border-l-transparent ">
                <ImageModal />
              </li>
              <li className="hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] border-l-2 border-l-transparent">
                <Link href="/admin/events" className="flex items-center gap-2">
                  <Bookmark size={20} />
                  Manage Events
                </Link>
              </li>
              <li>
                <AudioModal />
              </li>
              <li>
                <VideoModal />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
