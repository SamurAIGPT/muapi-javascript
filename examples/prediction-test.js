import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const image = await client.images.generate({
    prompt: "A futuristic city at sunset"
});

console.log("Initial response:");
console.log(image);

const result = await client.predictions.wait(
    image.id || image.request_id
);

console.log("\nFinal result:");
console.log(result);