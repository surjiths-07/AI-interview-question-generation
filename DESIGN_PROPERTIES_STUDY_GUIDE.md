# Midnight Syntax Design System — Properties & Architecture Study Guide

A comprehensive technical reference for the **CodeGen AI / Midnight Syntax** design system (Stitch Project ID: `4465903677797311403`). Designed for technical assessments, algorithmic sandboxes, and developer-focused platforms.

---

## 1. Design Philosophy & Aesthetic Core

* **Theme Name**: `Midnight Syntax`
* **Brand Persona**: Precise, technical, focused, and low-glare.
* **Inspirations**: Blends **Modern Corporate SaaS** structure with **Minimalist Developer Tools** (terminal windows, monospaced accents, subtle borders, high-contrast status dots).
* **Depth Philosophy (Tonal Elevation)**: Avoids heavy drop-shadows. Hierarchy is established through **subtle value shifts** (Obsidian `#060e20` to Slate Navy `#171f33` and `#222a3d`) combined with semi-transparent `1px` borders (`outline-variant/30` to `40`).

---

## 2. Color Palette & Semantic Tokens

### A. Surface & Background Tokens
The palette is rooted in deep obsidian and slate tones to provide a low-glare foundation for long coding sessions.

| CSS Variable | Tailwind Token | Hex Code | Semantic Role & Visual Function |
| :--- | :--- | :--- | :--- |
| `--bg-surface-lowest` | `surface-container-lowest` | `#060e20` | Deeper navy base, code editor panels, and tech grid canvas |
| `--bg-surface` / `--bg-surface-dim` | `surface` / `surface-dim` | `#0b1326` | Main backdrop layer for the entire application |
| `--bg-surface-low` | `surface-container-low` | `#131b2e` | Dashboard cards, telemetry panels, and auth card surfaces |
| `--bg-surface-container` | `surface-container` | `#171f33` | Standard interactive card fill, nested containers, and rows |
| `--bg-surface-high` | `surface-container-high` | `#222a3d` | Hover states on table rows, tab headers, and button backgrounds |
| `--bg-surface-highest` | `surface-container-highest` | `#2d3449` | Elevated badges, active diff filters, and icon containers |
| `--bg-surface-bright` | `surface-bright` | `#31394d` | Highest contrast neutral surface for modals and overlays |

### B. Functional & Accent Colors

| Semantic Role | Token Name | Hex Code | Psychological & Functional Purpose |
| :--- | :--- | :--- | :--- |
| **Primary (Emerald Green)** | `primary` | `#4edea3` | Clean compiling code, active milestones, tab underlines, and verified badges |
| **Primary Container** | `primary-container` | `#10b981` | Solid background for primary action CTA buttons |
| **On-Primary** | `on-primary` | `#003824` | Ultra-high contrast dark green typography on primary buttons |
| **Secondary (Electric Blue)**| `secondary` | `#adc6ff` | Logic, processing phases, medium difficulty, and active telemetry steps |
| **Secondary Container** | `secondary-container`| `#0566d9` | Active selections and information callouts |
| **On-Secondary** | `on-secondary` | `#002e6a` | High contrast navy text on secondary badges |
| **Tertiary (Rose / Coral)** | `tertiary` | `#ffb2b7` | Hard difficulty problems, test failures, and critical code markers |
| **Tertiary Container** | `tertiary-container` | `#ff7886` | Destructive confirmations and warning containers |
| **Error** | `error` | `#ffb4ab` | Validation error messages and weak password indicator |
| **Error Container** | `error-container` | `#93000a` | Background for validation error alert banners |

### C. Text & Border Tokens

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `on-surface` | `#dae2fd` | High-contrast main headings, input text, and active titles |
| `on-surface-variant` | `#bbcabf` | Secondary body copy, subtitle descriptors, and table headers |
| `outline` | `#86948a` | Inactive icons, subtle constraint labels, and secondary borders |
| `outline-variant` | `#3c4a42` | Low-contrast `1px` borders on cards, inputs, and section dividers |

---

## 3. Typography Architecture

The system utilizes a dual-font structure to balance legibility with an authentic developer terminal aesthetic.

* **Primary Sans-Serif (`Inter`)**: High-legibility UI workhorse for headlines, labels, and general body text.
* **Technical Monospace (`JetBrains Mono`)**: Signals system-generated outputs, telemetry feeds, code snippets, tags, and status labels.

