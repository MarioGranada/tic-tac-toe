# AGENTS.md — React Tic-Tac-Toe

Compact guide for future OpenCode sessions. It records only the facts an agent is likely to miss or get wrong.

## Quickstart

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies. |
| `npm run dev` | Start Vite at http://localhost:5173. |
| `npm run build` | Verify the production bundle. |
| `npm run lint` | Run ESLint. |

## Requirements

- Node.js 18+.
- npm (a `package-lock.json` is committed).

## Environment

- No environment variables are used.

## Architecture

- `src/App.jsx` — turns, players, derived board/winner, and handlers.
- `src/helpers/deriveActivePlayer.js` — whose turn it is.
- `src/helpers/deriveGameBoard.js` — board from turn history.
- `src/helpers/deriveWinner.js` — winner from winning lines.
- `src/constants/index.js` — rules and defaults.
- `src/components/` — board, player, log, and game-over UI.

## Commands and build order

- Use `npm run dev` for iteration and `npm run build` before finishing.
- `npm run lint` is the only static check; there are no tests.

## Conventions and gotchas

- Turns are newest-first; reversing the order changes the active-player logic.
- `deriveGameBoard` must copy the initial board before mutating it, or state is shared between renders.
- A draw requires nine turns and no winner; checking only the turn count is not enough.
- Player names come from the `players` map, not from the symbol itself.
- The entry file is `index.jsx`, not `main.jsx`.

## Memory

- Read `MEMORY.md` first to understand the current status and decisions.
- Before changing behaviour, read `constitution.md` and keep the change aligned with it.
- After a task, update `MEMORY.md` with status, decisions, and mistakes to avoid. Keep it short.
- If a rule becomes permanent, move it into this file instead of leaving it in memory.
- Never store secrets, tokens, or personal data in `MEMORY.md`.
