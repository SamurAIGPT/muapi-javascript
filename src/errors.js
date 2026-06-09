export class MuAPIError extends Error {
    constructor(message, status = null, data = null) {
        super(message);

        this.name = "MuAPIError";
        this.status = status;
        this.data = data;
    }
}