### Typography Scale Table

| Scale Token | Font Family | Size | Line Height | Weight | Tracking / Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-xl` | `Inter` | `48px` (`3rem`) | `56px` | `700` (Bold) | `-0.02em` | Primary Hero headlines & Telemetry titles |
| `headline-lg` | `Inter` | `32px` (`2rem`) | `40px` | `600` (Semi-Bold) | `-0.01em` | Section headings & Auth card titles |
| `headline-md` | `Inter` | `24px` (`1.5rem`) | `32px` | `600` (Semi-Bold) | Normal | Card titles & Subheadings |
| `body-lg` | `Inter` | `18px` (`1.125rem`)| `28px` | `400` (Regular) | Normal | Value propositions & Hero subtitles |
| `body-md` | `Inter` | `16px` (`1rem`) | `24px` | `400` (Regular) | Normal | Default body paragraphs & Input text |
| `code-md` | `JetBrains Mono`| `14px` (`0.875rem`)| `20px` | `400` (Regular) | Normal | Code editors, test cases & syntax blocks |
| `label-sm` | `JetBrains Mono`| `12px` (`0.75rem`) | `16px` | `500` (Medium) | `+0.05em` | Metadata tags, difficulty pills & status indicators |

---

## 4. Spacing, Shapes & Layout Principles

### A. Spacing Matrix (4px Base Grid)
* **Base Unit**: `4px`
* `xs`: `0.5rem` (`8px`) — Micro-gaps between icons and text.
* `sm`: `1rem` (`16px`) — Card inner padding and component stack gaps.
* `md`: `1.5rem` (`24px`) — Column gutters and section spacing on tablet.
* `lg`: `2rem` (`32px`) — Section dividers and outer margins.
* `xl`: `4rem` (`64px`) — Major section vertical padding on desktop.
* `container-max`: `1280px` — Maximum constraint for readable dashboards.

### B. Border Radii & Shape Language
* **Base / Small (`0.125rem` / `0.25rem`)**: Buttons, input fields, checkboxes, and difficulty tags.
* **Card Container (`0.5rem` / `0.75rem`)**: Modals, dashboard cards, and workbench split panels.
* **Pill (`9999px`)**: System status badges, mentorship tags, and filter buttons.

---

## 5. Screen-by-Screen Component Specifications

```
                                  CodeGen AI Navigation Flow
                                  
     ┌───────────────────────────────────────────────────────────────────────────────────┐
     │                                                                                   │
     │   ┌────────────────────────┐                   ┌──────────────────────────────┐   │
     │   │      Hero Page         │◄─────────────────►│     Developer Login          │   │
     │   │     (#view-hero)       │   "Log In" /      │       (#view-login)          │   │
     │   └───────────▲────────────┘   "Back to Home"  └──────────────▲───────────────┘   │
     │               │                                               │                   │
     │               │ "Create Account" /                            │ "Already have     │
     │               │ "Back to Home"                                │  an account?      │
     │               │                                               │  Log In"          │
     │               ▼                                               ▼                   │
     │   ┌───────────────────────────────────────────────────────────────────────────┐   │
     │   │                          Create Account Page                              │   │
     │   │                             (#view-signup)                                │   │
     │   └───────────────────────────────────────────────────────────────────────────┘   │
     │                                                                                   │
     └───────────────────────────────────────────────────────────────────────────────────┘
```

---

### Page 1: Hero / Landing Page (`#view-hero`)

1. **Sticky Header Navigation**:
   * **Dimensions**: `height: 64px` (`h-16`), full width, `z-index: 50`.
   * **Material**: `bg-surface-container-lowest/90` with `backdrop-blur-md` and `border-b border-outline-variant/60`.
   * **Links**: Problems, Explore Topics, AI Coach ✨, Progress (`JetBrains Mono` 12px font).
   * **Right Actions**: "Log In" (ghost border), "Create Account →" (solid emerald `bg-primary-container`), and profile avatar button.
   * **Mobile Drawer**: Slide-over drawer (`w-72`) with backdrop blur and ARIA expand states.

2. **Hero Banner Section**:
   * **Status Badge**: "Adaptive Socratic AI Mentorship" with pulsing emerald dot (`w-2 h-2 rounded-full bg-primary animate-pulse`).
   * **Typography**: `headline-xl` (44px/48px) with highlighted emerald span (`<span class="text-primary">adaptive AI coach</span>`).
   * **Action CTAs**:
     * Primary: "Start Solving Free →" (Solid Emerald `#10b981`, hover `#4edea3`, active scale `0.95`).
     * Secondary: "Explore 1,200+ Problems ↓" (Ghost button with `border-outline-variant/50`).
   * **Trust Bar**: 3-metric divider ("1,200+ Tier-1 Questions • 75+ DSA Patterns • 10 Deterministic Test Cases").

3. **Interactive Problem Workbench**:
   * **Search Bar**: Left search icon, rounded 8px input with focus ring in emerald.
   * **Filter Matrix**:
     * **Topic Pills**: All, Arrays, Strings, Dynamic Programming, Graphs, Design (active state in solid emerald).
     * **Difficulty Pills**: All, Easy (`text-primary`), Medium (`text-secondary`), Hard (`text-tertiary`).
   * **Data Table (7 Columns Left)**:
     * Sticky header (`bg-surface-container-low`, `JetBrains Mono` 11px uppercase).
     * Interactive rows with status indicators (completed checkmark, in-progress timelapse, unstarted dash).
     * Active row selection highlight: 2px solid primary green left border (`border-l-2 border-primary`).
   * **Inspector Preview Card (5 Columns Right)**:
     * Header with difficulty badge, acceptance percentage, bookmark & share icons.
     * ARIA Tablist: Description, Edge Tests (10), AI Hints ✨, Solutions.
     * Tab Panels:
       * *Description*: Problem description, examples container, and constraints badge.
       * *Edge Tests*: 10 boundary tests status list with checkmarks.
       * *AI Hints*: Socratic coach advice with "Generate Progressive Next Hint" button.
       * *Solutions*: Syntax-highlighted reference solution with scanline shimmer animation.
     * Card Footer: "✨ Ask AI Coach" button & "Solve in Workspace →" CTA button.

4. **Feature Grid & Footer**:
   * 4-Column Feature Grid: Curated Interview Sets, AI Hints Without Spoilers, Deterministic Edge Cases, Personal Progress Tracking.
   * Bottom CTA Banner: "Ready to start practicing?" with "Create Free Account →".
   * Footer: Copyright notice and quick links.

---

### Page 2: Developer Login Page (`#view-login`)

1. **Layout & Tech Grid Background**:
   * Responsive 2-column split layout (5 cols left telemetry, 7 cols right auth form).
   * **Developer Grid Pattern (`.dev-grid-bg`)**:
     * Base color: Obsidian `#060e20`.
     * Radial Gradients: Emerald `rgba(16, 185, 129, 0.08)` at 18%/22% and Blue `rgba(5, 102, 217, 0.06)` at 82%/78%.
     * Grid lines: `48px x 48px` linear gradients at 2.5% opacity white.

2. **Left Telemetry Column Components**:
   * "Back to Home" navigation button.
   * Logo: CodeGen AI Logo (`h-10 w-auto`).
   * Main Headline: "Prepare smarter. Code better." (`Inter` 48px bold with highlighted Emerald span).
   * Subtitle: "Your AI-powered workspace for programming interview preparation."
   * **Synthesis Engine Card**:
     * Header with pulse dot & active session pill (`bg-surface-container-highest`).
     * Vertical 4-Step Pipeline:
       * Step 1: Question Found (`#LC-1143`, checkmark icon).
       * Step 2: AI Classification (`100% Match`, tags: Dynamic Programming, Medium, Amazon).
       * Step 3: Test Cases Generated (`10 / 10 Edge Cases`).
       * Step 4: Solution Ready (`Py 3.11 • Java 17`).
     * Code Snippet Preview: Syntax highlighted Python function with scanline shimmer animation.
   * **System Status Pill**: `SYSTEM STATUS: OPERATIONAL • v2.4.0-stable` with animated ping ring.

3. **Right Authentication Form Column**:
   * Container: `max-w-lg`, `bg-surface-container-low`, 1px border `outline-variant/40`, shadow 2XL.
   * Header: "AUTHENTICATION" badge (`JetBrains Mono` 12px uppercase), 256-bit TLS lock badge, "Welcome Back" title (`Inter` 32px bold).
   * Alert Banner (`role="alert"`): Dynamic error/info banner with status announcer.
   * Social OAuth Buttons: Google & GitHub buttons (`bg-surface-container`, hover state, focus ring).
   * Terminal Divider: 1px line with centered uppercase text "OR CONTINUE WITH EMAIL".
   * Form Fields:
     * Email Field: Monospace font, email icon, live validation, error text display, aria-invalid attribute.
     * Password Field: Monospace font, show/hide password toggle button (`visibility`/`visibility_off` icon), min 6 char validation.
     * Remember Me Checkbox: Custom green checkmark square.
     * Forgot Password Link: `text-secondary` hover `text-primary`.
     * Primary Submit Button: "Log In →" (`bg-primary`, `text-on-primary`, active scale transform `scale-[0.99]`, animated SVG spinner loading state).

---

### Page 3: Create Account Page (`#view-signup`)

1. **Layout & Container**:
   * Large unified card: `max-w-6xl`, rounded 12px (`rounded-xl`), `bg-surface-container-low`, 1px border `outline-variant/40`, shadow 2XL.
   * Background: `.dev-grid-bg` with ambient radial blur highlights in Emerald (`bg-primary/10`) and Blue (`bg-secondary-container/20`).

2. **Left Telemetry Sidebar (Desktop)**:
   * "Back to Home" navigation button.
   * Telemetry Header: `CLUSTER ID // NODE_09-ONLINE` (`JetBrains Mono` 12px, pulsing indicator dot).
   * Subtitle: "Adaptive technical assessment pipeline & automated mock evaluations."
   * **Benchmark Terminal Card (`telemetry.json`)**:
     * `99.4% accuracy` badge in primary emerald.
     * Inline Metric SVG Curve (`stroke-width 2.5`, animated ping dot at data point).
     * Sub-bar: `Targeting SWE I-III` and `4,812 active sessions`.
   * Feature Highlights: Real-time syntax profiling, FAANG curricula, AI dynamic edge-case suites (with filled checkmark icons).

3. **Right Registration Form Workspace**:
   * Gateway Badge: "REGISTRATION GATEWAY" (`JetBrains Mono` 12px uppercase).
   * Title: "Create Your Account" (`Inter` 32px bold).
   * Subtitle: "Start your AI-powered interview preparation pipeline."
   * Social OAuth Buttons: GitHub & Google buttons (`bg-surface-container`, hover state, focus ring).
   * Section Divider: "OR FILL DETAILS".
   * Form Fields & Validation:
     * **Full Name Input**: Badge icon, required validation, feedback.
     * **Email Input**: Mail icon, required email pattern validation, feedback.
     * **Password Input**: Visibility toggle button (`visibility`/`visibility_off`), real-time strength bar (weak: red 25%, moderate: blue 55%, strong: green 100%), criteria badges (`8+ chars`, `123`, `#?!`).
     * **Confirm Password Input**: Lock icon, visibility toggle button, match validation feedback.
     * **Preparation Goal Section**: Radio group chips (*Placement*, *Internship*, *Technical Interview*) with ARIA radio states & keyboard arrow key selection.
     * **Preferred Language Section**: Radio group chips (*Java*, *Python*, *C++*, *JavaScript*) with primary stack indicator.
     * **Primary Button**: "Create Account →" (`bg-primary`, `text-on-primary`, loading spinner animation, disabled state).
     * **Footer Link**: "Already have an account? Log In" (`nav-to-login`).
     * **Terms Disclaimer**: "By signing up, you agree to CodeGen AI's Terms and Developer Privacy Policy."

---

## 6. Interaction & Accessibility Standards

* **ARIA Live Regions**: Dedicated screen reader announcement zones (`#aria-announcer`, `#auth-live-status`) announce view changes, hint synthesis, and auth states.
* **Keyboard Navigation**:
  * Arrow Left / Right and Home / End support across the ARIA tabs (`role="tablist"`).
  * Arrow keys support on custom radio chip groups (`role="radiogroup"`).
* **Focus Ring System**: High-contrast, non-blinding focus rings using `outline: 2px solid #10b981 !important; outline-offset: 2px !important;`.
* **Motion Reduction**: `prefers-reduced-motion: reduce` resets animation durations to `0.01ms` for accessibility compliance.
