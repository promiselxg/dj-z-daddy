import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "10MB" } }).onUploadComplete(
    async ({ file }) => {
      //console.log("Upload complete", file);
    }
  ),
};
