"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { DE, US } from "country-flag-icons/react/3x2";

function Language() {
  const [isPending, startTransiton] = useTransition();
  const router = useRouter();
  const active = useLocale();
  const handleLanguageChange = (val) => {
    const nextLocale = val;
    startTransiton(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="flex items-end gap-2"
          disabled={isPending}
        >
          <Globe size={25} /> {active.toUpperCase()}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleLanguageChange("en")}
            className="flex gap-2 items-center cursor-pointer"
          >
            <US title="English" className="h-[20px] w-[20px]" /> English
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleLanguageChange("de")}
            className="flex gap-2 items-center cursor-pointer"
          >
            <DE title="Deutsch" className="h-[20px] w-[20px]" /> Deutsch
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Language;
