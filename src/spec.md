# Specification

## Summary
**Goal:** Ensure the site loads with a white/light background by default (even when the user’s OS is in dark mode), while keeping the existing white + pink aesthetic and preserving theme toggling behavior.

**Planned changes:**
- Set the default theme on first visit (no saved preference) to light/white regardless of OS/system color scheme.
- Audit homepage sections (Header, Hero, Categories, Trending, Newsletter, Footer) and replace any hard-coded dark/black background utilities with the existing Tailwind theme tokens (e.g., bg-background, bg-card, muted variants) so light mode stays consistently white/light.
- Keep theme persistence behavior unchanged: if a user explicitly toggles theme, that preference remains respected on reload.

**User-visible outcome:** On a fresh visit, the homepage renders with a white/light background (not black/dark) even if the device is set to dark mode, while users can still toggle theme and have their choice persist.
