FINAL INTEGRATED PROMPT — CREATE PROJECT FLOW + OVERVIEW + TEAM SCHEDULE UPDATES

---

GOAL

Update the student collaboration platform with a clearer Create Project flow, a cleaner Overview page, and a simplified Team Schedule page.

The product should support two realistic use cases:

1. Users who need to recruit teammates
2. Users who already have teammates and only need a workspace

The final system should remain:

* Lightweight
* Student-friendly
* Execution-focused
* Simple enough for short-term team projects
* Clear enough for both public project recruiting and private team collaboration

---

GLOBAL PRODUCT LOGIC

The platform supports two project creation modes:

1. Recruit teammates

* User creates a public project
* Project appears in Explore
* Other users can apply
* Creator reviews applicants
* Final action = Publish Project

2. Start with my own team

* User already has teammates
* User creates a private team workspace
* Invites teammates directly
* Project does not appear publicly in Explore
* No application / commitment flow is needed
* Final action = Create Workspace

After creation, both modes enter the same project workspace structure:

Overview
Tasks
Team Schedule
Manage

---

CREATE PROJECT FLOW — OVERALL STRUCTURE

The Create Project flow should be step-based.

Keep the existing step-by-step structure, but add a new first step.

New Create Project flow order:

Step 1 — Starting mode
Step 2 — Project info
Step 3 — Roles / structure
Step 4 — Expected effort
Step 5 — Project duration
Step 6 — Choose a starting workflow
Final action — Publish Project OR Create Workspace depending on Step 1

---

STEP 1 — STARTING MODE

Page title:

How do you want to start?

---

Display two selectable cards:

1. Recruit teammates

Description:
Create a public project and let others apply to join.

2. Start with my own team

Description:
Invite people you already know and create a private team workspace.

---

Interaction:

User selects one card.

Selected card should have:

* Stronger border
* Subtle background highlight
* Clear selected state

---

IF USER SELECTS: RECRUIT TEAMMATES

Do not show invite section.

Continue normal project creation flow.

Project will be published publicly.

Other users can apply.

Creator can review applicants.

Final button should say:

[ Publish Project ]

Meaning:
Project appears in Explore and other users can apply.

---

IF USER SELECTS: START WITH MY OWN TEAM

Show an Invite Teammates section underneath the selected option on the same page.

Do NOT create a separate invite page.

Project will not be published publicly.

Invited teammates join directly.

No application / commitment page is needed for invited teammates.

Final button should say:

[ Create Workspace ]

Meaning:
Project is not published publicly.
Invited teammates join directly into the workspace.

---

INVITE TEAMMATES SECTION

This section only appears when “Start with my own team” is selected.

Display:

Invite teammates

Input field:
Enter email address

Button:
[ Add ]

Also include:

[ Copy invite link ]

---

INVITED TEAMMATES LIST

After adding emails, show a simple list.

Example:

[sarah@email.com](mailto:sarah@email.com)
[marcus@email.com](mailto:marcus@email.com)

Each row includes:

* Email address
* Remove option

---

RULES FOR INVITE SECTION

* Invite section is conditional
* It only appears for “Start with my own team”
* Keep invite system simple
* No role assignment on this page
* No detailed teammate setup here
* Roles and tasks can be handled later in Manage
* Do not publish “Start with my own team” projects to Explore
* Do not show application / commitment flow for invited teammates

---

STEP 5 — PROJECT DURATION

Update the Project Duration step.

Goal:
Keep the slider interaction, but make the duration choices fixed and clear.

Users should understand that project duration can only be:

1 week
2 weeks
3 weeks

---

Page title:

Project duration

---

Slider update:

Replace the current 2–3 week slider with a 3-point stepped slider.

Slider points:

1 Week
2 Weeks
3 Weeks

---

Important rules:

* Slider must snap to fixed points only
* Do NOT allow values between points
* Do NOT allow custom duration
* Do NOT show decimal or flexible values
* Default selection = 2 Weeks

---

Display selected value above the slider:

Duration: 2 weeks

This text updates when the user moves the slider.

---

Labels under slider:

1 week
2 weeks
3 weeks

---

Option meaning:

Show short helper text below selected value or below slider.

