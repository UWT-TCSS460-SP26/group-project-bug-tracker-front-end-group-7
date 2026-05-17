# Kassie AI Workflow Writeup

## Your first prompt

What I gave the AI first was basically the sprint requirements as one big task. The first real prompt was:

> Build a frontend that satisfies these specifications:
>
> [full Sprint 5 bug reporter spec, including public `POST /issues`, success/validation/network states, env vars, deployment, workflow writeups, and team deliverables]

That was the main starting point. I was basically asking it to take the Sprint 5 assignment and turn it into a working frontend scaffold.

## What the AI produced first

The first useful version it gave me was a real Next.js frontend scaffold in `frontend/`.

It did create a Next.js app, and it gave me:

- a public bug report form
- a submit flow wired to the issue endpoint
- basic success and failure handling
- a structure I could actually run and iterate on

It also used an environment variable approach for the API URL instead of forcing me into one hardcoded backend URL, which was a good start.

The first version was not perfect, but it was good enough to react to. That mattered more than getting a perfect answer on the first try.

## What was good

A lot of the first scaffold was honestly pretty helpful.

Things that were good right away:

- it gave me a clean Next.js starting structure
- it created a real bug report form instead of just a mockup
- the form matched the general idea of the Sprint 5 requirements
- it gave me something I could actually test instead of just describing architecture
- it set me up to keep iterating with smaller follow-up prompts

Later on, as I kept working with it, the AI was also especially good at:

- making quick layout changes
- restyling the page based on visual direction prompts
- wiring form state and submission logic
- helping me refine validation and frontend error handling

## What was wrong or missing

The first version was helpful, but it definitely was not done.

Some of the problems were:

- backend/frontend connectivity still needed work
- local and deployed URLs needed to be sorted out
- some submission and error states were too vague at first
- a lot of spacing/alignment needed cleanup
- there were points where the generated assumptions about the backend were wrong
- some later feature work drifted beyond the actual Sprint 5 scope

One of the biggest real problems was that getting a frontend scaffold is not the same thing as getting an end-to-end working deployment. A lot of the later work was not “build UI,” it was “fix the integration.”

## Your second/third prompt

After the first scaffold, my workflow turned into a series of much smaller prompts where I kept redirecting the AI.

Some of the early follow-up prompts were things like:

- “How do I view the frontend?”
- “Make it look more like a mix between TMDB and Meta style.”
- “Keep the font, but make the color palette more like IMDb.”
- “Change ‘High’ to ‘0-24 hr,’ ‘Medium’ to ‘24-48 hr,’ and ‘Low’ to ‘48+ hr.’”
- “Make the form slightly wider so the bullet points wrap to only two lines.”

Then the prompts got more specific as I found issues:

- “There is an issue with submitting a bug report now.”
- “Make the name and contact information required, and be sure to add a middleware check for that information as well.”
- “Split the name field into ‘First name’ and ‘Last name.’”
- “Adjust the error messages that only displays problems with the field with problems.”

So my second and third prompts were not just one neat follow-up. It was more like a long redirect cycle:

1. get a first cut
2. run it
3. spot what feels off
4. give a correction
5. repeat

That really was the workflow of this sprint.

## What you kept

I kept a lot of the original AI scaffold, just not in its original untouched form.

The main things I kept were:

- the basic bug report form structure
- the fetch/submission pattern
- the environment-variable approach for backend configuration
- the general page layout structure
- the idea of handling success, validation, and failure states in the UI

I also kept a lot of the AI-generated momentum. Even when the exact code changed, the scaffold gave me a base that was much faster to improve than starting from nothing.

## What you cut or changed

I changed a lot once I saw how the first few versions behaved.

Things I removed, rewrote, or redirected included:

- UI elements that did not fit the final look, like the `No login` pill
- default wording that felt too verbose
- layout pieces that needed constant spacing and alignment corrections
- generic top-level validation messaging when field-level errors were better
- unsafe or incorrect authentication ideas
- hardcoded or incorrect assumptions about where the backend lived

I also ended up building extra admin/triage UI, like the bug report viewer, bearer token flow, filters, and issue actions. That was useful practice, even though it wasn't a requirement. I just wanted to implement something to make reading bug reports easier and neater.

So if I were describing what got cut from the real Sprint 5 scope, it would be:

- unnecessary admin UI
- extra auth-related complexity
- anything that distracted from the public bug report form itself

## What you would do differently next time

If I did this again, I would probably prompt AI with a little more details as to what I wanted. However, at the time, I didn't really have a vision as to how I wanted the bug report to look and feel. 

What I would do differently:

- give the AI the tightest possible scope from the start
- test the deployed API behavior earlier instead of assuming the live backend matches the intended contract
- keep prompts shorter once the project context is already loaded
- include specific details as to what I want to prevent unnecessary token usages.

I would also probably include an example request body and deployment expectations even earlier in the workflow, because a lot of the later issues were not visual problems, they were API and environment problems.

## Final thoughts

The biggest thing I learned is that the AI was best at getting me to a first draft fast. After that, my job was to nit pick and refine the result. I found myself having to restore previous states because the prompt was to ambiguous and the AI model changed certain features that I didn't want changed.

So the summary of my workflow is:

- the AI gave me a strong first cut
- I kept a lot of the structure
- I changed a lot of the behavior and presentation through follow-up prompts
- the hardest parts were deployment, connectivity, and ambiguous prompts