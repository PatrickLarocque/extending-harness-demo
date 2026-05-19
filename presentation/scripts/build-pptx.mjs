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
