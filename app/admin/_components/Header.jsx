"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthContext from "@/context/authContext";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const { handleSideNavigationBar, openNav, handleLogOut } =
    useContext(AuthContext);

  return (
    <>
      <div
        className="w-full md:w-[84%] fixed top-0 h-[70px] z-10 p-5 flex items-center justify-between bg-white"
        style={{ boxShadow: "rgba(40, 42, 49, 0.16) 0px 1px 2px 0px" }}
      >
        <div></div>
        <div className="md:pr-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden md:flex ">
              My Account
            </DropdownMenuTrigger>
            {!openNav && (
              <FiMenu
                onClick={() => handleSideNavigationBar()}
                className="bg-[--secondary-bg] p-2 text-[30px] hover:bg-[--secondary-bg] transition-all delay-75 rounded-sm text-white flex md:hidden"
              />
            )}

            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleLogOut()}
              >
                Log-out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Header;
