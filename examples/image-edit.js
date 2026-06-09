import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const result = await client.images.edit({
    prompt: "Turn this image into anime style",
    image: "https://picsum.photos/512",
    model: "flux-kontext-dev",
});

console.log(result);