const { useEffect } = require("react");

function GoogleTranslate() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "translate"
        );
      };

      return () => {
        document.body.removeChild(script);
        delete window.googleTranslateElementInit;
      };
    }
  }, []);
}

export default GoogleTranslate;
