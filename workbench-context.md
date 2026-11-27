# Meridian system map for AI CODEER

This is a compact index of the existing Meridian project so the coding assistant starts with useful context. It is not a claim that every subsystem has been freshly verified. Check the named files and tests before describing a feature as working.

## Product and safety boundaries

Meridian is the existing market research, charting and practice-trading product at `meridianlab.onrender.com`, backed by the private `LucasNeacsu18/meridian2` repository. AI CODEER is an owner-only coding and research area inside Meridian; it is not a separate product.

Keep AI CODEER focused on reading, discussing and editing code. Do not build live trading, real-money execution, broker actions, deposits, withdrawals or financial-account setup into it. Never treat a research result as proof of future returns. Trading-related tests and app surfaces elsewhere in this repository may be sensitive; do not run live workflows to inspect them.

The selected project folder and selected file contents stay in the browser until the user chooses to attach a file to a chat turn. A save writes only the open file after a clear user action. A GitHub push must go to a new review branch; never push directly to `main` or another protected branch. Do not execute shell commands or code supplied by a model.

## Main surfaces

- `app/src/app/AppShell.tsx`: signed-in application shell, page navigation and owner-only entry points.
- `app/src/app/agent.tsx`: Mira chat UI; `supabase/functions/agent/index.ts`: server-side Mira answers, market context and proposed app actions.
- `app/src/app/Terminal.tsx` (under `app/src/terminal/`): charting and paper-trading terminal. `app/src/chart/`: chart model, drawings and rendering.
- `app/src/app/intelligence.tsx`, `app/src/app/hive.tsx`, `app/src/app/council.tsx`, `app/src/app/aicouncil.tsx`: research/intelligence pages and the agent council.
- `src/research/`, `src/platform/`, `src/brain/`, `src/engine/`, `src/strategies/`: research experiments, council and evidence, memory/replay, backtests and strategy definitions.
- `src/live/`: account, risk, approval and execution code. Treat as sensitive; do not activate a live mode or run execution scripts.
- `supabase/functions/`: hosted app functions. `supabase/migrations/`: schema and row-security policy changes.
- `docs/STATE.md`: newest dated project handoff. `docs/MERIDIAN-MAP.md`: system inventory (dated 4 Nov 2026). `docs/INTELLIGENCE-ROADMAP.md`: intelligence work and blockers. `MERIDIAN_BUILD_SPEC.md` and `docs/REQUEST-V11.md`: historical requirements and research ideas, not proof of current implementation.

## Research and evidence

The existing project includes charting, paper accounts, a research Lab, market history/context, an AI council, an experiment register, hypothesis and backtest work, a market relationship graph, and account/risk controls. The current status of each finding is in `docs/STATE.md`, `docs/DECISIONS.md` and the matching `docs/r*.md`/`src/research/` records. Prefer those primary records over older vision documents or marketing copy. Distinguish built, tested, deployed, planned, blocked and unverified work.

Large generated data, account exports, runtime logs, build outputs, `.env*`, key material and local agent history are not general prompt context. Search source and documentation selectively. Do not attach broad repository contents or secrets to a model.

## Coding workflow

The existing app is TypeScript, React and Vite; backend work is in Deno Supabase Edge Functions and SQL migrations. `package.json` lists `npm run typecheck`, `npm test` and `npm run build`. Read a script before running it: some historical scripts access market providers, credentials or trading services. Use only checks that are local and read-only for AI CODEER tasks.

For a code proposal, explain the files and behavior that change, show a reviewable diff, name checks that were actually run, and state any integration that still needs deployment or user configuration. Never claim to have saved or pushed a change when the user has not approved that action.
