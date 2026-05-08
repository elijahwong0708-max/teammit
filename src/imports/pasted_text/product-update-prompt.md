FINAL PRODUCT UPDATE PROMPT — PROJECT COLLABORATION SYSTEM

Redesign the product as a lightweight student collaboration platform focused on short-term team projects, task execution, submission review, team scheduling, and minimal communication.

The system should feel like a structured collaboration workspace, not a social network and not a heavy project management tool.

Use a clean, low-fidelity desktop web layout.

GLOBAL DESIGN RULES

Frame:
1440 × 1024 desktop web app

Style:
Low-fidelity wireframe
Clean grayscale base
Simple rectangles, text, avatars, tables, and grids
No decorative illustrations
No complex icons except required symbols such as 📌
No visual clutter
Clear spacing
Consistent alignment
Prioritize readability and workflow clarity

Core product logic:
Explore = find projects
My Projects = enter active project workspaces
Project Workspace = Overview / Tasks / Team Schedule / Manage
My Schedule = personal cross-project time grid
Messaging = lightweight teammate communication

GLOBAL SIDEBAR

The global sidebar should contain:

Explore
My Projects
My Schedule
Messaging

Tasks should NOT appear in the global sidebar.

Reason:
Tasks belong inside each project workspace, not globally.

My Projects:
Shows all projects the user has joined or created.
Clicking a project opens that project workspace.

My Schedule:
Opens the user’s personal cross-project schedule.

Messaging:
Opens the minimal messaging page.

PROJECT WORKSPACE NAVIGATION

Inside each project, use project-level tabs:

Overview
Tasks
Team Schedule
Manage

Do NOT include a separate “My Task” page.
Do NOT include a separate Files page.
Do NOT include a separate Team page.

Reason:
My Task is merged into Tasks → My Tasks.
Files belong inside task/submission detail.
Team summary belongs inside Overview.
Team scheduling belongs inside Team Schedule.

PROJECT WORKSPACE TOP PROGRESS AREA

On every project workspace page, display two fixed progress lines at the top.

Line 1:
Project Progress

Show:
Progress bar
Percentage
Day X / total days

Progress is based on completed tasks / total tasks.

Example:
Project Progress: 42% · Day 6 / 14

Line 2:
Next Task Deadline

Show:
Time-based progress bar
Current next task name
Deadline countdown

Example:
Create wireframes for transfer flow · Due in 2 days

All task deadlines default to 11:59 PM on the assigned day unless leader sets a custom time.

Deadline display rule:
Never show only “Day 8”.
Always show “Day 8, 11:59 PM” in detail views.

OVERVIEW PAGE

Goal:
Turn Overview into a clean, real-data-based summary page.

Overview should show:
What the project is
What the user should focus on
Who is responsible for what
Where problems exist

Overview should NOT show:
Full task list
Subtasks
File previews
Comments
Schedule grid
Messaging
Fake status such as “In progress” unless it comes from system data

Overview is for quick understanding and quick orientation, not execution.

Overview layout:
Three sections from top to bottom:

1. Project Header
2. Team Snapshot with user focus
3. Project Health summary

SECTION 1 — PROJECT HEADER

Position:
Top of Overview page

Content:
Large project title, bold, black
Short description below, smaller and gray

Example:
Mobile Banking Redesign
Improving the transfer experience for clarity and efficiency

Rules:
Keep concise
No long paragraphs
No interaction here

SECTION 2 — TEAM SNAPSHOT WITH USER FOCUS

Goal:
Show who is responsible for what and whether work has been submitted.

Layout:
Vertical list of team members.

Each member row:
Avatar on the left
Text stacked on the right
Clear spacing between rows
Consistent alignment

First row must be the current user and visually highlighted.

CURRENT USER ROW

Display:
Avatar
Name + “(You)”
Role
Task title
Due date
Submission status

Example:
[Avatar] Elijah Wang (You)
UX Designer

Task: Create wireframes for transfer flow
Due: Day 8, 11:59 PM
Status: Not submitted

This replaces the separate “Current Focus” section.

Do not create another Current Focus block elsewhere.

OTHER TEAM MEMBER ROWS

Each member row displays:
Avatar
Name
Optional role in lighter text
Task title or “No task assigned”
Submission status

Example:
[Avatar] Sarah Chen
Task: User research
Status: Submitted

[Avatar] Marcus Liu
Task: User flow
Status: Not submitted

[Avatar] Anna Kim
No task assigned

