import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

import { CldUploadWidget } from "next-cloudinary";
import { Play } from "lucide-react";

const VideoModal = () => {
  const { toast } = useToast();

  const handleSubmit = async (url, id) => {
    const formData = {
      mediaUrl: url,
      mediaType: "video",
      publicId: id,
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
        window.location = window.location;
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
          handleSubmit(result?.info?.secure_url, result?.info?.public_id);
        }}
      >
        {({ open, isLoading }) => {
          return (
            !isLoading && (
              <button
                onClick={() => open()}
                className="flex items-center gap-2 hover:text-[--admin-primary-bg] transition-all delay-75 hover:bg-[--primary-bg] px-5 py-3 w-full hover:border-l-2 hover:border-l-[--admin-primary-bg] border-l-2 border-l-transparent"
              >
                <Play size={20} />
                Upload a Video
              </button>
            )
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default VideoModal;
