export type PublicBlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  bodyMarkdown: string;
  tag: string;
  date: string;
  publishedAt: string;
  image?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export const fallbackBlogPosts: PublicBlogPost[] = [
  {
    id: 'nist-pqc-web3',
    title: 'NIST Finalizes Post-Quantum Cryptography Standards: What It Means for Web3',
    slug: 'nist-post-quantum-cryptography-standards-web3',
    excerpt:
      'An analysis of FIPS 203, FIPS 204, and FIPS 205, and what post-quantum standards mean for wallets, bridges, validators, and crypto-agile infrastructure.',
    bodyMarkdown: `## Quick answer

NIST's post-quantum cryptography standards give Web3 teams a practical migration target. The immediate priority is not replacing every primitive overnight. It is designing crypto-agile systems that can rotate signatures, keys, and verification logic without breaking users or protocol trust.

## Why it matters

Blockchains are long-lived systems. Wallet signatures, bridge validators, custody flows, and governance keys may need to remain secure for years. Post-quantum planning protects those systems before quantum-capable adversaries become practical.

## Practical takeaway

Protocols should inventory cryptographic dependencies, separate verification logic from business logic, and build migration paths for post-quantum signatures before emergency pressure arrives.`,
    tag: 'RESEARCH',
    date: 'Jun 18, 2026',
    publishedAt: '2026-06-18T00:00:00.000Z',
  },
  {
    id: 'crypto-agility-smart-contracts',
    title: 'The Crypto-Agility Imperative in Smart Contract Design',
    slug: 'crypto-agility-smart-contract-design',
    excerpt:
      'Why Web3 systems need upgrade-safe cryptographic boundaries before post-quantum migration becomes urgent.',
    bodyMarkdown: `## Quick answer

Crypto-agility means a protocol can change cryptographic primitives without rewriting the entire system. For smart contracts, this requires modular verification, clear governance controls, and conservative migration paths.

## Why it matters

If signature verification is deeply coupled to business logic, post-quantum upgrades become risky. Teams should isolate verification and prepare for multiple signature schemes.`,
    tag: 'ENGINEERING',
    date: 'May 28, 2026',
    publishedAt: '2026-05-28T00:00:00.000Z',
  },
  {
    id: 'ai-threat-modeling-bridges',
    title: 'AI-Driven Threat Modeling for Cross-Chain Bridges',
    slug: 'ai-driven-threat-modeling-cross-chain-bridges',
    excerpt:
      'How AI-assisted research workflows can help security teams monitor bridge risk, validator assumptions, and abnormal threat patterns.',
    bodyMarkdown: `## Quick answer

AI can help security teams organize signals, summarize incidents, and identify patterns across cross-chain bridge threats. It should assist human review, not replace protocol security judgment.

## Practical takeaway

Use AI for monitoring, triage, and research synthesis. Keep final risk decisions under expert human control.`,
    tag: 'SECURITY',
    date: 'May 10, 2026',
    publishedAt: '2026-05-10T00:00:00.000Z',
  },
  {
    id: 'pqc-wallet-migration',
    title: 'Post-Quantum Wallet Migration: The Decisions That Matter Before You Change a Signature',
    slug: 'post-quantum-wallet-migration-decisions',
    excerpt: 'A wallet migration is a product, custody, and protocol decision—not simply an algorithm swap. Here is the decision sequence we use to make it manageable.',
    bodyMarkdown: `## The migration starts outside the signature primitive

A post-quantum wallet program is often framed as a question of which signature scheme to adopt. That question matters, but it comes late in the process. A wallet is also a recovery experience, an identity system, a custody boundary, and a promise to users about how they can access value.

The right first move is an inventory: identify every signing flow, every verifier, every account abstraction, every backup mechanism, and every third-party integration that assumes a particular key type.

## A useful decision sequence

- **Map the trust boundary.** Separate keys that authorize funds, validators, governance, and service-to-service traffic.
- **Design account continuity.** Define how existing users can move, recover, or rotate without creating a social-engineering opportunity.
- **Isolate verification.** Keep cryptographic verification modular so a protocol can support a transition period without duplicating business logic.
- **Test the operational path.** Key sizes, signing latency, hardware compatibility, and support tooling all shape whether an upgrade is usable.

## Why crypto-agility is the real outcome

No team should treat a post-quantum upgrade as the last cryptographic change it will ever make. The durable asset is a system that can introduce, observe, deprecate, and rotate cryptographic primitives in a controlled way.

For wallet teams, that means measuring readiness as an operational capability: can you identify the affected accounts, communicate clearly, migrate safely, and reverse a problematic rollout?`,
    tag: 'PQC STRATEGY',
    date: 'Apr 22, 2026',
    publishedAt: '2026-04-22T00:00:00.000Z',
    seoTitle: 'Post-Quantum Wallet Migration | Codesstellar',
    seoDescription: 'A practical, product-led approach to post-quantum wallet migration and crypto-agile architecture.',
  },
  {
    id: 'ai-security-control-plane',
    title: 'AI Is Not the Security Decision Maker. It Is the Security Control Plane’s Fastest Researcher.',
    slug: 'ai-security-control-plane-web3',
    excerpt: 'The opportunity for AI in protocol security is not autonomous control—it is better context, clearer prioritization, and faster expert review.',
    bodyMarkdown: `## Security teams do not need more noise

Protocol security produces an abundance of signals: code changes, governance proposals, contract events, incident reports, bridge operations, vendor updates, and internal alerts. The hard problem is connecting the signals quickly enough for experts to make good decisions.

This is where AI is useful. It can summarize a change set, connect it to known system dependencies, group similar alerts, and surface the assumptions that need a reviewer’s attention.

## Keep agency with the people accountable for risk

An AI workflow should make its evidence visible. It should show which sources informed a summary, distinguish observation from inference, and make it easy for a reviewer to reject or correct an output. It should not silently make irreversible protocol or custody decisions.

## The operating model

- Ingest approved sources with clear provenance.
- Enrich activity with code, asset, and dependency context.
- Rank review queues by exposure and confidence, not by novelty alone.
- Record human decisions so the team can improve playbooks over time.

The result is a security operation that learns faster while preserving the accountability that serious systems require.`,
    tag: 'AI SECURITY',
    date: 'Mar 30, 2026',
    publishedAt: '2026-03-30T00:00:00.000Z',
    seoTitle: 'AI-Assisted Web3 Security Operations | Codesstellar',
    seoDescription: 'How AI can strengthen Web3 security review without replacing accountable human decision-making.',
  },
  {
    id: 'bridge-crypto-inventory',
    title: 'Your Bridge Has More Cryptographic Dependencies Than Its Validator Set',
    slug: 'bridge-cryptographic-dependency-inventory',
    excerpt: 'A bridge’s quantum-readiness depends on every trust boundary around it: signers, relayers, APIs, operational keys, and recovery processes.',
    bodyMarkdown: `## Start with the full system, not the contract

A bridge can look simple when viewed as a pair of contracts and a validator set. In production, it is a chain of trust assumptions involving signing infrastructure, message formats, relayer services, operator identity, monitoring, governance, and emergency controls.

Post-quantum planning needs to include every one of those surfaces. Otherwise a new signature primitive can coexist with an older, exposed administrative or operational path.

## A bridge inventory asks different questions

- What keys can mint, release, pause, upgrade, or recover assets?
- Where is public-key cryptography used to authenticate messages or operators?
- Which dependencies are controlled by your team, and which are vendor or ecosystem constraints?
- What is the safe rollback plan if a new verifier behaves unexpectedly?

## Make transition a design property

The target state is not a claim that a bridge is permanently quantum-proof. It is an architecture with explicit trust boundaries, observable key use, and a tested process for rotating the cryptographic layer when standards, ecosystem support, or risk posture changes.`,
    tag: 'PROTOCOL SECURITY',
    date: 'Feb 14, 2026',
    publishedAt: '2026-02-14T00:00:00.000Z',
  },
];
