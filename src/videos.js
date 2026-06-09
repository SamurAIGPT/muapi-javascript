import {
    T2V_MODELS,
    I2V_MODELS,
    LIST_INPUT_I2V
} from "./modelRegistry.js";

export class VideosAPI {
    constructor(client) {
        this.client = client;
    }

    async generate({
        prompt,
        model = "kling-master",
        duration = 5,
        aspectRatio = "16:9",
    }) {
        const endpoint = T2V_MODELS[model];

        if (!endpoint) {
            throw new Error(`Unknown model: ${model}`);
        }

        return this.client.post(endpoint, {
            prompt,
            duration,
            aspect_ratio: aspectRatio,
        });
    }

    async fromImage({
        prompt,
        image,
        model = "kling-std",
        duration = 5,
        aspectRatio = "16:9",
    }) {
        const endpoint = I2V_MODELS[model];

        if (!endpoint) {
            throw new Error(
                `Unknown model: ${model}`
            );
        }

        const payload = {
            prompt,
            duration,
            aspect_ratio: aspectRatio,
        };

        if (LIST_INPUT_I2V.has(model)) {
            payload.images_list = [image];
        } else {
            payload.image_url = image;
        }

        return this.client.post(
            endpoint,
            payload
        );
    }
}