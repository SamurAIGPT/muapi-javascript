import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "your-api-key"
);

const result =
    await client.account.balance();

console.log(result);