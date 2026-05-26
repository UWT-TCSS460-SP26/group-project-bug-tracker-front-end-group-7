# Individual AI Workflow — Duy-Hung Le

**Tool used:** Gemini CLI (version 0.42.0)  
**Sprint:** Sprint 5 — Bug Report AI Scaffolding  
**Date:** May 2026

---

## Context Setup

Read Sprint 5 document and the API doc text file.

---

## Prompt 1 — Initial Scaffold

**What I said:**

> "create a Next.js front-end that includes a public, unauthenticated bug report form. It should post to the /issues endpoint defined in the spec. Use Tailwind CSS for styling and ensure there is clear UI feedback for success, validation errors, and network failures."

**Thought Process:**  
I wanted to do parts at a time first was the bug report, then I would tell it to do more later.

**What the agent produced:**  
Created the report page with a basic styling, it produced something similar to the webpage from where we get our course material. AI had some issues with submission it would not work. Other than that the layout was a success.

---

## Prompt 2 — Auth Removal and Theme Adjustment

**What I said:**

> "Remove authority for submitting reports it should be that everyone can access and utilize the bug report page. Make the bug report dark theme"

**Thought Process:**  
I needed to slightly adjust the middleware properties for posting a reports and adjust the theme of the page.

**What the agent produced:**  
Reports were successfully made and anyone may submit one. The new theme was 3 shades of dark blue with white text.

---

## Prompt 3 — Admin Dashboard and Navigation

**What I said:**

> "create another page for admin where you have to input a bearer token to get a table of all of the reports and features to update and delete reports. Create a navbar to get to the report page and admin page with all bug reports"

**Thought Process:**  
I wanted to create a page for viewing and editing progress of bugs for admin as well a nav bar to get to and from bug report and admin access with auth using bearer tokens.

**What the agent produced:**  
It created a great page for admin with a navbar that goes from report to admin. The auth for the admin page didn't work and it wouldn't properly accept the bearer token when given.

---

## Prompt 4 — Fixing Bearer Token Auth

**What I said:**

> "For the auth bear token make sure the format for the request properly formatted with the bearer token when submitted."

**Thought Process:**  
It had a problem on how it was submitting the bearer token not adding the exact data and formatting needed for the request.

**What the agent produced:**  
It successfully caught the problem, and fixed it so that the bearer token when given properly gets the data and formats it into a clear table which you can update and delete reports.

---

## Prompt 5 — UI Enhancements and Theming

**What I said:**

> "Make a popcorn icon as well as make a light and dark switch. The light theme will be white and neon green. For the refresh icon on the admin dashboard make it into a submit button"

**Thought Process:**  
Now that report and admin pages work, I just wanted to see how far in design Gemini can go, so I made multiple style request to see that it can follow through.

**What the agent produced:**  
It successfully understood the request implementing all that was requested with no problem new light theme with switch and new icons to make the pages look better.

---

## What the Agent Built (Final State)

Current implementation in `bug-tracker-fe/src/app/page.tsx`:

- **Header Section:** Icon: Popcorn (Lucide-React) | Title: "BUG REPORT" (Bold, Uppercase, Italicized)
- **Form Fields:** Issue Title (Required), Detailed Description (Required), Steps to Reproduce, Priority Level, Contact Info
- **Submission Action:** Button: "Send Report"
- **Visual Design & Feedback:** Theme Support: Dark Mode (Black/Yellow) and Light Mode (White/Green). Styling: Tailwind CSS, responsive (max-width 2xl), shadowed card layout. Error Messaging: Surfaces server-side errors or network failures. Success Messaging: Confirms receipt of the report.
- **Connectivity:** Base URL: Configurable via `NEXT_PUBLIC_API_URL`. Endpoint: `POST /v1/issues`.

## Summary: Reflections and Takeaways

1. **Context was key:** The context from the Sprint 5 and API docs was very helpful for the AI to decide how it approached making the report page and admin dashboard.

2. **Styling instructions were understood:** The styling that the AI developed was very straightforward and it understood what my prompts were asking it to do. Even with the new prompts that adjusted the page layout, the AI implemented them successfully with no errors.

3. **Backend and middleware context:** Giving the AI more context about the backend, middleware, and what I wanted to apply could be improved. I'm not sure if telling it more about how the middleware works would have helped the AI successfully implement it on the first prompt instead of having to make a second prompt to fix errors.

**SAMPLE IMAGES:**

**BUG REPORT - DARK**

<img width="1119" height="898" alt="image" src="https://github.com/user-attachments/assets/13be9874-5ecd-4e3d-b187-d73ed3ef9eea" />

**ADMIN - LIGHT**

<img width="1280" height="632" alt="image" src="https://github.com/user-attachments/assets/fdceb682-2c9d-4729-bf39-424108b6c599" />
