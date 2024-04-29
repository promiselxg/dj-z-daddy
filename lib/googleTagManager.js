import { useEffect } from "react";

function GoogleTagManager() {
  useEffect(() => {
    // Load Google Tag Manager script asynchronously
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-EZ3PFV2568";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-EZ3PFV2568");

    return () => {
      // Clean up function
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default GoogleTagManager;
