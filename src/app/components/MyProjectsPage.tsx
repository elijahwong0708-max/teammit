import { useState } from "react";
import { CreditCard, ShoppingBag, Activity, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

interface Project {
  id: string;
  name: string;
  role: string;
  progress: number;
  status: string;
  accent: string;
  week: string;
  start: string;
  nextTask: string;
  nextDue: string;
  Icon: LucideIcon;
}

const PROJECTS: Project[] = [
  { id: "1", name: "Mobile Banking Redesign",  role: "UX Designer", progress: 28, status: "In progress",     accent: "#6C7CFF", week: "Week 1 of 2", start: "May 6, 2026",  nextTask: "Create wireframes for transfer flow", nextDue: "Day 8, 11:59 PM",  Icon: CreditCard  },
  { id: "2", name: "E-commerce Checkout Flow", role: "Researcher",   progress: 65, status: "In progress",     accent: "#9B7BFF", week: "Week 2 of 3", start: "Apr 22, 2026", nextTask: "Build prototype in Figma",            nextDue: "Day 10, 11:59 PM", Icon: ShoppingBag },
  { id: "3", name: "Fitness Dashboard",        role: "UX Designer",  progress: 90, status: "Near completion", accent: "#4EC970", week: "Week 2 of 2", start: "Apr 24, 2026", nextTask: "Final review and handoff",            nextDue: "Day 14, 11:59 PM", Icon: Activity    },
];

type Outcome = "Completed" | "Left early" | "Archived";

interface HistoryProject {
  id: number;
  project: string;
  role: string;
  start: string;
  end: string;
  outcome: Outcome;
  teamCount: number;
  team: Array<{ name: string; role: string }>;
  process: string;
  result: string;
  log: Array<{ date: string; action: string; file?: string }>;
}

const HISTORY: HistoryProject[] = [
  {
    id: 1,
    project: "Recipe Sharing Platform",
    role: "Content Designer",
    start: "Mar 3, 2026",
    end: "Mar 24, 2026",
    outcome: "Completed",
    teamCount: 4,
    team: [
      { name: "Sarah Chen", role: "UX Designer" },
      { name: "Marcus Liu", role: "Developer" },
      { name: "Anna Kim", role: "Visual Designer" },
    ],
    process: "Research → Content Strategy → Design → Review",
    result: "Completed a structured recipe browsing experience with community interaction features.",
    log: [
      { date: "Mar 3",  action: "Joined project" },
      { date: "Mar 8",  action: "Submitted content strategy document", file: "strategy.pdf" },
      { date: "Mar 15", action: "Uploaded wireframe review notes",      file: "review-notes.pdf" },
      { date: "Mar 24", action: "Final project completed" },
    ],
  },
  {
    id: 2,
    project: "Course Project Showcase",
    role: "Visual Designer",
    start: "Feb 10, 2026",
    end: "Feb 24, 2026",
    outcome: "Completed",
    teamCount: 3,
    team: [
      { name: "Marcus Liu", role: "Developer" },
      { name: "David Lin", role: "Content Creator" },
    ],
    process: "Visual Strategy → Design System → Showcase Build → Launch",
    result: "Published a student portfolio gallery with peer discovery and project highlighting features.",
    log: [
      { date: "Feb 10", action: "Joined project" },
      { date: "Feb 14", action: "Submitted design system v1" },
      { date: "Feb 21", action: "Uploaded showcase mockup", file: "showcase-v2.fig" },
      { date: "Feb 24", action: "Project completed" },
    ],
  },
  {
    id: 3,
    project: "Museum Visit Companion",
    role: "UX Designer",
    start: "Jan 15, 2026",
    end: "Feb 5, 2026",
    outcome: "Completed",
    teamCount: 5,
    team: [
      { name: "Sarah Chen", role: "UX Researcher" },
      { name: "Marcus Liu", role: "Developer" },
      { name: "Anna Kim", role: "Visual Designer" },
      { name: "Kevin Zhao", role: "Accessibility Specialist" },
    ],
    process: "Research → User flow → Wireframes → Prototype → Final review",
    result: "Completed a high-fidelity prototype for a museum visit companion designed to reduce stress during independent visits.",
    log: [
      { date: "Jan 15", action: "Joined project" },
      { date: "Jan 18", action: "Completed research notes" },
      { date: "Jan 23", action: "Submitted user flow" },
      { date: "Jan 29", action: "Uploaded prototype v1", file: "prototype-v1.fig" },
      { date: "Feb 5",  action: "Final project completed" },
    ],
  },
  {
    id: 4,
    project: "Budget Travel Planner",
    role: "UX Researcher",
    start: "Dec 2, 2025",
    end: "Dec 18, 2025",
    outcome: "Completed",
    teamCount: 4,
    team: [
      { name: "David Lin", role: "Developer" },
      { name: "Anna Kim", role: "UX Designer" },
      { name: "Kevin Zhao", role: "Data Analyst" },
    ],
    process: "Research → Competitive Analysis → User Journey → Prototype",
    result: "Designed a budget comparison flow for student travelers choosing between destinations and transport options.",
    log: [
      { date: "Dec 2",  action: "Joined project" },
      { date: "Dec 7",  action: "Submitted competitive analysis report", file: "analysis.pdf" },
      { date: "Dec 13", action: "Uploaded journey map" },
      { date: "Dec 18", action: "Project completed" },
    ],
  },
  {
    id: 5,
    project: "Campus Food Review App",
    role: "Product Designer",
    start: "Nov 5, 2025",
    end: "Nov 19, 2025",
    outcome: "Completed",
    teamCount: 3,
    team: [
      { name: "Marcus Liu", role: "Developer" },
      { name: "Sarah Chen", role: "UX Researcher" },
    ],
    process: "User Research → IA → Wireframes → UI",
    result: "Delivered a quick-rating tool for campus dining spots with filtering by price, wait time, and diet type.",
    log: [
      { date: "Nov 5",  action: "Joined project" },
      { date: "Nov 10", action: "Submitted information architecture doc" },
      { date: "Nov 16", action: "Uploaded UI designs", file: "food-app-ui.fig" },
      { date: "Nov 19", action: "Project completed" },
    ],
  },
  {
    id: 6,
    project: "Study Group Matcher",
    role: "UX Designer",
    start: "Oct 8, 2025",
    end: "Oct 17, 2025",
    outcome: "Left early",
    teamCount: 5,
    team: [
      { name: "Kevin Zhao", role: "Developer" },
      { name: "Anna Kim", role: "Visual Designer" },
      { name: "Sarah Chen", role: "Researcher" },
      { name: "David Lin", role: "Product Manager" },
    ],
    process: "Research → User Flow → Wireframes (not completed)",
    result: "Left the project during the wireframing phase due to schedule conflicts.",
    log: [
      { date: "Oct 8",  action: "Joined project" },
      { date: "Oct 13", action: "Submitted initial research notes" },
      { date: "Oct 17", action: "Left project early" },
    ],
  },
];

const OUTCOME_STYLES: Record<Outcome, string> = {
  "Completed":  "text-[#4EC970] bg-[#1E3A28] border border-[#2F6240]",
  "Left early": "text-[#F16D6D] bg-[#3A2222] border border-[#6B3535]",
  "Archived":   "text-[#8A8A8A] bg-[#252526] border border-[#3A3A3A]",
};

const PALETTE = ["#6C7CFF", "#9B7BFF", "#4EC970", "#D7BA7D", "#F16D6D"];
function avatarBg(name: string) { return PALETTE[name.charCodeAt(0) % PALETTE.length]; }
function initials(name: string) { return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase(); }

function SmallAvatar({ name }: { name: string }) {
  return (
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-semibold text-white flex-shrink-0"
      style={{ backgroundColor: avatarBg(name) }}
    >
      {initials(name)}
    </div>
  );
}

function HistoryDetailPanel({ item, onClose }: { item: HistoryProject; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex justify-end" onClick={onClose}>
      <div
        className="w-[460px] h-full bg-[#1E1E1E] border-l border-[#3A3A3A] flex flex-col shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3A3A3A] bg-[#252526] flex-shrink-0">
          <div>
            <div className="text-[15px] font-semibold text-[#E8E8E8]">{item.project}</div>
            <div className="text-[12px] text-[#8A8A8A] mt-0.5">{item.start} — {item.end} · {item.role}</div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-md text-[#8A8A8A] hover:text-[#E8E8E8] hover:bg-[#2F2F2F] transition-colors flex-shrink-0"
          >
            <X size={14} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {/* Outcome */}
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium ${OUTCOME_STYLES[item.outcome]}`}>
              {item.outcome}
            </span>
            <span className="text-[12px] text-[#8A8A8A]">{item.teamCount} teammates</span>
          </div>

          {/* Team */}
          <div>
            <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2.5">Team</div>
            <div className="space-y-2">
              {item.team.map(m => (
                <div key={m.name} className="flex items-center gap-2.5">
                  <SmallAvatar name={m.name} />
                  <span className="text-[13px] text-[#D8D8D8]">{m.name}</span>
                  <span className="text-[12px] text-[#8A8A8A]">· {m.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">Project Process</div>
            <div className="text-[13px] text-[#B8B8B8] leading-relaxed">{item.process}</div>
          </div>

          {/* Result */}
          <div>
            <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">Project Result</div>
            <div className="text-[13px] text-[#B8B8B8] leading-relaxed">{item.result}</div>
          </div>

          {/* Log */}
          <div>
            <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-3">Project Log</div>
            <div className="space-y-0">
              {item.log.map((entry, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4A4A4A] flex-shrink-0 mt-1.5" />
                    {i < item.log.length - 1 && <div className="w-px flex-1 bg-[#3A3A3A] my-1" />}
                  </div>
                  <div className="pb-4 min-w-0">
                    <span className="text-[11px] text-[#8A8A8A] mr-3">{entry.date}</span>
                    <span className="text-[13px] text-[#D8D8D8]">{entry.action}</span>
                    {entry.file && (
                      <div className="text-[11px] text-[#6C7CFF] mt-0.5">{entry.file}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyProjectsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [historyDetail, setHistoryDetail] = useState<HistoryProject | null>(null);

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        activePage="my-projects"
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <div className="border-b border-[#3A3A3A] bg-[#1B1B1B] px-8 py-4 flex-shrink-0">
          <h1 className="text-[20px] font-semibold text-[#E8E8E8] tracking-tight">My Projects</h1>
          <p className="text-[13px] text-[#B8B8B8] mt-0.5">Track your current teamwork and review past project outcomes.</p>
        </div>

        <main className="flex-1 overflow-auto bg-[#1E1E1E] px-8 py-6">

          {/* Current Projects */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-[13px] font-semibold text-[#E8E8E8]">Current Projects</h2>
              <span className="text-[11px] text-[#8A8A8A] px-2 py-0.5 rounded-full bg-[#252526] border border-[#3A3A3A]">{PROJECTS.length} active</span>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-[1100px]">
              {PROJECTS.map(({ id, name, role, progress, status, accent, week, start, nextTask, nextDue, Icon }) => (
                <a
                  key={id}
                  href={`/project/${id}/tasks`}
                  className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] p-5 hover:bg-[#2F2F2F] hover:border-[#4A4A4A] transition-all duration-150 group flex flex-col"
                >
                  {/* Icon + dot + title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 mt-px"
                      style={{ backgroundColor: `${accent}18` }}
                    >
                      <Icon size={15} style={{ color: accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                        <h2 className="text-[14px] font-semibold text-[#E8E8E8] leading-snug group-hover:text-white transition-colors">
                          {name}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                      <div>
                        <div className="text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-0.5">Role</div>
                        <div className="text-[12px] text-[#D8D8D8]">{role}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-0.5">Start</div>
                        <div className="text-[12px] text-[#D8D8D8]">{start}</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider">{week}</div>
                        <span className="text-[12px] text-[#D8D8D8] tabular-nums">{progress}%</span>
                      </div>
                      <div className="h-[3px] bg-[#2F2F2F] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${progress}%`, backgroundColor: accent }}
                        />
                      </div>
                    </div>

                    <div className="border-t border-[#3A3A3A] pt-2.5">
                      <div className="text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1">Next Task</div>
                      <div className="text-[12px] text-[#D8D8D8] truncate leading-snug">{nextTask}</div>
                      <div className="text-[11px] text-[#D7BA7D] mt-0.5">Due {nextDue}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mt-4">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: status === "Near completion" ? "#4EC970" : "#6C7CFF" }}
                    />
                    <span className="text-[12px] text-[#B8B8B8]">{status}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Project History */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-[13px] font-semibold text-[#E8E8E8]">Project History</h2>
              <span className="text-[12px] text-[#8A8A8A]">Completed and past team projects</span>
            </div>

            <div className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] overflow-hidden max-w-[1100px]">
              <div
                className="grid px-5 py-2.5 border-b border-[#3A3A3A]"
                style={{ gridTemplateColumns: "2.5fr 1fr 1fr 1fr 0.8fr 0.6fr" }}
              >
                {["Project", "Role", "Start", "End", "Outcome", "Team"].map(h => (
                  <div key={h} className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">{h}</div>
                ))}
              </div>

              {HISTORY.map((item, idx) => (
                <div
                  key={item.id}
                  className={`grid px-5 py-3.5 border-b border-[#3A3A3A] last:border-b-0 hover:bg-[#2F2F2F] cursor-pointer transition-colors duration-100 items-center ${idx % 2 === 1 ? "bg-[#242424]" : ""}`}
                  style={{ gridTemplateColumns: "2.5fr 1fr 1fr 1fr 0.8fr 0.6fr" }}
                  onClick={() => setHistoryDetail(item)}
                >
                  <span className="text-[13px] text-[#E8E8E8] font-medium">{item.project}</span>
                  <span className="text-[12px] text-[#B8B8B8]">{item.role}</span>
                  <span className="text-[12px] text-[#8A8A8A]">{item.start}</span>
                  <span className="text-[12px] text-[#8A8A8A]">{item.end}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium w-fit ${OUTCOME_STYLES[item.outcome]}`}>
                    {item.outcome}
                  </span>
                  <div className="flex items-center gap-1">
                    {item.team.slice(0, 3).map(m => (
                      <SmallAvatar key={m.name} name={m.name} />
                    ))}
                    {item.teamCount > 3 && (
                      <span className="text-[10px] text-[#8A8A8A] ml-0.5">+{item.teamCount - 3}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {historyDetail && (
        <HistoryDetailPanel item={historyDetail} onClose={() => setHistoryDetail(null)} />
      )}

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
