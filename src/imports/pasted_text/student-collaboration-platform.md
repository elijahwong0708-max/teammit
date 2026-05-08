Design a low-fidelity desktop web app for a student collaboration platform.

The product helps students create, join, manage, and complete short-term team projects. The focus is not social networking. The focus is commitment, accountability, project execution, task progress, files, and lightweight team collaboration.

Use grayscale low-fidelity wireframe style only.

GLOBAL DESIGN RULES

Frame:

* 1440 × 1024 desktop web

Style:

* Low-fidelity wireframe
* Grayscale only
* No colors
* No shadows
* No decorative icons
* No real images
* Use simple rectangles, lines, and text
* Clear layout hierarchy
* Clean spacing
* Use 16px / 24px / 32px spacing only

Main layout:

* Sidebar can be collapsed
* Main content should reflow when sidebar opens or closes
* Sidebar is part of layout, not overlay
* When sidebar is collapsed, main content starts after collapsed sidebar
* When sidebar is expanded, main content shifts right

SIDEBAR

Sidebar behavior:

* Default collapsed state
* Collapsed sidebar only shows a small button / avatar area in the upper left
* Clicking opens expanded sidebar
* Expanded sidebar width: 240px
* Collapsed sidebar width: 64px
* Sidebar is fixed on the left
* Main content reflows when sidebar expands or collapses

Expanded sidebar content:
Top:

* User avatar
* User name or short profile preview
* Clicking avatar opens Profile drawer

Main navigation:

* Explore

My Projects section:

* Project A
* Project B
* Project C
* Each project represents a team workspace
* Clicking a project opens that project dashboard

Hover behavior:

* Hovering over a project in My Projects shows a small team preview
* Team preview shows member avatars/placeholders and names
* Keep hover preview lightweight

Bottom:

* * Create Project button
* Place this button at the bottom of the My Projects section
* Treat it as adding a new project workspace
* Do not place Create Project in the top navigation
* Do not use a floating button

PROFILE DRAWER

Trigger:

* Clicking the avatar in the sidebar opens the profile drawer

Drawer:

* Appears as a right-side drawer
* Drawer width: 360px
* Drawer overlays main content but does not cover sidebar
* Internal padding: 24px
* Include close button at top-right

Profile content:

1. Avatar + Name

* Avatar placeholder: 64 × 64 circle
* Name in bold

2. Short Intro

* One line only
* Max 120 characters

3. Roles

* Multiple roles separated by dots
* Example: UX Designer · Product Designer

4. Tools

* 3–6 tools
* Example: Figma · Illustrator · HTML/CSS

5. Availability

* Example: 4–6 hours/week

6. Project History

* Completed: X
* Left early: X

Rules:

* Keep profile minimal
* Do not include followers, likes, GPA, long resume, or rating score
* Do not include social features
* Profile is for collaboration relevance only

EXPLORE PAGE

Purpose:

* Help users quickly scan available projects
* Explore is for scanning, not reading

Layout:

* Sidebar on left
* Main content on right
* Search and filters at top
* Project cards in a clean grid or list

Filters:

* Role
* Duration
* Time commitment
* Team size

Project card design:

* Entire card is clickable
* No internal button
* No “View Project” button
* No long description
* No owner reputation on card
* Keep card lightweight

Card structure:
Left:

* UI / project thumbnail placeholder rectangle
* Fixed size around 120px wide

Right:

* Project Title, one line
* Roles needed
  Example: UX · Developer
* Time commitment
  Example: 4–6h/week
* Duration
  Example: 2w or 3w
* Team size
  Example: 2 / 5

Rules:

* Horizontal card layout
* Card padding: 16–24px
* Spacing inside card: 16px
* Text short and scannable
* Clicking card opens Project Detail page

PROJECT DETAIL PAGE

Purpose:

* Help user decide whether to join
* Focus on trust, role clarity, team fit, and project expectations
* Do not expose full product idea details
* Do not include UI preview