Rules:
Do NOT show fake working states.
Do NOT show timestamps.
Do NOT show upload times.
Only show objective system data:
assigned task
submitted / not submitted
no task assigned

SECTION 3 — PROJECT HEALTH

Goal:
Convert raw system data into meaningful signals.

Display short bullet summary.

Example:
Project Health

• 1 task overdue
• 2 submissions pending
• 1 member has no task

Rules:
Auto-generated from system data
No manual input
2–4 bullet points max
No timestamps
No long explanation

Overview visual hierarchy:

1. Current user row
2. Team snapshot
3. Project health
4. Project header supports context

Core principle:
Show facts, not assumptions.
Show signals, not raw data.
Guide attention, not interaction.

TASKS PAGE

Tasks page is the main execution and review area.

Tasks page contains two internal tabs:

My Tasks
All Tasks

My Tasks = personal execution
All Tasks = team submission review

Do NOT create a separate My Task page.
Everything related to the user’s own assigned work lives inside Tasks → My Tasks.

TASKS → MY TASKS

Goal:
Create a structured execution table for the current user’s assigned work.

My Tasks should help the user understand:
What I need to do
What is done
What is left
What needs submission
What feedback I received before

Layout:
Use a table-based structure, inspired by a clean task management table.

Columns from left to right:

Task Name
Status
Progress
Due
Submission

Tasks are ordered vertically by due date, earliest to latest.

Each task is a parent row.
Each task can contain subtasks.
Each task row can expand to show subtasks underneath.

Parent task row example:

Create wireframes for transfer flow | In progress | 2/3 | Day 8, 11:59 PM | Uploaded

TASK PARENT ROW

Display:
Task title
Status
Progress
Due date
Submission status

Status values:
Not started
In progress
Done

Status logic:
Not started = no subtasks completed
In progress = some subtasks completed
Done = all subtasks completed

Progress:
Based on completed subtasks / total subtasks

Display as:
2/3 completed

or visually:
✔ ✔ ○

Due:
Always display:
Day X, 11:59 PM

Submission:
Uploaded file name
or
Not uploaded / empty state

EXPANDABLE SUBTASKS

Click parent task row:
Expand / collapse subtasks directly underneath.

Subtasks are slightly indented under the parent task.

Subtask row columns:
Subtask title
Status / checkbox
Progress marker
Due column empty
Submission

Example:

Sketch | Done | ✔ | — | wireframe-v1.fig
Refine | Done | ✔ | — | wireframe-v2.fig
Final | Not started | ○ | — | —

Rules:
Only one level of subtasks
No nested subtasks
Subtasks define execution
Parent progress = completed subtasks / total subtasks
Subtasks can act as submission points
Some tasks may have only one subtask
Some tasks may have multiple subtasks

TASK DETAIL PANEL

Click a task or subtask:
Open a right-side detail panel or modal.

The same detail container changes based on task state.

If current task:
Show:
Task title
Description
Leader note
Subtask checklist
Upload button OR Mark Complete button
Current uploaded file if any

If past task:
Show:
Submitted files
Comments from leader and team
Previous feedback

If future task:
Show:
Description only
No upload button
No comments

Description section:
Long text description explaining:
what to do
expected outcome
constraints / focus

Example task description:
Create wireframes for the transfer flow by designing a clear and simple end-to-end experience that allows users to send money with confidence and without confusion. This task focuses on structuring the full process, starting from how users enter the transfer feature, then selecting or adding a recipient, entering an amount, reviewing the transaction details, and finally confirming the transfer with clear success or failure feedback. The emphasis is not on visual styling but on building a logical, easy-to-follow flow where each step feels predictable and reduces the chance of error.

Action button logic:
If task requires upload:
Show [ Upload File ]

If task does not require upload:
Show [ Mark Complete ]

File handling:
No separate Files page.
Files are always attached to tasks or subtasks.
Inside task detail show:
File name
[ View ]
[ Replace Upload ] if editing current task

Comment system:
Available for past tasks and current tasks.
Not available for future tasks.

Comments:
Simple stacked list
No threading
No reactions

TASKS → ALL TASKS

Goal:
Transform All Tasks into a submission-focused review list.

All Tasks is NOT for execution.
All Tasks is NOT for managing progress.
All Tasks is for checking who submitted work, opening files, and commenting.

Data structure:
Each row represents one person × one task.
Not just one task.

Example:
If three people are assigned to similar deliverables, show three rows.

Layout:
Single vertical table
No cards
No Kanban
No expanded rows
Sorted by due date, earliest to latest

Columns from left to right:

