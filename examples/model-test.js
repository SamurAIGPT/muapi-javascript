import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

console.log(client.models.categories());

console.log(client.models.get("flux-dev"));

console.log(client.models.exists("veo3"));

console.log(client.models.imageModels());