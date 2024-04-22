"use client";

import { syne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdOutlinePermMedia } from "react-icons/md";
import AudioModal from "../playlist/_component/audioModal";
import VideoModal from "../playlist/_component/videoModal";
import ImageModal from "../playlist/_component/imageModal";
import { Bookmark } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getCookie } from "@/utils/verifyToken";
import AuthContext from "@/context/authContext";
import { FiLogOut, FiX } from "react-icons/fi";

const Sidebar = () => {
  const { openNav, handleSideNavigationBar, handleLogOut } =
    useContext(AuthContext);
  const currentRoute = usePathname();
  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const getToken = async () => {
      const res = await getCookie();
      setToken(res);
    };
    getToken();
  }, [router]);

  return (
    <>
      <div
        className={cn(
          `${
            openNav ? "open" : "close"
          } w-1/2 md:w-1/6 md:flex bg-[--secondary-bg] h-screen fixed z-30`
        )}
      >
        <div className="w-full">
          <div
            className={cn(
              `${syne.className} h-[70px] flex items-center w-full p-5 bg-[--admin-primary-bg] font-[600] text-white uppercase text-[20px] mb-5 justify-between`
            )}
          >
            <span>DJ Zaddy</span>
            <span className="flex md:hidden cursor-pointer">
              <FiX
                onClick={() => handleSideNavigationBar()}
                className="bg-[--secondary-bg] p-2 text-[30px] hover:bg-[--secondary-bg] transition-all delay-75 rounded-sm"
              />
            </span>
          </div>
          <div className={`${syne.className}`}>
            <ul className="text-[--primary-text-color] list-disc flex flex-col">
              <li
                className={cn(
                  `${
                    currentRoute === `/admin/playlist` &&
                    "border-l-[--admin-primary-bg] border-l-2 bg-[--primary-bg] text-[--admin-primary-bg] "
                  } hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] `
                )}
              >
                <Link
                  href={`/admin/playlist?q=${token}`}
                  className="flex items-center gap-2"
                >
                  <MdOutlinePermMedia size={20} />
                  Media Library
                </Link>
              </li>

              <li className="flex items-center gap-2 hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] border-l-2 border-l-transparent ">
                <ImageModal />
              </li>
              <li
                className={cn(
                  `${
                    currentRoute === "/admin/events" &&
                    "border-l-[--admin-primary-bg] border-l-2 bg-[--primary-bg] text-[--admin-primary-bg]"
                  } hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg]`
                )}
              >
                <Link
                  href={`/admin/events?q=${token}`}
                  className="flex items-center gap-2"
                >
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
              <li>
                <button
                  className="flex items-center gap-2 hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] border-l-2 border-l-transparent"
                  onClick={() => handleLogOut()}
                >
                  <FiLogOut size={20} />
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
