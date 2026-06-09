import { MuAPI } from "../src/index.js";

try {
    const client = new MuAPI("invalid-key");

    await client.account.balance();
} catch (e) {
    console.log("Name:", e.name);
    console.log("Status:", e.status);
    console.log("Message:", e.message);
}