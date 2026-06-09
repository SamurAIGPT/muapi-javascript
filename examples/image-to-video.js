import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const result = await client.videos.fromImage({
    prompt: "The character smiles and waves at the camera",
    image: "https://picsum.photos/512",
    model: "kling-master",
    duration: 5,
    aspectRatio: "16:9",
});

console.log(result);