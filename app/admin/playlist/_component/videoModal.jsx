import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

import { CldUploadWidget } from "next-cloudinary";

const VideoModal = () => {
  const { toast } = useToast();

  const handleSubmit = async (url) => {
    const formData = {
      mediaUrl: url,
      mediaType: "video",
    };
    try {
      const response = await axios.post("/api/videoUpload", formData);
      if (response?.data?.message) {
        toast({
          title: response.data.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Video Upload successfull.",
        });
      }
      //console.log(resp.data.message);
    } catch (error) {
      toast({
        title: error,
      });
    }
  };
  return (
    <>
      <CldUploadWidget
        uploadPreset="dj-zaddy-video-upload"
        options={{
          sources: ["local"],
        }}
        onSuccess={(result) => {
          handleSubmit(result?.info?.secure_url);
        }}
      >
        {({ open, isLoading }) => {
          return (
            !isLoading && <button onClick={() => open()}>Upload a Video</button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default VideoModal;
