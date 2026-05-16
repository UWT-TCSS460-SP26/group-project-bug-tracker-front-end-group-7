# Bug Reporter Build Chat Log

This document captures the prompt-and-iterate workflow used to build and refine the bug reporter frontend in this repo.

## Notes

- This writeup is based on the working chat history from the build session.
- User prompts are kept close to what was asked.
- Assistant replies are summarized closely enough to preserve the workflow and design decisions without copying every intermediate sentence verbatim.

---

## 1. Initial Build

**User prompt**

> Build a frontend that satisfies these specifications:
>
> [full Sprint 5 bug reporter spec, including public POST `/issues`, success/validation/network states, env vars, deployment, workflow writeups, and team deliverables]

**Assistant reply**

- Built a standalone Next.js bug report frontend in `frontend/`.
- Added a single public form that posts to `POST /v1/issues`.
- Added success, validation, and network/server failure UI.
- Wired it to `NEXT_PUBLIC_API_URL`.
- Updated backend routing, CORS, and OpenAPI so public submission worked end to end.
- Added root scripts like `npm run frontend:dev`.

## 2. How To View It

**User prompt**

> How do I view the frontend?

**Assistant reply**

- Run the backend with `npm run dev`.
- Run the frontend with `npm run frontend:dev`.
- Open `http://localhost:3001`.
- Create `frontend/.env.local` with `NEXT_PUBLIC_API_URL=http://localhost:3000`.

## 3. Visual Direction

**User prompt**

> Make it look more like a mix between TMDB and Meta style.

**Assistant reply**

- Updated the styling to a TMDB + Meta hybrid feel.
- Added a darker cinematic background, blue/teal gradients, polished panels, and more refined card styling.

**User prompt**

> Keep the font, but make the color palette more like IMDb.

**Assistant reply**

- Kept the font.
- Shifted the palette toward an IMDb-style black/charcoal/yellow look.

## 4. Early Micro-Adjustments

**User prompt**

> Lower the "Found something broken" line by 10px.

**Assistant reply**

- Moved the intro line down by 10px.

**User prompt**

> Remove the "No login" pill.

**Assistant reply**

- Removed the `No login` pill.

**User prompt**

> Change the dropdown item text color to black.

**Assistant reply**

- Made native select option text black.

## 5. Priority Wording

**User prompt**

> Change "High" to "0-24 hr," "Medium" to "24-48 hr," and "Low" to "48+ hr." Make it less verbose. Add a key map if needed, and use integer values if that looks more professional.

**Assistant reply**

- Remapped priority labels to:
  - `0-24 hr`
  - `24-48 hr`
  - `48+ hr`
- Kept backend integer values intact.

**User prompt**

> Remove the sentence under the priority field.

**Assistant reply**

- Removed the helper sentence under the priority dropdown.

## 6. "What Happens Next" Copy and Layout

**User prompt**

> Change the "What happens next" bullet points so they are directed to an outside development team.

**Assistant reply**

- Rewrote the "What happens next" bullets for an outside API/dev team audience.

**User prompt**

> Make the form slightly wider so the bullet points wrap to only two lines.

**Assistant reply**

- Widened the main card so the right-side bullet list wrapped more cleanly.

## 7. Pill Alignment Work

**User prompt**

> Center the "Public form" and "Fast triage" pills over the "What happens next" card.

**Assistant reply**

- Moved the pills above the "What happens next" card.

**User prompt**

> Align the "Public form" and "Fast triage" pills with "TCSS 460 Group 7."

**Assistant reply**

- Realigned the pills with the `TCSS 460 Group 7` header.

**User prompt**

> No, they need to be centered over the "What happens next" column while staying horizontally aligned with "TCSS 460 Group 7."

**Assistant reply**

- Adjusted the pills to be centered over the right-hand column while staying aligned with the eyebrow row.

## 8. More Hero Spacing

**User prompt**

> Add another 10px to the "Found something" line spacing.

**Assistant reply**

- Lowered the intro line another 10px.

**User prompt**

> Lower the "Submit bug report" button by 5px.

**Assistant reply**

- Added 5px more top space to the submit button.

## 9. Priority Integer Mapping

**User prompt**

> Make sure on the backend that "0-24 hr" is mapped to 0 and "48+ hr" is mapped to 2.

**Assistant reply**

- Corrected the frontend/backend mapping:
  - `0-24 hr -> 0`
  - `24-48 hr -> 1`
  - `48+ hr -> 2`

## 10. Add Admin Access Flow

**User prompt**

