import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);
const result =
    await client.images.edit({
        prompt:
            "Turn this image into an anime illustration",
        image:
            "https://example.com/image.jpg",
        model: "flux-kontext-dev",
    });

console.log(result);