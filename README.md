# React Tic-Tac-Toe

A two-player tic-tac-toe game built to practise derived state and component composition. Every move is stored as a turn, and the board, active player, and winner are computed from that history.

Players can rename themselves, see whose turn it is, review the move log, and restart the round. There is no AI opponent and no persistence.

> **Follow-along project.** This app was built while following **React — The Complete Guide (Academind / Maximilian Schwarzmüller)**. It is included in the portfolio as a learning exercise, not as a production product. The implementation is my own work based on the course material.

## Live demo

| | |
| --- | --- |
| **Live site** | https://mariogranada.github.io/tic-tac-toe/ |
| **Repository** | https://github.com/MarioGranada/tic-tac-toe |
| **Portfolio summary** | Two-player tic-tac-toe in React where the board, active player and winner are all derived from a single turn history, with editable player names and a move log. |

## Features

- Three-by-three game board with disabled occupied squares.
- Turn history stored newest-first.
- Active player derived from the latest turn.
- Board derived from the turn history.
- Winner and draw detection from winning combinations.
- Editable player names.
- Game-over overlay with restart.
- Move log showing each selection.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 + Vite |
| Language | JavaScript (JSX) |
| Styling | Plain CSS |
| State | React `useState` |

## Project structure

```text
tic-tac-toe/
├── src/
│   ├── components/
│   │   ├── GameBoard/index.jsx
│   │   ├── Player/index.jsx
│   │   ├── Log/index.jsx
│   │   └── GameOver/index.jsx
│   ├── helpers/
│   │   ├── deriveActivePlayer.js
│   │   ├── deriveGameBoard.js
│   │   └── deriveWinner.js
│   ├── constants/index.js       # Initial board, players, winning lines
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── public/                      # Game logo and background patterns
└── index.html
```

## Getting started

### Requirements

- Node.js 18+.
- npm (a `package-lock.json` is committed).

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

**Start the development server**

```bash
npm run dev
```

Open http://localhost:5173.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite on port 5173. |
| `npm run build` | Build the app into `dist/`. |
| `npm run preview` | Preview the production build. |
| `npm run lint` | Run ESLint over JS/JSX files. |

## How it works

`App.jsx` stores `players` and `gameTurns`. A turn is `{ square: { row, col }, player }`, and new turns are prepended, so `gameTurns[0]` is always the latest move.

`deriveActivePlayer` starts with X and switches to O when the latest turn was X. `deriveGameBoard` copies the initial board and applies every turn. `deriveWinner` checks the eight winning lines against the current board and returns the player name.

A draw is `gameTurns.length === 9 && !winner`. The game-over overlay renders when either condition is true.

`GameBoard` disables a square when its cell is not `null`. `Log` lists each turn. `Player` edits names through `onNameChange`, keyed by symbol.

`constants/index.js` owns the initial board, default player names, and winning combinations, so game rules are not duplicated in components.

## Deployment

- **Live:** `.github/workflows/deploy.yml` builds the app on every push to the default branch and publishes `dist/` (plus a `404.html` SPA fallback) to the `gh-pages` branch, which GitHub Pages serves at https://mariogranada.github.io/tic-tac-toe/.
- Target: GitHub Actions can build the Vite app and publish `dist/` to GitHub Pages.
- Set the Vite `base` option to the repository path for a project Pages site.
- No backend, routing, or database is required.

## Notes and limitations

- The game is local two-player only; there is no AI or network play.
- State resets on reload.
- The move log keys turns by square, so each square appears at most once, which is valid because occupied squares cannot be selected again.
- There are no tests.

---

**Author:** Mario Granada
