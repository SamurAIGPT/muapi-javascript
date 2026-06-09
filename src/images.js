import {
    T2I_MODELS,
    I2I_MODELS
} from "./modelRegistry.js";

export class ImagesAPI {
    constructor(client) {
        this.client = client;
    }

    async generate({
        prompt,
        model = "flux-dev",
        numImages = 1,
        width = 1024,
        height = 1024,
    }) {
        const endpoint = T2I_MODELS[model];

        if (!endpoint) {
            throw new Error(
                `Unknown model: ${model}`
            );
        }

        return this.client.post(endpoint, {
            prompt,
            num_images: numImages,
            width,
            height,
        });
    }

    async edit({
        prompt,
        image,
        model = "flux-kontext-dev",
        aspectRatio = "1:1",
        numImages = 1,
    }) {
        const endpoint = I2I_MODELS[model];

        if (!endpoint) {
            throw new Error(
                `Unknown model: ${model}`
            );
        }

        return this.client.post(endpoint, {
            prompt,
            image_url: image,
            aspect_ratio: aspectRatio,
            num_images: numImages,
        });
    }

    models() {
        return {
            textToImage: Object.keys(T2I_MODELS),
            imageToImage: Object.keys(I2I_MODELS),
        };
    }
}