export class PredictionsAPI {
    constructor(client) {
        this.client = client;
    }

    async get(id) {
        return this.client.getPrediction(id);
    }

    async wait(id, interval = 3000) {
        while (true) {
            const result = await this.get(id);

            if (result.status === "completed") {
                return result;
            }

            if (result.status === "failed") {
                throw new Error(
                    result.error || "Generation failed"
                );
            }

            await new Promise(resolve =>
                setTimeout(resolve, interval)
            );
        }
    }
}