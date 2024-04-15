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

const handleRemove = async (type, id, mediaUrl, pid) => {
  if (type === "image") {
    const res = await axios.delete("/api/uploadthing", {
      data: {
        url: mediaUrl,
        id,
      },
    });
    if (res?.data.message === "ok") {
      await axios.delete("/api/imageUpload", {
        data: {
          url: mediaUrl,
          id,
        },
      });
      window.location = window.location;
    }
  } else {
    const res = await axios.delete("/api/media", {
      data: {
        url: mediaUrl,
        id,
        type,
        pid,
      },
    });
    window.location = window.location;
  }
};
export const columns = [
  {
    accessorKey: "title",
    header: "Event Title",
    cell: ({ row }) => {
      const { title } = row.original;
      return (
        <span className={cn(`${barlow.className} text-sm capitalize `)}>
          {title}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const { description } = row.original;
      return (
        <span className={cn(`${barlow.className}  text-sm`)}>
          {description?.substring(0, 30)}
        </span>
      );
    },
  },
  {
    accessorKey: "mediaUrl",
    header: "Media File",
    cell: ({ row }) => {
      const { mediaUrl } = row.original;
      return (
        <a href={mediaUrl} target="_blank">
          <Image src={mediaUrl} alt="Image" width={50} height={20} />
        </a>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const { eventDate } = row.original;
      return <span className={cn(`${barlow.className}`)}>{eventDate}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { mediaType, id, mediaUrl, publicId } = row.original;

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
              onClick={() => handleRemove(mediaType, id, mediaUrl, publicId)}
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
