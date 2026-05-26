# Extending the Harness: Speaker Notes

Field notes for a 20-minute AI Chapter talk with slide interludes and live demos.

## Timing

- Slides 1-3: 3 minutes
- Slides 4-9 primitive/context bridge: 5 minutes
- Demo setup slide + frontend demos: 6 minutes
- PSA: 3 minutes
- Source/design-system or RCA demo: 3 minutes
- Closing/Q&A: 1-2 minutes

If time gets tight, skip the infrastructure diagram live demo and mention it as a repo exercise.

## Slide 1: Extending the Harness

Open casually. This is not a grand theory talk. It is field notes from trying to make AI tools interact with more of the real engineering workflow.

Key line:

> When I say harness, I mean the software stack around the model: the thing that turns model output into action and gives it arms and legs in the world.

## Slide 2: How We Got Here

Walk the timeline quickly:

- Tab: AI lived near the cursor.
- Chat: AI moved beside the code.
- Diff: AI started proposing reviewable edits.
- Harness: the interesting layer is now what the model can see, touch, run, and verify.

Key line:

> The important shift is not just model capability. It is the interface around the model changing.

## Slide 3: The Harness Spectrum

Meet the room where they are. At Intact, people encounter harnesses through different form factors: IntactGPT/Rovo, Windsurf/Copilot, Devin, Claude Code, Copilot CLI.

Key line:

> These are all harnesses, but they expose different amounts of the machinery.

Do not make this a ranking. It is about exposure, form factor, and which levers are visible.

## Slide 4: Four Plugin Primitives

This is the vocabulary bridge.

Key line:

> These are four common levers people can pull when they want the harness to see, do, or remember more than it does out of the box.

Keep it fast. Name MCP, Skills, Hooks, and Subagents. This slide is not a taxonomy and not a maturity model.

## Slide 5: MCP

MCP is the connector/protocol side of the story.

Key line:

> MCP lets a harness discover capabilities from a server and hand usable definitions to the model.

Walk the trace: `.mcp.json`, `tools/list`, tool definitions, then the system/context bar.

Speaker beat:

> This is not free. Tool definitions occupy context. Tool-search and lazy discovery patterns try to reduce that cost, but add their own tradeoffs.

## Slide 6: Skills

Skills are file-backed procedures.

Key line:

> A skill is a small procedure bundle. The description is the catalog entry; the deeper instructions, examples, scripts, and references come in when the model chooses it or you invoke it directly.

Tie this to the Angular Signal Forms demo: without the skill, the agent has to guess; with the skill, it has a local procedure.

## Slide 7: Hooks

Hooks are harness events plus code.

Key line:

> Hooks are like red squiggles or IDE feedback for the harness: they can lint, check, block, call an LSP, or ask another reviewer to look at something.

Emphasize the context-cost distinction:

> Hooks are close to zero cost in the context window unless they intentionally report something back.

## Slide 8: Subagents

Subagents split work into separate contexts.

Key line:

> A subagent is useful when a bounded task deserves its own prompt, tool permissions, and context window.

Good examples: review changed code, research a dependency, inspect a frontend screenshot, diagnose test failure.

Do not oversell it:

> The main thread still has to integrate and verify the result.

## Slide 9: Context Window

This is the cost model.

Key line:

> Every lever competes for the same finite workspace.

Explain that long or crowded contexts can make work more brittle. Then explain prompt caching: a stable prefix can be much cheaper, but changing early prompt material like tool definitions, system instructions, or tool schemas can invalidate the cache.

## Slide 10: Let's Open the Workbench

Transition to the repo.

Key line:

> Rather than describe this abstractly, let's use a tiny repo and gradually give the agent more useful surface area.

Open `tickets/TICKET-101-intake-form-iceberg.md`.

First prompt, intentionally without Angular Signal Forms skill:

```text
Pick up TICKET-101. Migrate the claim intake form from Reactive Forms to Angular 21 Signal Forms and run the frontend build.
```

Then install or enable Angular Signal Forms guidance and rerun:

```text
Pick up TICKET-101. Migrate the claim intake form from Reactive Forms to Angular 21 Signal Forms and run the frontend build. If you are unsure about Signal Forms, read the relevant docs or installed Angular skills first.
```

## Slide 11: New Senses

Debrief the first demo.

Key line:

> The harness does not just let the model act. It lets it perceive.

Name the senses: ticket context, repo structure, framework guidance, build output, browser screenshots, source packages. The model is not magically wiser; it has better grounding and feedback.

## Slide 12: Throughput Theater

This is the PSA. Keep it sharp, not bitter.

Key line:

> The hype screenshot is always the numerator: agents, terminals, PRs, tokens. Engineering lives in the denominator: specs, tests, review, architecture, ownership, and whether the codebase still makes sense next week.

Optional data callouts:

- METR 2026: technical workers self-reported 3x speed but only 1.4-2x value, and METR warns self-reported speed can overstate value.
- Harness 2026: 81% of surveyed leaders say developers spend more time in code review after AI coding tool adoption.
- Constraint Decay 2026: agents lost about 30 points in assertion pass rate as structural backend constraints accumulated.

Personal opinion:

> Models are goal-driven. They optimize for the local instruction. They do not bear responsibility for the code they generate, and they do not feel the pain of maintaining a messy codebase. That responsibility still belongs to us.

## Slide 13: Source of Truth

Set up the Iceberg/source demo.

Key line:

> For internal libraries, private design systems, and fast-moving APIs, the model's memory is not the source of truth. The source is.

Open `tickets/TICKET-103-iceberg-design-system.md`.

Prompt:

```text
Pick up TICKET-103. Inspect the local Iceberg package first, then improve the claim intake screen so it feels like an Iceberg-based internal workflow. Run the frontend build and use browser screenshots if available.
```

If you want a backend alternative instead, open `tickets/TICKET-201-backend-rca.md`.

Prompt:

```text
We observed reserve estimates increasing by the deductible after March 12, 2026. Use git history and tests to identify the most probable cause. Do not fix it yet; give me the commit, changed line, and reasoning.
```

## Slide 14: Where to next?

Close with the organizational framing.

Key line:

> The future is not just bigger personal swarms. It is deciding which surfaces we expose well as an engineering organization: source, docs, design systems, tickets, CI, git history, infrastructure, and review workflows.

Final thought:

> Pick one surface. Make it available. Give the model feedback. Keep the judgment human.

Then Q&A.

## Sources Used

- METR, 2026 AI usage survey: https://metr.org/blog/2026-05-11-ai-usage-survey/
- Harness, 2026 developer productivity measurement survey: https://www.harness.io/press-and-news/ai-has-outpaced-how-engineering-organizations-measure-developer-productivity
- Constraint Decay, 2026: https://arxiv.org/abs/2605.06445
- SWE-CI, 2026: https://arxiv.org/abs/2603.03823
- Claude Code MCP docs: https://code.claude.com/docs/en/mcp
- Claude Code Skills docs: https://code.claude.com/docs/en/skills
- Claude Code Hooks docs: https://code.claude.com/docs/en/hooks
- Claude Code Subagents docs: https://code.claude.com/docs/en/sub-agents
- Anthropic prompt caching docs: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- OpenAI prompt caching docs: https://developers.openai.com/api/docs/guides/prompt-caching
- Angular Signal Forms docs: https://angular.dev/guide/forms/signals/overview
- AWS Labs diagram-as-code: https://github.com/awslabs/diagram-as-code