Layout:

* Sidebar on left
* Main content: 1200px centered
* Two-column layout inside content
* Left column: around 70%
* Right column: around 30%

Remove:

* UI Preview section
* Long descriptions
* Owner information from Explore card
* “What you’ll do” section
* Any user-specific task assumption

Page structure:

1. Header / Project Summary

* Project Title
* One-line summary
* Format: “2 weeks · 4–6h/week”

2. Created by
   Purpose:

* Help users evaluate whether the creator is reliable

Content:

* Creator name
* Creator role
* Reputation:

  * Completed: X
  * Left early: X

Example:
Elijah Wang
UX Designer
Completed: 3 · Left early: 0

Note:

* Creator is the default organizer
* Do not enforce a strict leader-only identity
* Creator can also have another working role

3. Project Overview

* 1–2 lines only
* Short and general
* No detailed product explanation
* Do not expose full idea details

Example:
Redesign core user flows for a mobile banking app.

4. Creator Note
   Purpose:

* Build trust
* Set expectations
* Softly filter collaborators
* Let creator express attitude and collaboration preference without exposing full project details

Content:

* 2–4 lines only
* Written by creator
* Should include:

  * Why creator wants to do this project
  * Expected level of output
  * Preferred type of collaborators

Example:
“This is an idea I’ve been thinking about for a while.
I’m not aiming for a perfect product, but I want to explore the core flow.
I prefer working with people who are consistent and take responsibility.”

Rules:

* Do not include detailed product logic
* Do not reveal full solution
* Do not make it long

5. Roles & Responsibilities
   Purpose:

* Explain what each role generally does
* This is only expectation, not final task assignment

For each role:

* Role name
* 2–3 bullet points

Example:
UX Designer

* Create user flows
* Design wireframes

Frontend Developer

* Build prototype
* Implement UI

Add note:
“Tasks will be assigned after the team is formed.”

6. Team
   Purpose:

* Help user evaluate current team quality and fit

Top:

* Team progress
* Example: “2 / 5 joined”

For each member:

* Name
* Role
* Skills
* Availability

Example:
Sarah – UX
Figma · Wireframing
4–6h/week

Marcus – Developer
React · JS
6h/week

7. Workflow
   Purpose:

* Show high-level project structure

Simple 2-week workflow:
Week 1:

* Research & planning

Week 2:

* Design & build

Rules:

* Keep high-level
* No detailed breakdown

8. CTA

* One primary button only:
  “Join Project”

Interaction:

* Clicking Join Project leads to Commitment page
* Do not assume user has chosen a role yet

COMMITMENT PAGE

Purpose:

* User commits to joining with role, time, and motivation
* User does not define exact deliverables yet
* Specific tasks are assigned later by project creator / leader

Layout:

* Sidebar on left
* Main content centered
* Form width around 640px
* Keep page minimal

Page structure:

Top:

* Back to Project link
* Title: “Confirm Your Commitment”

Fields:

1. Role selection

* User selects one role they want to join as
* Role comes from project’s role list

2. Time Commitment
   Options:

* 2h/week
* 4h/week
* 6h/week
* 8h/week

3. Why I want to join

* Text area input
* Medium height, 3–4 lines
* Placeholder:
  “Briefly explain why you are interested and what you can contribute”

Rules:

* Keep this short
* No long essay
* Focus on motivation and contribution
* This helps creator evaluate applicants

4. Project Duration

* Read-only text
* Example: “Project duration: 2 weeks”

CTA:

* Button:
  “I commit to this project”

Remove:

* Deliverable input field completely

System logic:

* Users commit to a role, time, and motivation
* Users do not define their own task before joining
* Tasks are assigned after joining
* Role defines general responsibility
* Leader / creator defines execution

CREATE PROJECT FLOW

Purpose:

