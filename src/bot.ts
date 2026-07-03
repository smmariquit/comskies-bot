import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { commands } from "./commands/index.js";
import { log } from "./log.js";
import type { BotClient } from "./types.js";

export function createBotClient(): BotClient {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds],
  }) as BotClient;

  client.commands = new Collection(commands.map((cmd) => [cmd.data.name, cmd]));

  client.once(Events.ClientReady, (ready) => {
    log("info", `Logged in as ${ready.user.tag}`);
    log("info", `Commands: ${[...client.commands.keys()].join(", ")}`);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      await command.execute(interaction);
    } catch (err) {
      log("error", `${interaction.commandName}: ${String(err)}`);
      const payload = { content: "Something went wrong. Try again later.", ephemeral: true };
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp(payload);
      } else {
        await interaction.reply(payload);
      }
    }
  });

  return client;
}
