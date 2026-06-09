import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const result = await client.audio.fromText({
    prompt: "Relaxing ocean waves",
    duration: 10
});

console.log(result);