# Comskies Bot

Discord bot for the UPLB ICS Discord server

## Setup

1. Copy `.env.example` → `.env` and fill Discord app credentials.
2. `bun install`
3. `bun run register-commands` (set `DISCORD_GUILD_ID` for dev guild registration)
4. `bun run dev`

## Scripts

| Command | Action |
| ------- | ------ |
| `bun run dev` | Watch mode |
| `bun run register-commands` | Register slash commands |
| `bun run build` | Compile to `dist/` |
| `bun run check` | Lint, typecheck, test, build |

## Commands

| Command | Description |
| ------- | ----------- |
| `/ping` | Latency check |
| `/ics` | ICS Discord resources and campus tools |

Roadmap: [docs/ROADMAP.md](docs/ROADMAP.md).

## Production hosting

Comskies is hosted with the other personal Discord bots by [`smmariquit/discord-bot-host`](https://github.com/smmariquit/discord-bot-host) on one Heroku web dyno. The central adapter owns the `COMSKIES_` environment prefix and starts this bot only when `comskies` is present in `ENABLED_BOTS`. See the host's [integration documentation](https://github.com/smmariquit/discord-bot-host/blob/main/docs/INTEGRATION.md).

The Heroku app currently uses a GitHub Student Developer Pack credit, planned through May 2028 as an estimate. Verify the actual credit expiry in Heroku.

## Legal

- [Privacy Policy](docs/PRIVACY.md)
- [Terms of Service](docs/TERMS.md)
- UPLB Tools org policy (when live): [uplbtools.me/privacy](https://uplbtools.me/privacy)

## License

MIT: see [LICENSE](LICENSE).
