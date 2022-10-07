import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0x01e497479Fc59F3f4cc467b53D65204B8Ce38b24");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "MDCC DAO Membership",
        description: "This NFT will give you access to MDCC DAO!",
        image: readFileSync("scripts/assets/MDCC_Collar.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();