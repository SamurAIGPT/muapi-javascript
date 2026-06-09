import axios from "axios";
import { MuAPIError } from "./errors.js";

const BASE_URL = "https://api.muapi.ai/api/v1";

export class MuAPIClient {
    constructor(apiKey) {
        if (!apiKey) {
            throw new MuAPIError(
                "API key is required. Pass your MuAPI API key when creating the client."
            );
        }

        this.apiKey = apiKey;
    }

    headers() {
        return {
            "x-api-key": this.apiKey,
            "Content-Type": "application/json",
        };
    }

    async post(endpoint, payload) {
        try {
            const response = await axios.post(
                `${BASE_URL}/${endpoint}`,
                payload,
                {
                    headers: this.headers(),
                }
            );

            return response.data;
        } catch (error) {
            throw new MuAPIError(
                error.response?.data?.detail ||
                error.message,
                error.response?.status,
                error.response?.data
            );
        }
    }

    async get(endpoint) {
        try {
            const response = await axios.get(
                `${BASE_URL}/${endpoint}`,
                {
                    headers: this.headers(),
                }
            );

            return response.data;
        } catch (error) {
            throw new MuAPIError(
                error.response?.data?.detail ||
                error.message,
                error.response?.status,
                error.response?.data
            );
        }
    }

    async getPrediction(id) {
        try {
            const response = await axios.get(
                `${BASE_URL}/predictions/${id}/result`,
                {
                    headers: this.headers(),
                }
            );

            return response.data;
        } catch (error) {
            throw new MuAPIError(
                error.response?.data?.detail ||
                error.message,
                error.response?.status,
                error.response?.data
            );
        }
    }
}