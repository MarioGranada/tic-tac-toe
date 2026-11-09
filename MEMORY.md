# React Tic-Tac-Toe — Working Memory

_Last updated: 2026-11-02_

## Current status

- Board, turn log, player renaming, winner/draw detection, and restart are implemented.
- Game rules and derived-state helpers are separated from components.
- No tests or deployment workflow yet.

## Key decisions

- Stored turns instead of the board so the log and board share one source of truth.
- Kept winning combinations in `constants/` so rules are easy to audit.

## Known limitations and follow-ups

- Local two-player only; no AI.
- No persistence or score history.
- No tests.
- No deployment workflow.

## Mistakes to avoid

- Checking only nine turns marks a win on the ninth move as a draw.
- Mutating `INITIAL_GAME_BOARD` directly corrupts the next game.
- Assuming the latest turn is at the end of the array; it is at index 0.

## Next steps

- Add tests for every winning line and the draw condition.
- Add a score tracker across rounds.
- Add a GitHub Pages workflow.

---

Keep this file under ~60 lines. Summarise or delete notes that no longer add value.