> Add another card with the same color scheme, font, and palette, with two buttons: "Submit a bug report" and "Get bug reports." The "Get bug reports" button should open a login screen where the API developer can use the credentials required to access bug reports. Then build a frontend to view the bug reports.

**Assistant reply**

- Explained that a real username/password login screen was not possible from this repo alone because the backend expects Auth2 bearer tokens.
- Proposed either token entry or real OAuth2 config.

**User prompt**

> Can you have the dev team enter their email, verify the bearer token in the `.env` file, and use that for authentication?

**Assistant reply**

- Explained that this was not safe or valid because the frontend cannot securely use a server token as auth.
- Recommended a token-entry approach instead.

**User prompt**

> Then just add a password box where the user can enter their bearer token from the JWT OAuth2 flow.

**Assistant reply**

- Added a second flow:
  - `Submit a bug report`
  - `Get bug reports`
- Built a masked bearer-token input and protected issue queue viewer.

## 11. Workflow Tabs

**User prompt**

> I want the choose a workflow to act more like tabs rather than buttons.

**Assistant reply**

- Restyled the workflow controls to behave like tabs.

**User prompt**

> Remove the "Choose a workflow" card, and place the "Submit a bug report" and "Get bug reports" tabs in the upper-right corner of the main card.

**Assistant reply**

- Removed the separate chooser card and moved tabs into the main card header.

**User prompt**

> I want the two tabs to be horizontally aligned, with the bottoms of the tabs touching the top of the main card at its upper-right corner.

**Assistant reply**

- Docked the tabs to the upper-right edge of the main card like folder tabs.

**User prompt**

> Readjust it so the buttons are flush with the very top corner of the main card.

**Assistant reply**

- Moved the tabs flush to the corner.

**User prompt**

> The buttons should sit outside the main card but still touch the border.

**Assistant reply**

- Shifted the tabs outside the card while keeping them touching the border.

**User prompt**

> You didn’t change anything.
>
> The "Submit a bug report" and "Get bug reports" tabs need to be outside the main card, with the flat bottoms of the tabs touching the top border of the card.

**Assistant reply**

- Corrected the tab positioning so the bottoms of the tabs touched the top border from the outside.

## 12. Fine Tab Positioning

**User prompt**

> Move the buttons up 50px.

**Assistant reply**

- Moved the tabs up 50px.

**User prompt**

> Now align them so the bottoms of the buttons touch the outside top edge of the main section.

**Assistant reply**

- Realigned the tabs so their bottoms touched the outer top edge again.

**User prompt**

> That’s too low.

**Assistant reply**

- Raised the tabs slightly.

**User prompt**

> Still too low.

**Assistant reply**

- Raised them again.

**User prompt**

> Move it up 20px.

**Assistant reply**

- Moved the tabs up another 20px.

**User prompt**

> Move it down 2px.

**Assistant reply**

- Nudged them down 2px.

**User prompt**

> move it right 10px

**Assistant reply**

- Shifted them right 10px.

**User prompt**

> Now make sure all of the edges are rounded.

**Assistant reply**

- Rounded all tab edges.

**User prompt**

> Revert the last change.

**Assistant reply**

- Reverted just the last tab-radius change.

**User prompt**

> Make sure all of the edges on the main section are rounded.

**Assistant reply**

- Rounded the main card’s top scene edges too.

**User prompt**

> Move the tab buttons 10px to the right.

**Assistant reply**

- Moved the tabs right 10px.

**User prompt**

> Move them another 10px.

**Assistant reply**

- Moved them another 10px.

**User prompt**

> Move them another 5px.

**Assistant reply**

- Moved them another 5px.

## 13. Build the Issue Viewer

**User prompt**

> Build a bug report viewer now.

**Assistant reply**

- Built a real triage viewer with:
  - bearer token access
  - refresh
  - search
  - status filtering
  - issue list
  - detail pane
  - full bug report metadata

## 14. Frontend/Backend Connectivity Debugging

**User prompt**

> [screenshot showing "Access failed"]

**Assistant reply**

- Explained that `NEXT_PUBLIC_API_URL` was missing and needed to point to the backend.

**User prompt**

> [showed local env / terminal output]

**Assistant reply**

- Diagnosed that the frontend had been pointing to itself instead of the backend.

**User prompt**

> `NEXT_PUBLIC_API_URL=http://localhost:3001`

**Assistant reply**

- Explained that `3001` was the frontend and that the backend URL had to be used instead.

**User prompt**

> I still can’t reach the bug report service.

