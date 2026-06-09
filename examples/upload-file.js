import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const result =
    await client.uploads.upload(
        "./image.jpg"
    );

console.log(result);