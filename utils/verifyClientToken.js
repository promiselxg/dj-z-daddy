"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { verifyToken } from "./verifyToken";

const VerifyClientToken = () => {
  const router = useRouter();
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const qValue = urlParams.get("q");
    if (!qValue || qValue == "") {
      router.refresh();
      router.push("/login");
    } else {
      const getToken = async () => {
        const res = await verifyToken(qValue);
        if (res.message !== "success") {
          router.refresh();
          router.push("/login");
        }
      };
      getToken();
    }
  }, [router]);
};

export default VerifyClientToken;
