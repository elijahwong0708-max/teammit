import { useState } from "react";
import { Frame, Search, GitBranch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProfileModal, { type ProfileUser } from "./ProfileModal";
import TaskDetailPanel from "./TaskDetailPanel";

const PALETTE = ["#6C7CFF", "#9B7BFF", "#4EC970", "#D7BA7D", "#F16D6D"];

function avatarBg(name: string) {
  return PALETTE[name.charCodeAt(0) % PALETTE.length];
}

function initials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-7 h-7 text-[10px]", md: "w-8 h-8 text-[11px]", lg: "w-10 h-10 text-[13px]" };
  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`}
      style={{ backgroundColor: avatarBg(name) }}
    >
      {initials(name)}
    </div>
  );
}

const STATUS_STYLES: Record<string, string> = {
  "Submitted":        "bg-[#1E3A28] text-[#4EC970] border border-[#2F6240]",
  "Not submitted":    "bg-[#3A3020] text-[#D7BA7D] border border-[#5A4B2B]",
  "Task overdue":     "bg-[#3A2222] text-[#F16D6D] border border-[#6B3535]",
  "No task assigned": "bg-[#252526] text-[#8A8A8A] border border-[#3A3A3A]",
};

function StatusPill({ status }: { status: string }) {
  const cls = STATUS_STYLES[status] ?? STATUS_STYLES["No task assigned"];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${cls}`}>
      {status}
    </span>
  );
}

function TaskIcon({ Icon, color, size = 14 }: { Icon: LucideIcon; color: string; size?: number }) {
  return (
    <div
      className="w-6 h-6 rounded-[6px] flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: `${color}18` }}
    >
      <Icon size={size} style={{ color }} />
    </div>
  );
}

function taskTypeIcon(title: string): { Icon: LucideIcon; color: string } {
  const t = title.toLowerCase();
  if (t.includes("wireframe") || t.includes("design")) return { Icon: Frame,     color: "#9B7BFF" };
  if (t.includes("research"))                            return { Icon: Search,   color: "#CE9178" };
  if (t.includes("prototype") || t.includes("figma"))   return { Icon: Frame,    color: "#6C7CFF" };
  if (t.includes("flow"))                                return { Icon: GitBranch, color: "#6C7CFF" };
  return { Icon: Frame, color: "#9B7BFF" };
}

const CURRENT_USER = {
  name: "Elijah Wang",
  role: "UX Designer",
  task: "Create wireframes for transfer flow",
  due: "Day 8, 11:59 PM",
  status: "Not submitted",
};

const OTHER_MEMBERS = [
  { name: "Sarah Chen", role: "UX Researcher", task: "User research",    due: "Day 6, 11:59 PM", status: "Submitted"        },
  { name: "Marcus Liu", role: "Developer",      task: "User flow",        due: "Day 5, 11:59 PM", status: "Task overdue"     },
  { name: "Anna Kim",   role: "—",              task: "No task assigned", due: "",                status: "No task assigned" },
];

const MEMBER_PROFILES: Record<string, ProfileUser> = {
  "Sarah Chen": {
    name: "Sarah Chen",
    role: "UX Researcher",
    intro: "Focused on user research and usability testing. Passionate about uncovering user needs in complex domains.",
    skills: ["User Research", "Usability Testing", "Figma", "Survey Design"],
    availability: "4–6h/week",
    completed: 3,
    leftEarly: 0,
  },
  "Marcus Liu": {
    name: "Marcus Liu",
    role: "Developer",
    intro: "Full-stack developer comfortable with React, TypeScript, and mobile app prototyping.",
    skills: ["React", "TypeScript", "Node.js", "Mobile Dev"],
    availability: "6–8h/week",
    completed: 5,
    leftEarly: 1,
  },
  "Anna Kim": {
    name: "Anna Kim",
    role: "UX Designer",
    intro: "Visual and interaction designer with a strong focus on accessibility and design systems.",
    skills: ["Figma", "Motion Design", "Design Systems", "Accessibility"],
    availability: "2–4h/week",
    completed: 2,
    leftEarly: 0,
  },
};

const PROJECT_STATS = [
  { label: "Members joined",     value: "4 / 5",  accent: "#6C7CFF" },
  { label: "Tasks completed",    value: "2 / 4",  accent: "#4EC970" },
  { label: "Submissions pending", value: "2",     accent: "#D7BA7D" },
  { label: "Days remaining",     value: "8 days", accent: "#B8B8B8" },
];