**Assistant reply**

- Noted the backend did not appear reachable on the expected port.

**User prompt**

> [backend logs showing server on port 3500]

**Assistant reply**

- Corrected the frontend env to `http://localhost:3500`.

**User prompt**

> [more local terminal/debug output]

**Assistant reply**

- Confirmed backend reachability issues and walked through keeping both frontend and backend running.

**User prompt**

> `node -e "fetch('http://localhost:3500/heartbeat')..."`

**Assistant reply**

- Explained the backend was reachable and that the health route was actually `/health`.

**User prompt**

> [shared token test command without Bearer prefix]

**Assistant reply**

- Explained the missing `Bearer` prefix and predicted a likely `403` if the token resolved to a non-admin local user.

**User prompt**

> Here is the bearer token:

**Assistant reply**

- Warned about posting tokens and explained UI vs terminal token formatting.

**User prompt**

> No, here is my bearer token. Can you test it?

**Assistant reply**

- Reported that the request could not be fully tested from the session and provided a direct local `node -e` check instead.

## 15. Prisma Studio and Admin Role Debugging

**User prompt**

> How do I access Prisma?

**Assistant reply**

- Gave `npm run prisma:studio` / `npm run prisma:db` commands and explained how to promote the local user row.

**User prompt**

> [Prisma screenshot]

**Assistant reply**

- Confirmed the row looked correct for admin role checks.

**User prompt**

> [shared token again for node checker]

**Assistant reply**

- Provided the full `node -e` command with the token included.

**User prompt**

> [node command result returning `401 invalid bearer token`]

**Assistant reply**

- Diagnosed that the frontend was fine and the token/backend auth config was the problem.

**User prompt**

> That is a fresh token.

**Assistant reply**

- Found the likely issue: missing auth env values in local backend config and recommended `AUTH_ISSUER` / `API_AUDIENCE`.

## 16. Token Visibility UX

**User prompt**

> It works. Now, once the bearer token has been verified, make it disappear until the "Submit a bug report" button is clicked or the browser is closed.

**Assistant reply**

- Hid the token field after successful verification for the current browser session.
- Brought it back when switching to `Submit a bug report`.

**User prompt**

> Add 15px of space below the bearer token banner and the "Refresh queue" row.

**Assistant reply**

- Added 15px bottom space below that toolbar row.

## 17. Status Update Controls

**User prompt**

> Add an option to change the "Unsolved" flag to "Solved."

**Assistant reply**

- Added a `Mark solved` action that sent `PATCH /v1/issues/:id/status`.

**User prompt**

> make the mark solved button thinner and wider and center it on the bottom of the card

**Assistant reply**

- Restyled the button to be thinner, wider, and centered.

**User prompt**

> Place it under the author ID.

**Assistant reply**

- Moved the button under the author metadata.

**User prompt**

> Center the "Admin queue" and "Bearer token" pills over the access notes, and keep them horizontally aligned with "TCSS 460 Group 7."

**Assistant reply**

- Adjusted those pills and header alignment.

**User prompt**

> Remove the "Mark solved" button. I want to be able to change the issue status flag directly.

**Assistant reply**

- Replaced the button with a status dropdown that could set `Unsolved`, `In progress`, or `Fixed`.

## 18. Detail Dropdown Polish

**User prompt**

> Make the space after the caret match the space before the word "In."

**Assistant reply**

- Adjusted dropdown padding.

**User prompt**

> Add padding after the caret.

**Assistant reply**

- Added more right-side padding.

**User prompt**

> Make "Issue status" align with "In progress."

**Assistant reply**

- Aligned the label to the dropdown content.

**User prompt**

> move the issue status to the right by 10px

**Assistant reply**

- Shifted the label block.

**User prompt**

> No, the left side of the status dropdown needs to align with the author ID.

**Assistant reply**

- Removed the extra dropdown offset.

**User prompt**

> Detach the "Issue status" text from the dropdown menu and move the label 10px to the right.

**Assistant reply**

- Moved only the label, not the dropdown.

**User prompt**

> Move it another 10px.

**Assistant reply**

- Added another 10px label shift.

**User prompt**

> Do the same for "Status."

**Assistant reply**

- Matched the other status label spacing.

**User prompt**

> Make the "In progress" dropdown 3px smaller in height.

**Assistant reply**

- Reduced the status dropdown height slightly.

**User prompt**

> Move the caret in the "In progress" dropdown 5px to the left.

**Assistant reply**

- Moved the caret left by adjusting right padding.

## 19. Issue Queue Filters and Ordering

