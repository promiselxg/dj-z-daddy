import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

import { CldUploadWidget } from "next-cloudinary";

const AudioModal = () => {
  const { toast } = useToast();

  const handleSubmit = async (url) => {
    const formData = {
      mediaUrl: url,
      mediaType: "audio",
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
          handleSubmit(result?.info?.secure_url);
        }}
      >
        {({ open, isLoading }) => {
          return (
            !isLoading && (
              <button onClick={() => open()}>Upload an Audio</button>
            )
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default AudioModal;
