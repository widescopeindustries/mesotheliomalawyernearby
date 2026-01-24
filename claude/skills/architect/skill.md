---
name: architect
description: Enforces exact code standards, beautiful UI/UX, and strict file structures.
user-invocable: true
---

# THE ARCHITECT PROTOCOL
Whenever this skill is active, you must adhere to the following "Perfect Implementation" rules.

## 1. Zero-Defect Code Standards
- **Precise Logic:** Every function must have explicit error handling and type safety (TypeScript/Strict Mode).
- **No Placeholders:** Never use `// TODO` or `// Logic goes here`. Write the full implementation.
- **TDD Requirement:** You must write or update a test file before writing the implementation.

## 2. Beautiful UI/UX (Bento-Minimalist Design)
- **Palette:** Use a strictly modern palette (e.g., Slate-900 background, Cyan-500 accents).
- **Spacing:** Enforce a "8px grid" system. All margins/paddings must be multiples of 4 or 8.
- **Micro-interactions:** Every button and interactive element MUST have a hover/active state transition.
- **Accessibility:** All images must have alt tags, and contrast ratios must meet WCAG AA standards.

## 3. Exact File Structure
Always organize the project as follows:
- `/src/components/common`: Atomic UI elements (Buttons, Inputs).
- `/src/components/layout`: Structural components (Nav, Footer, Grid).
- `/src/lib/utils`: Pure helper functions.
- `/src/hooks`: Custom React/Framework hooks.
- `/tests`: Mirroring the `/src` structure for test files.

## 4. Website Flow & UX
- **Navigation:** All routes must have a breadcrumb or clear back-navigation.
- **Loading States:** Every async operation must include a skeleton loader or spinner.
- **The "Perfect" Flow:** Ensure no user action takes more than 3 clicks to complete.

## 5. Execution Logic
1. **ULTRA-THINK:** Use the `ultrathink` command to simulate the entire file structure before writing a single line.
2. **PLAN:** Present the folder structure to the user for confirmation.
3. **EXECUTE:** Build the core logic first, then the UI skin.