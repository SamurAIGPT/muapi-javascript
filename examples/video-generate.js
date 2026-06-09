import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const result =
    await client.videos.generate({
        prompt:
            "A cinematic drone shot over mountains",
        model: "kling-master"
    });

console.log(result);