Task
Owner
Status
Due
File

Row example:

Create wireframes for transfer flow | Sarah Chen | Submitted | Day 8, 11:59 PM | wireframe-v2.fig [View]

Another example:

Build prototype in Figma | Anna Kim | Not submitted | Day 10, 11:59 PM | —

Status values:
Submitted
Not submitted

Visual:
Submitted = normal text
Not submitted = slightly muted / lighter

File column:
If submitted:
Show file name
Show [ View ]
Optional [ Download ]

If not submitted:
Show —

Click [ View]:
Open modal or side panel.

Detail panel content:
Task title
Owner name
Submitted file
Comments list
Add comment input

Comments:
Simple stacked list

Example:
Elijah Wang
Looks good. Consider improving the flow.

Marcus Liu
Check backend feasibility.

Input:
[ Add comment... ]

Rules:
Do NOT show subtasks
Do NOT show progress bars
Do NOT show inline comments
Do NOT expand rows
Do NOT turn into Kanban
Do NOT mix execution logic

Core principle:
Execution happens in My Tasks.
Review happens in All Tasks.

MANAGE PAGE

Goal:
Rebuild Manage page as a task builder, not a form.

Manage is used by creator / leader to:
Create tasks
Add or remove subtasks
Assign owners
Set deadlines
Choose upload requirement
Drag tasks to reorder priority

The Manage page should feel like a builder workspace.

GLOBAL LAYOUT

Page title:
Manage Project

Main area:
Scrollable vertical workspace

Display multiple task blocks stacked vertically:

[ Task Block 1 ]
[ Task Block 2 ]
[ Task Block 3 ]

Top of page:
[ + Add Task ]

Click + Add Task:
Insert a new empty Task Block at top
Auto-focus on Task Title input

TASK BLOCK STRUCTURE

Each task block contains:

1. Task Title

2. Leader Note

3. Timeline / Subtasks

4. Assign Owner

5. Deadline

6. Requirement Type

7. Task Actions

8. Task Title

Input placeholder:
Task title

Example:
Create wireframes for transfer flow

2. Leader Note

Textarea placeholder:
Add instructions or expectations

Example:
Focus on flow clarity first. Keep the structure simple before visual refinement.

3. Timeline / Subtasks

Horizontal layout.

Example:
[ Sketch ] — [ Refine ] — [ Final ]

Subtask behavior:
Each subtask has editable name
Can be deleted
Can be reordered by drag
Represents one step and one potential submission point

Add subtask:
Button:
[ + Add Step ]

Adds new step to the right.

Rules:
Subtasks are optional but minimum one step must exist
No nested subtasks
Subtasks define execution flow
Subtasks do not have individual due dates
Only the parent task has a due date

4. Assign Owner

Dropdown label:
Assign to

Options:
Team members

Assign happens after task structure is defined.

5. Deadline

Input:
Due Day X, 11:59 PM

Example:
Day 8, 11:59 PM

Rules:
Only one deadline per task
No subtask-level deadlines
Deadline must include time
Default time is 11:59 PM

6. Requirement Type

Checkbox:
[ ] Requires upload

If checked:
User must upload file

If unchecked:
User sees Mark Complete

7. Task Actions

Inside each task block:
[ Delete Task ]
[ Duplicate Task ] optional

DRAG AND REORDER TASKS

Allow dragging entire task blocks vertically.

Behavior:
Drag to reorder tasks
Order represents priority
Smooth drag interaction
Maintain spacing

Visual:
Each task block is a clear container
Strong separation between tasks
Timeline / subtasks are visually prominent
Input styling should feel like builder, not heavy form

Remove old Manage structure:
Delete separate Create Task section
Delete separate Add Subtasks section
Delete bottom Task Management list

No multi-step flow:
Do NOT use step-by-step pages.
Everything is editable in one view.

System behavior:
Tasks can be created progressively.
Leader does not need to define all tasks upfront.
Edits are immediate.
Task structure drives Tasks page and Schedule.

Core principle:
Build → Assign → Execute
Not:
Fill → Submit → Repeat

MY SCHEDULE PAGE

Goal:
Create a personal cross-project time grid that aggregates all tasks across projects while allowing the user to control availability.

Entry point:
Global sidebar → My Schedule

My Schedule is personal and cross-project.
It is not inside one project.

Purpose:
Show all user-related project tasks across active projects
Show personal busy time
Show conflicts visually
Allow user to add short personal notes

GLOBAL STRUCTURE

Page layout:
Vertical scroll

