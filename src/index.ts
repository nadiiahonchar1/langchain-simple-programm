import translatedText from "./services/translationServices";
(async () => {
  const language = "Ukaine";
  const text = "hi!";

  try {
    const translation = await translatedText(language, text);
    console.log(`Translation: ${translation}`);
  } catch (error) {
    console.error("Error during translation:", error);
  }
})();