export default function OverviewTab() {
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [taskDetailOpen, setTaskDetailOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const openProfile = (memberName: string) => {
    const profile = MEMBER_PROFILES[memberName];
    if (profile) {
      setProfileUser(profile);
      setProfileOpen(true);
    }
  };

  const openTask = (taskTitle: string) => {
    if (taskTitle === "No task assigned") return;
    const ti = taskTypeIcon(taskTitle);
    setSelectedTask({
      title: taskTitle,
      description: "Review this task and track its status within the project.",
      status: "current" as const,
      requiresUpload: false,
      comments: [],
    });
    setTaskDetailOpen(true);
  };

  const focusTaskIcon = taskTypeIcon(CURRENT_USER.task);

  return (
    <div className="w-full max-w-[1100px] space-y-6">

      {/* My Focus */}
      <div>
        <h2 className="text-[11px] font-semibold text-[#A8A8A8] uppercase tracking-[0.04em] mb-3">My Focus</h2>
        <div className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] px-6 py-5 flex items-center">
          {/* Identity — fixed width */}
          <div className="flex items-center gap-3 w-[230px] flex-shrink-0">
            <Avatar name={CURRENT_USER.name} size="md" />
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[13px] font-semibold text-[#E8E8E8]">{CURRENT_USER.name}</span>
                <span className="text-[10px] text-[#8A8A8A] border border-[#3A3A3A] px-1.5 py-px rounded-full leading-none">You</span>
              </div>
              <div className="text-[12px] text-[#8A8A8A]">{CURRENT_USER.role}</div>
            </div>
          </div>

          <div className="w-px bg-[#3A3A3A] self-stretch flex-shrink-0 mx-6" />

          {/* Task — grows to fill middle */}
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">Current Task</div>
            <div className="flex items-center gap-2">
              <TaskIcon Icon={focusTaskIcon.Icon} color={focusTaskIcon.color} />
              <span className="text-[13px] text-[#E8E8E8]">{CURRENT_USER.task}</span>
            </div>
          </div>

          <div className="w-px bg-[#3A3A3A] self-stretch flex-shrink-0 mx-6" />

          {/* Due + Status + CTA — fixed width */}
          <div className="w-[200px] flex-shrink-0 flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-[#8A8A8A]">Due</span>
              <span className="text-[12px] text-[#D8D8D8]">{CURRENT_USER.due}</span>
            </div>
            <StatusPill status={CURRENT_USER.status} />
            <button className="h-7 px-3 rounded-[7px] bg-[#2B2B2B] border border-[#3A3A3A] text-[12px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all duration-150 mt-0.5">
              Go to Task →
            </button>
          </div>
        </div>
      </div>

      {/* Team Snapshot */}
      <div>
        <h2 className="text-[11px] font-semibold text-[#A8A8A8] uppercase tracking-[0.04em] mb-3">Team Snapshot</h2>
        <div className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] overflow-hidden">
          <div className="grid px-5 py-2.5 border-b border-[#3A3A3A]" style={{ gridTemplateColumns: "minmax(200px, 1fr) 150px 260px 155px 145px" }}>
            {["Member", "Role", "Task", "Due", "Status"].map(h => (
              <div key={h} className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">{h}</div>
            ))}
          </div>

          {OTHER_MEMBERS.map((member, idx) => {
            const ti = member.task !== "No task assigned" ? taskTypeIcon(member.task) : null;
            return (
              <div
                key={idx}
                className="grid px-5 py-3.5 border-b border-[#3A3A3A] last:border-b-0 hover:bg-[#2F2F2F] transition-colors duration-100 items-center"
                style={{ gridTemplateColumns: "minmax(200px, 1fr) 150px 260px 155px 145px" }}
              >
                {/* Avatar + name — clickable */}
                <button
                  className="flex items-center gap-2.5 text-left hover:opacity-80 transition-opacity w-fit"
                  onClick={() => openProfile(member.name)}
                >
                  <Avatar name={member.name} size="sm" />
                  <span className="text-[13px] text-[#E8E8E8] font-medium">{member.name}</span>
                </button>

                <div className="text-[12px] text-[#8A8A8A]">{member.role}</div>

                {/* Task — clickable */}
                <button
                  className={`flex items-center gap-2 text-left min-w-0 pr-4 ${member.task !== "No task assigned" ? "hover:opacity-80 transition-opacity" : "cursor-default"}`}
                  onClick={() => openTask(member.task)}
                  disabled={member.task === "No task assigned"}
                >
                  {ti && <TaskIcon Icon={ti.Icon} color={ti.color} size={12} />}
                  <span className="text-[13px] text-[#D8D8D8] truncate">{member.task || "—"}</span>
                </button>

                <div className="text-[12px] text-[#8A8A8A]">{member.due || "—"}</div>
                <div><StatusPill status={member.status} /></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Summary */}
      <div>
        <h2 className="text-[11px] font-semibold text-[#A8A8A8] uppercase tracking-[0.04em] mb-3">Project Summary</h2>
        <div className="grid grid-cols-4 gap-3">
          {PROJECT_STATS.map(stat => (
            <div
              key={stat.label}
              className="bg-[#252526] border border-[#3A3A3A] rounded-[10px] px-4 py-3"
            >
              <div className="text-[20px] font-semibold tabular-nums mb-0.5" style={{ color: stat.accent }}>
                {stat.value}
              </div>
              <div className="text-[11px] text-[#8A8A8A] leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        user={profileUser ?? undefined}
      />

      <TaskDetailPanel
        isOpen={taskDetailOpen}
        onClose={() => setTaskDetailOpen(false)}
        task={selectedTask}
      />
    </div>
  );
}
