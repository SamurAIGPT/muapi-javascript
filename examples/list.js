import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const upload = await client.uploads.upload(
    "./image.jpg"
);

const result = await client.videos.fromImage({
    prompt:
        "Camera slowly zooms in while the subject blinks",
    image: upload.url,
    model: "seedance-pro", // Uses images_list
    duration: 5,
});

console.log(result);