import { MuAPIClient } from "./client.js";
import { ImagesAPI } from "./images.js";
import { VideosAPI } from "./videos.js";
import { AudioAPI } from "./audio.js";
import { PredictionsAPI } from "./predictions.js";
import { UploadsAPI } from "./uploads.js";
import { ModelsAPI } from "./model.js";
import { AccountAPI } from "./account.js";

export class MuAPI {
    constructor(apiKey) {
        const client = new MuAPIClient(apiKey);

        this.images = new ImagesAPI(client);
        this.videos = new VideosAPI(client);
        this.audio = new AudioAPI(client);
        this.predictions = new PredictionsAPI(client);
        this.uploads = new UploadsAPI(client);
        this.models = new ModelsAPI();
        this.account = new AccountAPI(client);
    }
}

export {
    ImagesAPI,
    VideosAPI,
    AudioAPI,
    PredictionsAPI,
    UploadsAPI,
    ModelsAPI,
    AccountAPI
};
export { MuAPIError } from "./errors.js";