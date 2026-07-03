import { z } from "zod";

const envSchema = z.object({
  DISCORD_TOKEN: z.string().min(1),
  DISCORD_CLIENT_ID: z.string().min(1),
  DISCORD_GUILD_ID: z.string().optional(),
  LOG_LEVEL: z.enum(["info", "warn", "error"]).default("info"),
  PUBLIC_WEBSITE_URL: z.string().url().default("https://room-tba.uplbtools.me"),
});

export type BotConfig = z.infer<typeof envSchema>;

export function loadConfig(): BotConfig {
  return envSchema.parse({
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID,
    LOG_LEVEL: process.env.LOG_LEVEL ?? "info",
    PUBLIC_WEBSITE_URL: process.env.PUBLIC_WEBSITE_URL ?? "https://room-tba.uplbtools.me",
  });
}
