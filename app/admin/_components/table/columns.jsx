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
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { CirclePlay } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    accessorKey: "mediaType",
    header: "Media Type",
    cell: ({ row }) => {
      const { mediaType } = row.original;
      return (
        <span className={cn(`${barlow.className} uppercase font-[600]`)}>
          {mediaType}
        </span>
      );
    },
  },
  {
    accessorKey: "mediaUrl",
    header: "Media File",
    cell: ({ row }) => {
      const { mediaType, mediaUrl } = row.original;

      if (mediaType === "image") {
        return (
          <a href={mediaUrl} target="_blank">
            <Image src={mediaUrl} alt="Image" width={50} height={20} />
          </a>
        );
      } else if (mediaType === "audio") {
        return (
          <AudioPlayer
            autoPlay={false}
            src={mediaUrl}
            layout="horizontal-reverse"
            customProgressBarSection={[
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_TIME,
            ]}
          />
        );
      } else {
        return (
          <>
            <Dialog>
              <DialogTrigger>
                <CirclePlay size={38} />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <CldVideoPlayer width="1620" height="1080" src={mediaUrl} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </>
        );
      }
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