* Allow users to create a project quickly
* Flow should feel like selecting and configuring, not filling a long form
* Use one screen per step
* User can go back at any step

Global:

* Sidebar on left
* Main content centered
* Max content width: 800px
* Each step is separate screen
* Top progress bar on every step
* Format: “Step X of 6”
* Horizontal progress indicator
* Bottom navigation consistent on every step

Buttons:

* Bottom left: Back
* Bottom right: Next
* Final step bottom right: Create Project
* Keep button positions fixed across all steps

Step 1 — Basic Info
Title:
“Create your project”

Fields:

* Project Title
* Project Overview, 1–2 lines
* Creator Note, 2–4 lines

Rules:

* This is the only step with free text input
* Keep text short

Step 2 — Role Selection
Title:
“Select roles needed”

Use hierarchical selection.

Top:
Selected roles live update area:
Example:
[ UX Designer ] [ Frontend Developer ]

Rules:

* Selected roles appear at top immediately
* Each selected role has remove ×
* Max roles: 5
* Prevent duplicates
* No custom role input

Middle:
Role categories:

* Organizer
* Design
* Engineering
* Research
* Content

Interaction:

* Clicking a category expands sub-roles
* Only one category expanded at a time

Sub-roles:
Organizer:

* Project Lead

Design:

* UX Designer
* UI Designer

Engineering:

* Frontend Developer
* Backend Developer
* Full-stack Developer

Research:

* Researcher
* Data Analyst

Content:

* Copywriter
* Marketing

Rules:

* Roles must not overlap
* Keep roles broad
* Do not include task-based roles such as QA or accessibility reviewer
* The goal is to create a small working team, not list every possible job title

Step 3 — Team Size
Title:
“Choose team size”

Slider:

* Range: 2–5

Display:
“Team size: X people”

Constraint:

* Team size must be greater than or equal to number of selected roles

Step 4 — Weekly Time Commitment
Title:
“Weekly time commitment”

Selectable options:

* 2h/week
* 4h/week
* 6h/week
* 8h/week

Step 5 — Project Duration
Title:
“Project duration”

Slider:

* Range: 2–3 weeks

Display:
“Duration: X weeks”

Step 6 — Workflow Template
Title:
“Choose workflow”

Selectable cards:

* Basic 2-week
* Design-focused
* Build-focused
* Research-focused

Final action:

* Button: Create Project
* Place bottom right, same position as Next

Optional after-create state:

* Message: “Project created successfully”
* Button: “Go to Project Dashboard”

PROJECT DASHBOARD SYSTEM

Purpose:

* A project dashboard is the execution center for one project
* Each project has its own dashboard
* Dashboard is project-specific, not global
* User enters a project from My Projects in sidebar

Dashboard should use top tab navigation:

* Overview
* Tasks
* Files
* Team
* Manage, leader only

Use rectangular tabs at the top like browser/webpage tabs.
Current tab should be visually active.

Top status area:
Always show two progress lines at top of dashboard.

Line 1:
Project progress

* Progress bar
* Percentage
* Day count
  Example:
  Project Progress: 28% · Day 4 / 14

Line 2:
User deadline progress

* Time before user’s next task deadline
  Example:
  Next task due in 2 days

Purpose:

* User immediately knows project status and personal pressure

OVERVIEW TAB

Purpose:

* Quick state check
* User should instantly understand what to do next

Content:

1. Project status

* Project title
* Day X / total days
* Progress %

2. My Task, primary focus

* Current task
* Due date
* Status

3. Next task

* Greyed out
* Shows what comes after current task

4. Later tasks

* Greyed list
* Lower visual priority

5. Small activity preview

* Recent updates
* Example:
  Sarah submitted work
  Marcus updated task
  Anna inactive 2 days

Rules:

* Prioritize My Task
* User should see their next action immediately

MY TASK ACTION LOGIC

If current task requires submission:

* Show button: “Upload Work”

If current task does not require submission:

