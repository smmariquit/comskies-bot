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

## Legal

- [Privacy Policy](docs/PRIVACY.md)
- [Terms of Service](docs/TERMS.md)
- UPLB Tools org policy (when live): [uplbtools.me/privacy](https://uplbtools.me/privacy)

## License

MIT: see [LICENSE](LICENSE).