1 Week:
Quick project, very small scope

2 Weeks:
Recommended for focused team projects

3 Weeks:
Larger short-term project with more review time

---

Interaction:

When user drags the slider:

* Thumb snaps to nearest option
* Selected duration text updates
* Helper text updates based on selected value

---

Bottom navigation:

[ Back ] on the left
[ Next ] on the right

---

Goal:
Make duration feel flexible but still controlled.
Support different project sizes while keeping the platform focused on short-term collaboration.

---

STEP 6 — CHOOSE A STARTING WORKFLOW

Update the final workflow selection step so it can support a wider range of student team projects, not only design / product / development projects.

This step helps the system generate a useful default task structure.

---

Change page title from:

Choose workflow

To:

Choose a starting workflow

---

Helper text under title:

Choose a template to generate default tasks. You can edit everything later in Manage.

---

Workflow options:

Replace the current four options with these six options:

1. General Project

For mixed, flexible, or unclear projects.

2. Design-focused

For UX, UI, visual design, branding, interaction design, or prototype work.

3. Build-focused

For websites, apps, coding, technical prototypes, or implementation.

4. Research-focused

For user research, market research, analysis, surveys, interviews, or reports.

5. Content-focused

For writing, video, social media, presentations, storytelling, or campaign content.

6. Event / Campaign-focused

For events, exhibitions, workshops, marketing campaigns, school clubs, or community activities.

---

Layout:

Use a 2-column grid.

Each option should be a selectable card.

Each card contains:

* Workflow name
* One short description

---

Card format example:

General Project

A flexible task structure for mixed or unclear projects.

---

Interaction:

User clicks one card to select.

Selected card should have:

* Stronger border
* Subtle background highlight
* Clear selected state

---

Default selection:

Set General Project as the default selected workflow.

---

Important logic:

This choice does NOT limit the project type.

This choice only generates a starting task template.

After project creation, the creator / leader can still edit everything in Manage:

* Add task
* Delete task
* Rename task
* Add subtasks
* Remove subtasks
* Change owner
* Change deadline

---

What each workflow changes:

The selected workflow changes only:

* Default generated tasks
* Default suggested subtasks
* Default task order
* Default role suggestions if applicable

It does NOT lock the project.

---

Bottom navigation:

[ Back ] on the left
[ Publish Project ] or [ Create Workspace ] on the right depending on Step 1

---

Final action rule:

If Step 1 = Recruit teammates:
Final button = [ Publish Project ]

If Step 1 = Start with my own team:
Final button = [ Create Workspace ]

---

Do not:

* Do not use only design/development options
* Do not frame workflow as project category
* Do not make the selection permanent or restrictive
* Do not remove later editing ability

---

Goal:
Make this step feel like choosing a starting template, not choosing a fixed project type.

---

OVERVIEW PAGE

Update Overview page into a clean summary page.

Overview should show:

* What the project is
* What the current user should focus on
* What each teammate is responsible for
* Which teammate needs attention

Do NOT create a separate Project Health section.

Risk information should appear directly inside each team member row.

---

Overview page order:

1. Project Header
2. My Focus Card
3. Team Snapshot

---

Remove:

Remove separate Project Health section.

Do NOT show generic summary text like:

1 task overdue · 2 submissions pending · 1 member has no task

Instead, show these issues directly on the relevant teammate row.

---

SECTION 1 — PROJECT HEADER

Display:

Large project title
Short gray description underneath

Example:

Mobile Banking Redesign
Improving the transfer experience for clarity and efficiency

---

Rules:

* Keep compact
* No long paragraph
* No button here
* No task list here

---

SECTION 2 — MY FOCUS CARD

Create one larger card for the current user only.

This card should be visually stronger than the rest of the team list because it is the user’s personal action summary.

---

Display:

Avatar
Elijah Wang (You)
Role

Task title
Due date
Submission status

---

Example:

[Avatar] Elijah Wang (You)
UX Designer

Task: Create wireframes for transfer flow
Due: Day 8, 11:59 PM
Status: Not submitted

---

Optional button:

[ Go to Task ]

---

Rules for My Focus Card:

