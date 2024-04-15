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
                className="flex items-center gap-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border border-gray-200  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br"
              >
                <Music4 />
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