* Show button: “Mark as Complete”

After upload or completion:

* Notify leader / creator

TASKS TAB

Purpose:

* Manage all project tasks

Layout:
Kanban board with columns:

* To do
* In progress
* Done

Task card contains:

* Task title
* Owner
* Due date
* Status

Interactions:

* Drag task between columns
* Click task to open Task Detail
* Add Task button visible to leader / creator

Rules:

* One task = one owner
* Tasks are assigned by creator / leader
* Keep task cards simple

TASK DETAIL PAGE

Purpose:

* Complete one task through submission, feedback, and completion

Sections:

1. Task Info

* Task title
* Owner
* Deadline
* Status

2. Deliverable

* Submitted work
* Link/file placeholder
* Button:
  “Submit / Update Work”
* Only task owner can submit/update

3. Comments

* All team members can comment
* Comment list shows name + comment text
* Add comment input
* No reactions
* No likes
* Keep simple

4. Action

* Button:
  “Mark as Done”
* Only owner can mark complete

Workflow:
submit → review/comment → complete

FILES TAB

Purpose:

* Central place for all submitted work
* Everyone can view all project files
* Everyone can comment on files

Content:

* File name
* Owner
* Related task
* Upload/submission date
* Status

Each file item:

* View
* Comment

Comments:

* Show name + comment
* Add comment input
* Keep simple

Rules:

* Files page is separate from tasks
* This page is for shared work review
* No heavy chat system

TEAM TAB

Purpose:

* Understand who is working on what
* Team is execution-focused, not identity-focused

Content:
Team title:
Team (X / max)

Each member card:

* Name
* Role
* Current task
* Deadline
* Task status

Example:
Sarah – UX Designer
Task: Create wireframes
Due: Day 8
Status: In progress

Special states:

* If no task assigned:
  “No task assigned”
* For Project Lead:
  “Assigning tasks”
* If inactive:
  “No activity”

Rules:

* Do not use vague “Active” alone
* Always connect member to current work
* Focus on execution and accountability

Optional:

* Clicking a member opens a simple work-related detail view
* Detail shows role, skills, current tasks, and availability
* Keep it simple

Sidebar hover:

* Hovering over a project in My Projects shows a light team preview
* Preview shows member avatars/placeholders and names
* Clicking project opens full dashboard

Private message:

* A simple “Message” action can exist on member detail
* Do not build a heavy chat system
* Keep messaging lightweight

MANAGE TAB, LEADER ONLY

Purpose:

* Let creator / leader assign and adjust tasks
* Leader also has their own role and tasks
* Leader is not only a manager

Visible only to:

* Creator / Project Lead

Functions:

1. Assign Task

* Select member
* Select task or create task
* Set deadline
* Select whether task requires upload
* Assign

2. Change Owner

* Change task owner

3. Change Deadline

* Adjust deadline

4. Add Task

* Task title
* Owner
* Deadline
* Requires upload? yes/no

Rules:

* Leader assigns concrete tasks after team forms
* Users do not define their own tasks before joining
* Role gives general expectation
* Manage tab defines actual execution

DASHBOARD RULES

* Separate views clearly
* Do not put everything on one page
* Each tab has one purpose
* Overview = quick status
* Tasks = manage work
* Files = review submitted work
* Team = see who is doing what
* Manage = leader task control
* Keep collaboration simple
* Avoid heavy chat systems
* Avoid social feed
* Avoid complex permissions
* Prioritize execution and accountability

CORE PRODUCT LOGIC

Explore:

* Find projects

Project Detail:

* Understand project, creator, team, and roles

Commitment:

* Choose role, time commitment, and motivation

Dashboard:

* Complete work through tasks, files, feedback, and progress tracking

Overall goal:

* Help students commit to small projects and actually complete them
* Focus on execution, not social networking
* Focus on accountability, not popularity
* Focus on lightweight collaboration, not complex project management