**User prompt**

> Add a priority filter.

**Assistant reply**

- Added a priority filter to the issue viewer.

**User prompt**

> change the filter to reflect the backend mapping, but keep the pill the same in the window

**Assistant reply**

- Changed the filter labels to align with backend numeric mapping while keeping pills unchanged.

**User prompt**

> in the priority filter, remove the time frame just keep the integer

**Assistant reply**

- Simplified the priority filter to `0`, `1`, and `2`.

**User prompt**

> Put Fixed issues at the bottom of the list, priority 0 at the top, and sort each section sequentially by date and time.

**Assistant reply**

- Sorted queue as:
  - non-`Fixed` before `Fixed`
  - lower priority value first
  - then by timestamp

**User prompt**

> I want the earliest date at the top while keeping the priority triage order. Make the newest item appear at the bottom of each independent triage section.

**Assistant reply**

- Changed same-priority/status grouping to oldest-first so the newest issue appears at the bottom of its own section.

## 20. Native Dropdown Bug and Custom Menus

**User prompt**

> There is a dropdown formatting bug where the borders look off on the dropdown element.

**Assistant reply**

- First tried removing native select appearance and using a custom caret.

**User prompt**

> [screenshot showing ugly native dropdown]

**Assistant reply**

- Replaced the detail status native select with a fully custom dark menu.

**User prompt**

> The dropdown menu now renders off-screen.

**Assistant reply**

- Moved the custom issue-status menu to open upward.

**User prompt**

> Make the whole card wider so that "All Statuses" and "All Priorities" are not covered by the caret.

**Assistant reply**

- Widened the main card and viewer space.

**User prompt**

> Make the priority and status dropdown boxes wider.

**Assistant reply**

- Widened the filter boxes.

**User prompt**

> Add more room at the bottom of the card so the issue-status dropdown menu fits.

**Assistant reply**

- Added bottom space to the detail card.

**User prompt**

> Revert that change.

**Assistant reply**

- Reverted the extra bottom padding.

**User prompt**

> Make the border of the issue-status dropdown menu more visible so it does not blend into the background.

**Assistant reply**

- Increased menu border contrast and ring visibility.

**User prompt**

> Move "TCSS 460 Group 7" and the two pills down 5px.

**Assistant reply**

- Lowered the eyebrow and pill row by 5px.

**User prompt**

> Make the priority and status dropdowns match the issue-status dropdown format.

**Assistant reply**

- Matched top filters to the custom dropdown styling.

**User prompt**

> set the priority drop down menu to be the same as the drop down menu in the bug report

**Assistant reply**

- Reverted the viewer priority filter back to the standard dropdown style.

**User prompt**

> No, revert it back to its previous state. I wanted you to change the priority dropdown in the "Submit a bug report" tab so it matches the priority dropdown in "Get bug reports."

**Assistant reply**

- Synced the public priority control to the custom menu style instead.

**User prompt**

> make it so that the drop down menu opens upward

**Assistant reply**

- Made the public priority menu open upward.

## 21. Public Priority Field UX

**User prompt**

> Add "default: 2" to the priority field.

**Assistant reply**

- Added default wording to the label.

**User prompt**

> Remove the time-window wording from the dropdown and put the priority code-to-window key inside an information icon.

**Assistant reply**

- Reduced options to `0`, `1`, `2` and moved the time-window meaning into an info icon panel.

**User prompt**

> remove the quotes around the numbers in the information icon

**Assistant reply**

- Removed the quotes/backticks.

**User prompt**

> change the = to :

**Assistant reply**

- Changed the key formatting to `0: 0-24 hr`, etc.

**User prompt**

> Remove "default: 2" from the title text and put it next to "Choose priority" instead.

**Assistant reply**

- Moved the default hint into the chooser text.

**User prompt**

> Actually, just make 2 the default and remove "optional" and the placeholder.

**Assistant reply**

- Made priority default to `2`, removed the optional wording, and removed the empty placeholder.

## 22. Issue Editing/Deletion Questions

**User prompt**

> Is there an API available for updating the issue report?

**Assistant reply**

- Confirmed `PATCH /v1/issues/:id/status` and `PATCH /v1/issues/:id` already existed.

**User prompt**

> add an option in the view bug reports that deletes the issue

**Assistant reply**

- Added a delete action to the issue viewer.

**User prompt**

> Also, do not attach the full issue viewer directly to the issue list.

**Assistant reply**

- Separated the queue and detail viewer into distinct panels.

## 23. Delete Button and Panel Spacing