Display 2–3 weeks depending on farthest task deadline across the user’s active projects.

Maximum:
3 weeks

Weeks stack vertically.

Each week is a separate grid.

Top-left label for each grid:
Week 1
Week 2
Week 3

GRID LAYOUT

Columns:
Mon → Sun

Rows:
AM
PM
Evening

CELL CONTENT MODEL

Each cell can contain only:

1. Availability, user-controlled
2. Task indicators, system-generated
3. Notes, user-created

LAYER 1 — AVAILABILITY

Red background = Busy
Empty = Available

Interaction:
Click cell:
Toggle Available ↔ Busy

Rules:
Only one availability state
No gradients
Red must be visible but not overwhelming

LAYER 2 — TASK INDICATORS

Each task is represented by a 📌.

Each project uses a distinct 📌 color.

Example:
Mobile Banking = blue 📌
E-commerce = purple 📌
Fitness = green 📌

Rules:
Multiple tasks = multiple 📌 icons
Do not merge into one icon
Do not show task text inside cell
Project distinction only uses colored 📌, not full cell background

Placement:
📌 icons appear inside the cell
Stack horizontally or wrap if needed
Keep small and readable

Meaning:
📌 = task is scheduled / suggested in this time slot
It is not a strict requirement

Conflict state:
If red busy cell + 📌 present:
Show natural visual conflict
No popup
No intervention
User resolves conflict manually

LAYER 3 — NOTES

User can attach a personal note.

Right-click cell:
Open menu:

Add note
Mark busy
Clear

Note rules:
Short text only, max around 20 characters
Represented as small dot or subtle marker
No large text in grid

Clear behavior:
Clear removes:
Busy state
Note

Clear does NOT remove:
Task indicators 📌

Hover over cell:
Show tooltip with:

Tasks:
List all tasks in that cell.

Example:
[Mobile Banking]
Create wireframes for transfer flow

[E-commerce]
Build checkout prototype

Availability:
You marked this as busy
or
You are available

Notes:
Show user note if exists

Click cell:
Open small modal or side panel.

Display:
Task list
Button:
[ Go to task ]

Deadline consistency:
All deadlines default to 11:59 PM.
Tasks should appear in the Evening row of that deadline day.

Do not:
Do not show task names inside grid
Do not overload cells
Do not auto-adjust user availability
Do not convert into full calendar system
Do not use full background colors for projects

Core principle:
User controls time.
System shows pressure.
User resolves conflict.

TEAM SCHEDULE PAGE

Goal:
Turn Team Schedule into a clear project-level weekly grid that shows:

When each member is busy
When tasks are scheduled
When team members overlap in availability
Across the project duration

Team Schedule belongs inside a project workspace.

GLOBAL STRUCTURE

Display multiple weekly grids stacked vertically.

Each grid = one week
Maximum = 3 weeks
Users scroll vertically to view

Each weekly grid has a top-left label:

Week 1
Week 2
Week 3

GRID LAYOUT

Columns:
Mon → Sun

Rows:
AM
PM
Evening

LAYER 1 — BUSY STATUS

Each cell can contain multiple team members.

Display each member as a small horizontal color bar inside the cell.

Example:
Sarah Chen = red bar
Marcus Liu = blue bar
Anna Kim = yellow bar

Rules:
One color per person
Stack bars vertically inside cell
Do not fill entire cell with one member’s color
Keep bars small and readable
Bars represent busy time only

LAYER 2 — TASK INDICATOR

If a task exists in that time slot:
Show 📌 in top-right corner

Tasks are automatically placed by the system when assigned by leader.

Each task appears:
Correct week
Correct day
Correct time slot AM / PM / Evening

Rules:
Only show one 📌 even if multiple tasks exist
Do not display task name inside grid
Keep grid visually clean

Hover interaction:
Hover over cell:
Show tooltip with:

Busy:
List names of busy members

Example:
Sarah Chen
Marcus Liu

Tasks:
List tasks in that slot

Example:
• Create wireframes for transfer flow
• Build prototype

Availability:
Show who is available

Example:
Anna Kim is available

Hover directly on 📌:
Show task detail tooltip:

Task name
Short deadline info

Example:
Create wireframes for transfer flow
Due tonight

Multiple tasks:
Still show one 📌
Tooltip shows task list

Example:
2 tasks:
• Wireframes
• Prototype

Click cell:
Open small modal or side panel.

Display:
Task title
Owner
Deadline, full format:
Day X, 11:59 PM
Button:
[ Go to task ]

