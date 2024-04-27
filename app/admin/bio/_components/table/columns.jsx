"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "next-cloudinary/dist/cld-video-player.css";
import { FiTrash2 } from "react-icons/fi";
import axios from "axios";
import { cn } from "@/lib/utils";
import { barlow } from "@/lib/fonts";
import Swal from "sweetalert2";

const handleRemove = (id, mediaUrl) => {
  Swal.fire({
    text: "Do you want to delete this record?",
    showDenyButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    denyButtonText: `Delete`,
  }).then(async (result) => {
    if (result.isDenied) {
      const res = await axios.delete("/api/bio", {
        data: {
          url: mediaUrl,
          id,
        },
      });
      if (mediaUrl != null) {
        if (res?.data.message === "ok") {
          await axios.delete("/api/uploadthing", {
            data: {
              url: mediaUrl,
            },
          });
          window.location = window.location;
        }
      } else {
        if (res?.data.message === "ok") {
          window.location = window.location;
        }
      }
    }
  });
};

export const columns = [
  {
    accessorKey: "bioType",
    header: "Type",
    cell: ({ row }) => {
      const { bioType } = row.original;
      return (
        <span className={cn(`${barlow.className} text-sm capitalize `)}>
          {bioType}
        </span>
      );
    },
  },
  {
    accessorKey: "bioInfo",
    header: "Description",
    cell: ({ row }) => {
      const { bioType, bioInfo } = row?.original;
      if (bioType === "bio") {
        return (
          <span className={cn(`${barlow.className}  text-sm`)}>
            {bioInfo?.substring(0, 100) + "..."}
          </span>
        );
      } else {
        return <span className={cn(`${barlow.className}  text-sm`)}>null</span>;
      }
    },
  },
  {
    accessorKey: "mediaUrl",
    header: "Media File",
    cell: ({ row }) => {
      const { bioType, mediaUrl } = row?.original;
      if (bioType === "bioImg" || bioType === "playlistImg") {
        return (
          <a href={mediaUrl} target="_blank">
            <Image src={mediaUrl} alt="Image" width={50} height={20} />
          </a>
        );
      }
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id, mediaUrl } = row?.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleRemove(id, mediaUrl)}
              className="text-red-400 flex items-center gap-2 cursor-pointer"
            >
              <FiTrash2 /> Delete Item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
