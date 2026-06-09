export class AudioAPI {
    constructor(client) {
        this.client = client;
    }

    async fromText({
        prompt,
        duration = 10,
        model = "mmaudio"
    }) {
        return this.client.post(
            "mmaudio-v2/text-to-audio",
            {
                prompt,
                duration
            }
        );
    }
}