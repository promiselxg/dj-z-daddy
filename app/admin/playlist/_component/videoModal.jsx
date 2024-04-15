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
                className="flex items-center gap-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border border-gray-200  text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br"
              >
                <Play />
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
