<!-- BEGIN:studio-codex-rules -->
# AI Studio — projekt `setup`

Součást mono-repa `~/ai-studio` (sólo studio, Pavel). Globální pravidla máš
v `~/.codex/AGENTS.md`, kontext studia v `~/ai-studio/AGENTS.md`.

- Tenhle projekt nemá `CLAUDE.md`. Řiď se `~/.codex/AGENTS.md` a existujícími patterny v kódu.

**Tvoje role:** nezávislý druhý model vedle Claude Code.
`podívej se na to` / `vymysli` → **nic needituj**, jen nález nebo návrh.
`udělej to` → implementuj, ale **ve vlastní branchi** `codex/<téma>`, nikdy do `main`.

**Prostředí:** Mac mini s málo RAM — **nespouštěj dev server ani Docker.**
Ověřuj přes `npx tsc --noEmit` → `npm run lint`. Vizuál přes push + Vercel preview.

**Tvrdá pravidla:** RLS u každé nové Supabase tabulky ve stejné migraci · žádný `useEffect` ·
auth vždy passwordless · žádné inline styly (Tailwind) · `next/image` místo `<img>` ·
žádné hardcoded URL · auth check první řádek každého API handleru.

Člověk má poslední slovo. Nejednoznačné zadání → **zeptej se, neimprovizuj architekturu.**
<!-- END:studio-codex-rules -->
