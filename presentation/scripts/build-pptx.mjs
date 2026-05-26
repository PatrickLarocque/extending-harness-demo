import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const require = createRequire(import.meta.url);
const pptxgen = require('/Users/prl/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pptxgenjs');

const slides = [
  {
    image: '01-extending-the-harness.png',
    notes: `Open casually. This is field notes from trying to make AI tools interact with more of the real engineering workflow.

When I say harness, I mean the software stack around the model: the thing that turns model output into action and gives it arms and legs in the world.`
  },
  {
    image: '02-how-we-got-here.png',
    notes: `Walk quickly: Tab, Chat, Diff, Harness.

The important shift is not just model capability. It is the interface around the model changing: what it can see, touch, run, and verify.`
  },
  {
    image: '03-harness-spectrum.png',
    notes: `Meet the room where they are. At Intact, people encounter harnesses through different form factors: IntactGPT/Rovo, Windsurf/Copilot, Devin, Claude Code, Copilot CLI.

These are all harnesses, but they expose different amounts of the machinery. This is not a ranking. It is about exposure and which levers are visible.`
  },
  {
    image: '04-plugin-primitives.png',
    notes: `This is the vocabulary bridge.

These are not the only extension points, but they are four useful primitives people will encounter: MCP, Skills, Hooks, and Subagents.

Keep this quick. The point is to name the levers before showing what they look like.`
  },
  {
    image: '05-mcp-v2.png',
    notes: `MCP is the connector/protocol side of the story.

Client config points the harness at a server. The client asks for capabilities, like tools/list, and the returned tool definitions become callable capabilities for the model.

Speaker beat: this is not free. Tool definitions occupy context. Tool-search and lazy discovery patterns try to reduce that cost, but add their own tradeoffs around discoverability, cache stability, and whether the right tool is visible when the model needs it.`
  },
  {
    image: '06-skills.png',
    notes: `Skills are file-backed procedures.

The lightweight catalog entry is the description/frontmatter. The full SKILL.md, references, scripts, and examples are only useful once the model chooses the skill, or once you invoke it explicitly by name.

Speaker beat: this is how you give the model local habits and workflows without dumping every procedure into the prompt all the time.`
  },
  {
    image: '07-hooks.png',
    notes: `Hooks are harness events plus code.

They can run before or after tool use, match on edits or writes, wait for idle moments, lint changed files, call an LSP, launch a reviewer, or block risky behavior.

Speaker beat: hooks are close to a zero-context-cost abstraction. They do not add much to the context window unless they intentionally report something back. Think red squiggles, CI checks, or IDE feedback for the harness.`
  },
  {
    image: '08-subagents.png',
    notes: `Subagents split work into separate contexts.

They can be useful for bounded research, review, frontend critique, test diagnosis, or migration sweeps. Each can have a different prompt and tool set.

Speaker beat: this keeps the main context cleaner, but it does not remove judgment. The parent thread still has to integrate and verify the result.`
  },
  {
    image: '09-context-window.png',
    notes: `This is the cost model.

Every extension point competes for the same finite context window. As context fills up, work gets more brittle: the model has more to attend to, more stale material, and less room for the actual task.

Prompt caching can make stable prefixes much cheaper, but the prefix has to stay stable. If tool definitions, system instructions, or other early prompt material change, the cache can miss and the request becomes more expensive again.`
  },
  {
    image: '04-open-the-workbench.png',
    notes: `Transition to the repo.

Rather than describe this abstractly, let's use a tiny repo and gradually give the agent more useful surface area.

Open tickets/TICKET-101-intake-form-iceberg.md.

First prompt, intentionally without Angular Signal Forms skill:
Pick up TICKET-101. Migrate the claim intake form from Reactive Forms to Angular 21 Signal Forms and run the frontend build.

Then install or enable Angular Signal Forms guidance and rerun:
Pick up TICKET-101. Migrate the claim intake form from Reactive Forms to Angular 21 Signal Forms and run the frontend build. If you are unsure about Signal Forms, read the relevant docs or installed Angular skills first.`
  },
  {
    image: '05-new-senses.png',
    notes: `Debrief the first demo.

The harness does not just let the model act. It lets it perceive.

Name the senses: ticket context, repo structure, framework guidance, build output, browser screenshots, source packages. The model is not magically wiser; it has better grounding and feedback.`
  },
  {
    image: '06-throughput-theater.png',
    notes: `This is the PSA. Keep it sharp, not bitter.

The hype screenshot is always the numerator: agents, terminals, PRs, tokens. Engineering lives in the denominator: specs, tests, review, architecture, ownership, and whether the codebase still makes sense next week.

Optional data: METR 2026 self-reported 3x speed but 1.4-2x value. Harness 2026 reported 81% spending more time in code review after AI coding tool adoption. Constraint Decay 2026 found roughly a 30 point drop as structural backend constraints accumulated.

Models are goal-driven. They optimize for the local instruction. They do not bear responsibility for the code they generate, and they do not feel the pain of maintaining a messy codebase. That responsibility still belongs to us.`
  },
  {
    image: '07-source-of-truth.png',
    notes: `Set up the Iceberg/source demo.

For internal libraries, private design systems, and fast-moving APIs, the model's memory is not the source of truth. The source is.

Open tickets/TICKET-103-iceberg-design-system.md.

Prompt:
Pick up TICKET-103. Inspect the local Iceberg package first, then improve the claim intake screen so it feels like an Iceberg-based internal workflow. Run the frontend build and use browser screenshots if available.

Backend alternative:
Open tickets/TICKET-201-backend-rca.md and ask it to identify the most probable commit behind the deductible reserve regression.`
  },
  {
    image: '08-where-to-next.png',
    notes: `Close with the organizational framing.

The future is not just bigger personal swarms. It is deciding which surfaces we expose well as an engineering organization: source, docs, design systems, tickets, CI, git history, infrastructure, and review workflows.

Pick one surface. Make it available. Give the model feedback. Keep the judgment human.

Then Q&A.`
  }
];

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Extending the Harness';
pptx.company = 'Intact AI Chapter';
pptx.subject = 'AI Chapter field notes on extending harness surface area';
pptx.title = 'Extending the Harness';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'en-US'
};

for (const item of slides) {
  const slide = pptx.addSlide();
  slide.background = { color: 'F7F2E9' };
  slide.addImage({
    path: path.join(root, 'slides', item.image),
    x: 0,
    y: 0,
    w: 13.333333,
    h: 7.5
  });
  slide.addNotes(item.notes);
}

await pptx.writeFile({ fileName: path.join(root, 'deck', 'extending-the-harness.pptx') });

console.log('Wrote presentation/deck/extending-the-harness.pptx');
