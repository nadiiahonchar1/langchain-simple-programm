import { translateText } from "./services/translationService";

(async () => {
  const language = "Italian";
  const text = "hi!";

  try {
    const translation = await translateText(language, text);
    console.log(`Translation: ${translation}`);
  } catch (error) {
    console.error("Error during translation:", error);
  }
})();