Overlap feature:
When user clicks Find overlap:
Highlight matching cells across the grid.

Highlight style:
Light green background or subtle outline
Do not override busy bars completely
Keep existing data visible

Rules:
Only highlight valid shared availability
Must reflect selected team members
Must work across multiple weeks

Team legend:
Display fixed at bottom-left of Team Schedule page.

Show:
Color → person

Example:
■ Red — Sarah Chen
■ Blue — Marcus Liu
■ Yellow — Anna Kim

Rules:
Always visible
Fixed position bottom-left
Helps users understand color system

Visual priority:

1. Busy bars
2. 📌 task indicator
3. Hover details
4. Overlap highlight

Do not:
Do not write text inside cells
Do not expand grid cells
Do not overload UI
Do not mix task text with availability directly
Do not create task blocks inside grid

Core principle:
Grid shows patterns, not details.
Details appear only on hover or click.

MESSAGING PAGE

Goal:
Improve messaging contact list to reflect team-based collaboration while keeping messaging simple and flat.

Messaging is not a friend system.
Messaging is not a social feature.
Messaging exists because users are working together in projects.

GLOBAL SIDEBAR ENTRY

Messaging appears in the global sidebar.

PAGE LAYOUT

Two-column layout.

Left:
Contact list

Right:
Chat area

LEFT CONTACT LIST

Structure:
Single vertical list
All users appear in one continuous list
No nested folders
No expand/collapse

TEAM GROUPING

Use lightweight visual group headers.

Each team is displayed as a labeled section.

Example:

[ Mobile Banking Redesign ]
Sarah Chen
Marcus Liu
Anna Kim

[ E-commerce Checkout ]
David Lin
Kevin Zhao

Rules:
Do not collapse into folders
Do not add expand/collapse interaction
Do not indent heavily
Keep layout flat and scannable

Team header style:
Slightly smaller or muted label
Uppercase or semi-bold
Light divider above or below

Purpose:
Group users visually without creating hierarchy.

CONTACT ITEM

Each teammate row contains:
Avatar on left
Name right of avatar

Optional:
Small status indicator

Do not include:
Role labels
Project icons
Unnecessary metadata

HOVER PROFILE

When hovering over avatar:
Show floating profile card.

Position:
Right side of cursor.

Profile card content:
Name
Role optional
Short bio / description

Example:
Sarah Chen
UX Designer
Focused on research and interaction design

Rules:
Keep lightweight
No scrolling inside card
No deep profile view

Click user:
Open chat in right panel.

RIGHT CHAT PANEL

Keep minimal.

Top:
Selected user name

Middle:
Message history

Bottom:
Input field
Button:
[ Send ]

No extra features.

Do not include:
Group chat
File upload
Emoji reactions
Read receipts
Typing indicator
Notifications
Voice
Video
Add friend flow

MULTIPLE TEAM RULE

If one person appears in multiple teams:
Show the same person under each relevant team header.

Reason:
Maintain project context.
Avoid merging identities across project contexts.

Core principle:
Communication is project-based, not relationship-based.

PROFILE MODAL BEHAVIOR

Across the product, when clicking avatar or member name:
Open a centered modal on top of the current page.

Do not navigate to a new profile page.
Do not use a side drawer.

Modal:
Centered
Width 480–560px
Dim background
Click outside to close
Close button inside

Modal content:
Avatar placeholder
Name
Role
Short intro
Skills
Availability
Project history

Example:
Sarah Chen
UX Designer

Intro:
Interested in product flows and accessibility.

Skills:
Figma · Wireframing · Research

Availability:
4–6h/week

Project History:
Completed: 3
Left early: 0

Bottom buttons:
[ Message ]
[ Close ]

Rules:
Keep short
No scrolling if possible
No followers
No likes
No rating score
No social profile page

FINAL SYSTEM RELATIONSHIP

Overview:
Project summary and real-data team snapshot

Tasks → My Tasks:
Personal execution table with expandable subtasks

Tasks → All Tasks:
Submission review list for team work

Manage:
Task builder for leader / creator

My Schedule:
Personal cross-project time grid

Team Schedule:
Project-level group availability grid

Messaging:
Minimal project-based communication

Files:
No standalone Files page.
Files belong inside task/submission detail.

Team:
No standalone Team page.
Team appears inside Overview and Team Schedule.

Core product principles:
Tasks drive execution
Subtasks define work structure
Submissions create review
Schedules coordinate time
Messaging supports clarification only
Overview summarizes facts, not assumptions
Keep the system lightweight, structured, and execution-first
