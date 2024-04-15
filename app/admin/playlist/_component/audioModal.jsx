import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

import { CldUploadWidget } from "next-cloudinary";
import { Music4 } from "lucide-react";

const AudioModal = () => {
  const { toast } = useToast();

  const handleSubmit = async (url, id) => {
    const formData = {
      mediaUrl: url,
      mediaType: "audio",
      publicId: id,
    };
    try {
      const response = await axios.post("/api/audioUpload", formData);
      if (response?.data?.message) {
        toast({
          title: response.data.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Audio Upload successfull.",
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
        uploadPreset="dj-zaddy-audio-upload"
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
                <Music4 size={20} />
                Upload an Audio
              </button>
            )
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default AudioModal;
