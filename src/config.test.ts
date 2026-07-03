import { describe, expect, test } from "bun:test";

describe("config", () => {
  test("loadConfig requires token and client id", async () => {
    const prevToken = process.env.DISCORD_TOKEN;
    const prevId = process.env.DISCORD_CLIENT_ID;
    delete process.env.DISCORD_TOKEN;
    delete process.env.DISCORD_CLIENT_ID;
    const { loadConfig } = await import("./config.ts");
    expect(() => loadConfig()).toThrow();
    if (prevToken !== undefined) process.env.DISCORD_TOKEN = prevToken;
    if (prevId !== undefined) process.env.DISCORD_CLIENT_ID = prevId;
  });
});
