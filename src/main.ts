import "dotenv/config";
import { createBotClient } from "./bot.js";
import { loadConfig } from "./config.js";
import { log } from "./log.js";

async function main() {
  const config = loadConfig();
  const client = createBotClient();
  await client.login(config.DISCORD_TOKEN);
}

main().catch((err) => {
  log("error", String(err));
  process.exit(1);
});
