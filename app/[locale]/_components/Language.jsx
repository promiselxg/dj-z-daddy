"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

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
      <select
        defaultValue={active}
        onChange={(e) => handleLanguageChange(e.target.value)}
        disabled={isPending}
        className="bg-transparent px-2 outline-none border-0 cursor-pointer"
      >
        <option value="en" className="bg-[--secondary-bg] p-10 cursor-pointer">
          English
        </option>
        <option value="de" className="bg-[--secondary-bg]">
          Deutsch
        </option>
      </select>
    </>
  );
}

export default Language;
