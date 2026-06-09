import fs from "fs";
import axios from "axios";
import FormData from "form-data";

export class UploadsAPI {
    constructor(client) {
        this.client = client;
    }

    async upload(filePath) {
        const form = new FormData();

        form.append(
            "file",
            fs.createReadStream(filePath)
        );

        const response = await axios.post(
            "https://api.muapi.ai/api/v1/upload_file",
            form,
            {
                headers: {
                    ...form.getHeaders(),
                    "x-api-key": this.client.apiKey,
                },
            }
        );

        return response.data;
    }
}