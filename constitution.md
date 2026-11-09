# Project Constitution — React Tic-Tac-Toe

This document defines the non-negotiable foundations for this repository. Read it before adding or changing features.

## Guiding Principles

- **Simplicity first** — prefer the smallest solution that solves the problem. If a change needs a long explanation, it is probably over-engineered.
- **No hardcoded secrets or endpoints** — configuration belongs in environment variables; visual design tokens belong in styles, not in `.env` files.
- **Traceability** — every value, dependency, and route should make its origin and purpose obvious.
- **Debuggability** — fail loudly and visibly; avoid silent fallbacks that hide broken data.
- **Official patterns** — use the documented API of each framework and library before inventing a workaround.
- **Portfolio clarity** — this repository is part of a public portfolio. Code should read as clean, intentional, and easy for a reviewer to follow. As a follow-along project, its purpose is to demonstrate the concepts practised in the course, not to imitate production scale.

## Technology Stack Foundations

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | React 18 + Vite | Minimal setup for a state-derivation exercise. |
| Language | JavaScript (JSX) | Matches the course’s essentials deep dive. |
| Styling | Plain CSS | Board, player cards, log, and overlay styles. |
| State | React `useState` | Turns and player names are the only state. |

**Rule of thumb:** a new dependency must solve a concrete problem that the current stack cannot solve cleanly. Justify it in the change that introduces it.

## Core Premises

### 1. Scope

A course project for derived state and component composition. It should stay a local two-player game; AI, persistence, and online play would change its purpose.

### 2. Environment Isolation

- This project has no runtime secrets. Do not introduce `.env` files unless a real secret or environment-specific URL appears.
- If configuration is added, use environment variables and document them in the README.
- Never commit keys, tokens, database URLs, or credentials.

### 3. Architecture

- Game rules live in `constants/` and pure helpers in `helpers/`.
- `App.jsx` owns turns and player names; components render derived data.
- Do not duplicate winning-line logic inside components.

### 4. Data and State

- The turn history is the single source of truth; board, active player, and winner are derived.
- State is in memory and resets on reload.
- Never mutate the initial board or existing turns.

### 5. Styling and UX

- Global styles live in `src/index.css`; board and player styles are shared class names.
- Keep occupied squares visibly disabled and the active player highlighted.
- The game-over overlay must not block restart.

### 6. Quality Gates

- `npm run lint` and `npm run build` are the gates.
- Manually test every winning line, a draw, occupied-square clicks, renaming both players, restart, and the move log.
- Confirm the active player alternates correctly after restart.

### 7. Deployment

- Build with Vite and publish `dist/` through GitHub Actions.
- Configure the base path for GitHub Pages.
- No server runtime is required.

## What to Avoid

- Storing the board or winner in state when they can be derived.
- Mutating the initial board array.
- Reversing the turn order without updating the active-player helper.
- Adding AI or networking to a local two-player exercise.
- Duplicating winning combinations outside `constants/`.

## Checklist Before Adding Anything New

- Does this solve a real problem for this project, or am I adding scope for its own sake?
- Is every new value configuration-driven rather than hardcoded?
- Does the change follow the existing folder and naming patterns?
- Is there a clear failure path when data, the network, or the environment is unavailable?
- Have I run the available lint/build/test command and fixed what it reports?
- Did I update `README.md` and `MEMORY.md` if behaviour or setup changed?

## Philosophy Statement

This repository exists to show thoughtful front-end engineering: clear structure, readable code, and deliberate trade-offs. The goal is not to use every tool available, but to make every file explain itself. Simplicity is the feature.