* Use larger height than other rows
* Use subtle background or stronger border
* Do not make it too tall
* It should feel like a personal task summary, not a full task detail page
* Do not show subtasks
* Do not show comments
* Do not show files
* Do not show full task description

---

SECTION 3 — TEAM SNAPSHOT

Other team members should be shown as compact horizontal rows.

Each row includes:

Avatar
Name
Role
Task
Due date if available
Status / risk label

---

Row format example:

[Avatar] Sarah Chen | UX Researcher | User research | Day 6, 11:59 PM | Submitted

[Avatar] Marcus Liu | Developer | User flow | Day 5, 11:59 PM | Task overdue

[Avatar] Anna Kim | — | No task assigned | — | No task assigned

---

Status / risk label rules:

Show status directly in the team member row.

Use only objective system data.

Allowed labels:

Submitted
Not submitted
Task overdue
No task assigned

---

Important:

Do NOT use fake working states like:

In progress
Reviewing
Working
Active

Unless those states are directly generated from actual system actions.

---

Visual rules:

* One person per row
* Small avatar on the left
* Use light dividers between rows
* Avoid large card borders for other members
* Keep rows compact and scannable
* Current user should NOT appear again inside the compact team rows
* Risk labels should be easy to scan
* Do not make risk labels visually overwhelming

---

Do not include:

* Separate Project Health section
* Full task list
* Subtasks
* File previews
* Comments
* Schedule grid
* Messaging elements
* Upload timestamps
* Activity history

---

Goal:
Overview should quickly answer:

What is this project?
What do I need to focus on?
Who is responsible for what?
Who needs attention?

---

Core principle:

Overview should show facts in context.

Do not show generic project health numbers.
Show the issue directly next to the relevant teammate.

---

TEAM SCHEDULE PAGE

Update Team Schedule page to be clearer and lighter.

This page should show:

* When each teammate is busy
* When tasks are placed
* Which task is due in each time slot

---

Remove top selector:

Remove the entire “Select team members” section.

Remove:

* Select team members label
* Member checkboxes
* Find Overlap button

---

Weekly grid:

Keep the weekly grid layout.

Columns:

Mon → Sun

Rows:

AM / PM / Evening

---

Busy color meaning:

Colored bars inside cells represent when that teammate is busy / unavailable.

They do NOT represent task ownership.
They do NOT represent project type.
They do NOT represent task type.

---

Legend update:

Rename:

Team Legend

To:

Member Busy Time

---

Legend format:

Member Busy Time

Red — Sarah Chen
Blue — Marcus Liu
Yellow — Anna Kim

Place the legend below the schedule grid, aligned to the lower-left area.

---

Task indicator:

Keep 📌 icons inside cells.

Meaning:

📌 = task placed by leader / task deadline in this time slot

Do not show full task names directly inside the grid.

---

Hover interaction:

When hovering over any schedule cell, show a small tooltip next to the cursor.

Tooltip should include ONLY:

Busy:

List busy members in that cell.

Tasks:

List task name and deadline in that cell.

---

Tooltip example:

Busy:
Sarah Chen
Marcus Liu

Tasks:
Create wireframes for transfer flow
Due Day 8, 11:59 PM

---

If empty:

If no one is busy:

Busy:
None

If no task exists:

Tasks:
None

---

Hover rules:

* Keep tooltip small and readable
* Do not show available members
* Do not show comments
* Do not show files
* Do not show long task descriptions
* Do not show extra metadata

---

Click interaction:

Click a cell with 📌:

Open small modal or side panel.

Display:

* Task title
* Owner
* Deadline
* Button: [ Go to task ]

Click a cell without 📌:

No action needed.

---

Do not:

* Do not show task names inside grid cells
* Do not add member checkboxes
* Do not add complex filters
* Do not make this a full calendar
* Do not overload the schedule grid

---

Goal:
Users should quickly understand:

Who is busy
Where tasks are placed
Which task is due

---

FINAL SYSTEM NOTES

After project creation, both creation modes use the same workspace:

Overview
Tasks
Team Schedule
Manage

Only the entry path changes:

Recruit teammates:
Public project → Explore → applications → accepted teammates → workspace

Start with my own team:
Private workspace → invite teammates → no applications → workspace

The workspace should stay consistent after creation.

Do not create two different workspace systems.
