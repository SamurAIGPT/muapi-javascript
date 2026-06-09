import {
    T2I_MODELS,
    T2V_MODELS,
    I2V_MODELS
} from "./modelRegistry.js";

export class ModelsAPI {
    list(category = "all") {
        switch (category) {
            case "image":
                return T2I_MODELS;

            case "text-to-video":
                return T2V_MODELS;

            case "image-to-video":
                return I2V_MODELS;

            case "video":
                return {
                    textToVideo: T2V_MODELS,
                    imageToVideo: I2V_MODELS,
                };

            case "all":
            default:
                return {
                    image: T2I_MODELS,
                    textToVideo: T2V_MODELS,
                    imageToVideo: I2V_MODELS,
                };
        }
    }

    categories() {
        return [
            "image",
            "text-to-video",
            "image-to-video",
        ];
    }

    get(modelName) {
        if (modelName in T2I_MODELS) {
            return {
                name: modelName,
                category: "image",
                endpoint: T2I_MODELS[modelName],
            };
        }

        if (modelName in T2V_MODELS) {
            return {
                name: modelName,
                category: "text-to-video",
                endpoint: T2V_MODELS[modelName],
            };
        }

        if (modelName in I2V_MODELS) {
            return {
                name: modelName,
                category: "image-to-video",
                endpoint: I2V_MODELS[modelName],
            };
        }

        throw new Error(
            `Model '${modelName}' not found`
        );
    }

    exists(modelName) {
        return (
            modelName in T2I_MODELS ||
            modelName in T2V_MODELS ||
            modelName in I2V_MODELS
        );
    }

    imageModels() {
        return Object.keys(T2I_MODELS);
    }

    textToVideoModels() {
        return Object.keys(T2V_MODELS);
    }

    imageToVideoModels() {
        return Object.keys(I2V_MODELS);
    }
}