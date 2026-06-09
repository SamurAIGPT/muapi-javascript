export class AccountAPI {
    constructor(client) {
        this.client = client;
    }

    async balance() {
        return this.client.get(
            "account/balance"
        );
    }

    async info() {
        return this.client.get(
            "account/balance"
        );
    }
}