**User prompt**

> Shrink the full issue viewer so the "Delete issue" button has only 10px of space between the button and the bottom of the card.

**Assistant reply**

- Reduced bottom padding.

**User prompt**

> The bottom of the right-side card needs to have only 10px of padding below the button.

**Assistant reply**

- Anchored the delete row near the bottom.

**User prompt**

> Add another 10px of padding.

**Assistant reply**

- Added another 10px bottom padding.

**User prompt**

> make the button thinner

**Assistant reply**

- Reduced the delete button height.

**User prompt**

> while keeping the padding of the bottom of the button the same, remove the empty space from the top of the button to the bottom of the issue drop down menu

**Assistant reply**

- Pulled the delete row upward while preserving bottom spacing.

**User prompt**

> Bring the bottom of the right card up and detach the right card from the left card.

**Assistant reply**

- Shortened the right card and increased panel separation.

**User prompt**

> Make the issue queue scrollable.

**Assistant reply**

- Made the queue panel scroll independently.

**User prompt**

> move the delete issue button to the right

**Assistant reply**

- Right-aligned the delete button.

**User prompt**

> make the issue status drop down open downward

**Assistant reply**

- Switched the detail status menu to open downward.

## 24. Required Reporter Name and Contact

**User prompt**

> Make the name and contact information required, and be sure to add a middleware check for that information as well.

**Assistant reply**

- Made name and contact required in the frontend.
- Added backend middleware validation.
- Added Prisma schema/migration updates for `reporterName`.
- Updated controllers, OpenAPI, and tests.

## 25. Public Form Name Layout

**User prompt**

> Place the name field under "Steps to reproduce."

**Assistant reply**

- Moved the name field under `Steps to reproduce`.

**User prompt**

> Split the name field into "First name" and "Last name."

**Assistant reply**

- Split the single name input into `First name` and `Last name`.
- Combined them back into `reporterName` for the API payload.

## 26. Public Priority Menu Direction

**User prompt**

> Make the priority dropdown in the bug report submission form open upward.

**Assistant reply**

- Set the submission-form priority menu to open upward.

## 27. Submission Regression Fix

**User prompt**

> There is an issue with submitting a bug report now.

**Assistant reply**

- Traced the issue to impossible `activeView` comparisons inside narrowed JSX branches.
- Fixed the tab-state logic.
- Re-ran typecheck/tests.

**User prompt**

> There was a problem. We could not submit your report right now because the service is unavailable. Your details are still here, so please try again in a moment.

**Assistant reply**

- Diagnosed that the backend/database migration for required `reporterName` had not yet been applied.
- Recommended applying the migration SQL directly and restarting the backend.

## 28. Review Pane Name Display

**User prompt**

> Add first and last name to the issue review as well.

**Assistant reply**

- Split stored `reporterName` for display in the review pane.

**User prompt**

> Remove "Author id" and replace it with "Author," using only the user's first and last name. Also remove "First name" and "Last name" from under the contact section.

**Assistant reply**

- Removed the visible `Author id` text.
- Replaced it with `Author: First Last`.
- Removed `First name:` and `Last name:` lines from the contact block.

## 29. `authorId` Discussion

**User prompt**

> remove author id from the prisma database as well

**Assistant reply**

- Explained that removing `authorId` would break current ownership rules for updating/deleting issues.
- Asked whether to make those operations admin-only instead.

**User prompt**

> is that for just the issue report?

**Assistant reply**

- Clarified that `authorId` was specific to issue records and issue authorization.

**User prompt**

> ok so the bug report is public right?

**Assistant reply**

- Confirmed public unauthenticated `POST /v1/issues`.

**User prompt**

> which means anyone signed in or not can make a new report right?

**Assistant reply**

- Confirmed yes.

**User prompt**

> how do you suggest that a user is able to update their own bug report? thats not typical behavior in the real world right?

**Assistant reply**

- Explained that public submit plus internal-only edit/triage is the more typical real-world pattern.

## 30. Queue Banner Bug and "New Since Last Access"

**User prompt**

> the banner says 1 bug report loaded when nothing is in queue

**Assistant reply**

- Found that the delete path left stale banner text.
- Changed the banner to show the empty-queue message when the last item is removed.

**User prompt**

> can you set the banner so that it only counts new bug reports that has recently arrived since last access?

**Assistant reply**

- Added a `last seen issue timestamp` in browser storage.
- Changed banner behavior to:
  - first load: total loaded
  - later loads: only new since last access
  - no new: explicit no-new message