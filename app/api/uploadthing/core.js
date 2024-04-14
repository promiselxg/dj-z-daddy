import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "10MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("file url", file.url);
    }
  ),
  audioUploader: f({ audio: { maxFileSize: "8MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("audio url", file.url);
    }
  ),
  videoUploader: f({ video: { maxFileSize: "16MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("video url", file.url);
    }
  ),
};
