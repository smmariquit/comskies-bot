import "dotenv/config";
import { REST, Routes } from "discord.js";
import { commands } from "./commands/index.js";
import { loadConfig } from "./config.js";
import { log } from "./log.js";

async function register() {
  const config = loadConfig();
  const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);
  const body = commands.map((c) => c.data.toJSON());

  if (config.DISCORD_GUILD_ID) {
    await rest.put(
      Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, config.DISCORD_GUILD_ID),
      { body },
    );
    log("info", `Registered ${body.length} guild commands`);
  } else {
    await rest.put(Routes.applicationCommands(config.DISCORD_CLIENT_ID), { body });
    log("info", `Registered ${body.length} global commands`);
  }
}

register().catch((err) => {
  log("error", String(err));
  process.exit(1);
});
