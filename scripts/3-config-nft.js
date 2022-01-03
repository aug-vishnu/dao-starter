import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xe0894Ad10C7ee86918ACf31c6D9C2cD49B377A67",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Zword of Zuko",
        description: "This NFT will give you access to ZukoDAO!",
        image: readFileSync("scripts/assets/zword.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()