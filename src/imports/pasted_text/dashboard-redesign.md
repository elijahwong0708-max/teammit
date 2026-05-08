PROMPT 6 — FINAL DASHBOARD SYSTEM: EXECUTION-FOCUSED WITH TIMELINE + AVAILABILITY

Redesign the project dashboard into an execution-focused system.

The dashboard should not be a general project management board. It should help students know what to do, submit work, see feedback, coordinate time, and stay accountable.

---

GLOBAL DASHBOARD STRUCTURE

Keep only 5 pages:

1. Overview
2. My Task
3. Tasks
4. Availability
5. Manage

Use rectangular tabs at the top:

[ Overview ] [ My Task ] [ Tasks ] [ Availability ] [ Manage ]

The active tab should be visually highlighted.

---

TOP SECTION VISIBLE ON ALL DASHBOARD PAGES

Display two fixed progress lines:

1. Project Progress

* Progress bar
* % based on completed tasks / total tasks
* Day X / total days

Example:

Project Progress: 28% · Day 4 / 14

2. Next Task Deadline / My Progress

* Time-based progress bar
* Current task name
* Deadline countdown

Example:

Create wireframes · Due in 2 days

---

OVERVIEW PAGE

Purpose:

Understand the project and team at a glance.

Include:

1. Project description

* Short project summary

2. Creator statement

* Creator’s note / project intent

3. Team snapshot

* Members list
* Name
* Role
* Current status or current task

4. Activity log

Activity examples:

* Sarah submitted work
* Marcus updated task
* Anna inactive 2 days

Rules:

* Team page is removed as a standalone page
* Team information lives in Overview
* Keep Overview as project context, not execution detail

---

MY TASK PAGE

Purpose:

Core execution page.

The user should understand exactly what they need to do and see feedback from leader/team.

Structure:

1. Task header

Display:

* Current task title
* Deadline
* Status
* Leader note / instruction

Example leader note:

“Focus on flow clarity first. Keep the structure simple before visual refinement.”

---

2. Left-to-right timeline

Each node = one subtask.

Example:

[ Sketch ✔ ] — [ Refine ✔ ] — [ Final ○ ]

Rules:

* One level only
* No nested subtasks
* Timeline moves left to right

---

3. Selected step detail

When user clicks a node, show:

* Submission / file / output
* Comments from leader and team
* Previous versions, if any

---

4. Actions

Show:

* Upload new version
* Mark step complete

If task does not require upload:

* Show Mark Complete only

---

Goal:

Show progress as a process.

Enable iteration and feedback.

Make execution clear.

---

TASKS PAGE

Purpose:

Global execution view.

User can see their own tasks and the full team’s task progress.

Add toggle:

[ My Tasks ] [ All Tasks ]

---

MY TASKS VIEW

Display only tasks assigned to current user.

Each task should show:

* Task title
* Deadline
* Status
* Timeline preview / subtask progress

Example:

Create wireframes
Due: Day 8
[ ✔ — ✔ — ○ ]

---

ALL TASKS VIEW

Use Kanban layout:

To do | In progress | Done

Each task card shows:

* Task title
* Owner
* Deadline
* Timeline preview / subtask progress

Example:

Build prototype
Owner: Marcus
Due: Day 10
[ ✔ — ○ — ○ ]

---

INTERACTION

Click task card to view:

* Timeline
* Submissions
* Comments

Allow viewing other members’ submitted work and comments.

---

FILES SYSTEM

Remove standalone Files page.

Files belong to tasks or subtasks.

Inside task detail, show:

* Attached file / link
* Owner
* Related subtask
* Comments

Actions:

[ View ] [ Comment ]

---

AVAILABILITY PAGE

Purpose:

Coordinate team time.

This is not a full calendar system.

It is only for availability coordination.

---

Page structure:

Tabs:

[ My Schedule ] [ Team Schedule ]

---

MY SCHEDULE

Display weekly grid.

Columns:

* Mon
* Tue
* Wed
* Thu
* Fri
* Sat
* Sun

Rows can be broad time blocks:

* AM
* PM
* Evening

Support multiple weeks by vertical scroll.

Cell meaning:

* Green = Available
* Red = Busy
* Grey = Task scheduled automatically from system

Interaction:

* Click cell to toggle availability / busy

---

TEAM SCHEDULE

Allow selecting team members.

Show selected members’ schedules.

---

COMMON TIME FUNCTION

Allow user to select 2+ members.

Button:

“Find overlap”

Display shared available time slots.

Example:

Common availability:
Tue PM
Thu Evening

Rules:

* Do not build full calendar system
* No Google Calendar integration
* No exact hourly scheduling
* Keep simple and visual
* Use for coordination only

---

MANAGE PAGE

Purpose:

Control panel for creator / leader.

Leader can assign and adjust tasks.

Leader also still has their own role and tasks.

Manage page is an extra control area, not a separate identity.

Functions:

1. Create task

Fields:

* Task title
* Owner
* Deadline
* Requires upload? yes/no

2. Add subtasks

Each subtask:

* Subtask title
* Order in timeline

3. Assign / change owner

4. Change deadline

5. Set task requirement

* Requires upload
* Does not require upload

Rules:

* Tasks can be created progressively
* Leader does not need to define all tasks upfront
* Leader defines actual execution
* Role only defines general responsibility

---

SYSTEM PRINCIPLES

1. Execution-first
2. Tasks drive everything
3. Subtasks define progress
4. Files belong to tasks
5. Team info lives in Overview
6. Time is coordination, not control
7. Transparency over perfection
8. Keep collaboration lightweight

---

FINAL USER FLOW

Explore → Join Project

↓

Overview
Understand project, creator, team, and activity

↓

My Task
Execute, submit, see feedback, iterate

↓

Tasks
See my tasks and team progress

↓

Availability
Align time with teammates

↓

Manage
Assign and adjust work

---

GOAL

Turn project collaboration into:

Clear execution + visible progress + coordinated teamwork
