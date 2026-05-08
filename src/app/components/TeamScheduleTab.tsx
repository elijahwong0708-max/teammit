import { useState } from "react";
import { Pin } from "lucide-react";
import ProfileModal, { type ProfileUser } from "./ProfileModal";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIME_BLOCKS = ["AM", "PM", "Evening"];
const PROJECT_DURATION = 2;

const TEAM_MEMBERS = [
  { name: "Sarah Chen", color: "#F16D6D", busyColor: "bg-[#F16D6D]" },
  { name: "Marcus Liu", color: "#6C7CFF", busyColor: "bg-[#6C7CFF]" },
  { name: "Anna Kim",   color: "#D7BA7D", busyColor: "bg-[#D7BA7D]" },
];

const MEMBER_PROFILES: Record<string, ProfileUser> = {
  "Sarah Chen": { name: "Sarah Chen", role: "UX Researcher", intro: "Focused on user research and usability testing.", skills: ["User Research", "Figma", "Survey Design"], availability: "4–6h/week", completed: 3, leftEarly: 0 },
  "Marcus Liu": { name: "Marcus Liu", role: "Developer",     intro: "Full-stack developer with React and TypeScript experience.", skills: ["React", "TypeScript", "Node.js"], availability: "6–8h/week", completed: 5, leftEarly: 1 },
  "Anna Kim":   { name: "Anna Kim",   role: "UX Designer",   intro: "Visual designer focused on accessibility and design systems.", skills: ["Figma", "Motion Design", "Accessibility"], availability: "2–4h/week", completed: 2, leftEarly: 0 },
};

const BUSY_DATA: Record<string, string[]> = {
  "1-Mon-AM": ["Sarah Chen"],
  "1-Mon-PM": ["Sarah Chen", "Marcus Liu"],
  "1-Wed-Evening": ["Anna Kim"],
  "2-Tue-AM": ["Marcus Liu"],
  "2-Thu-PM": ["Sarah Chen", "Anna Kim"],
};

const TASK_DATA: Record<string, Array<{ task: string; due: string; color: string }>> = {
  "1-Wed-Evening": [{ task: "Create wireframes for transfer flow", due: "Day 8, 11:59 PM", color: "#6C7CFF" }],
  "1-Fri-Evening": [{ task: "User research", due: "Day 6, 11:59 PM", color: "#9B7BFF" }],
  "2-Mon-PM": [{ task: "Build prototype", due: "Day 10, 11:59 PM", color: "#6C7CFF" }],
};

interface TooltipData {
  x: number;
  y: number;
  busy: string[];
  tasks: Array<{ task: string; due: string; color: string }>;
}

export default function TeamScheduleTab() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const openProfile = (name: string) => {
    const profile = MEMBER_PROFILES[name];
    if (profile) { setProfileUser(profile); setProfileOpen(true); }
  };

  const handleMouseEnter = (e: React.MouseEvent, cellKey: string) => {
    const busy = BUSY_DATA[cellKey] ?? [];
    const tasks = TASK_DATA[cellKey] ?? [];
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({ x: rect.right + 8, y: rect.top, busy, tasks });
  };

  const handleMouseLeave = () => setTooltip(null);

  const memberColorMap = Object.fromEntries(TEAM_MEMBERS.map(m => [m.name, m.color]));

  return (
    <div className="relative">
      {Array.from({ length: PROJECT_DURATION }, (_, i) => i + 1).map(weekNum => (
        <div key={weekNum} className="mb-8">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-[12px] font-semibold text-[#B8B8B8] uppercase tracking-[0.04em]">Week {weekNum}</span>
            <div className="flex-1 h-px bg-[#303030]" />
          </div>

          <div className="bg-[#242424] border border-[#464646] rounded-[12px] overflow-hidden">
            {/* Day headers */}
            <div className="grid grid-cols-8 border-b border-[#3A3A3A]">
              <div className="bg-[#262626] p-2" />
              {WEEK_DAYS.map(day => (
                <div key={day} className="bg-[#262626] border-l border-[#3A3A3A] p-2 text-center text-[11px] font-semibold text-[#A8A8A8] uppercase tracking-[0.04em]">
                  {day}
                </div>
              ))}
            </div>

            {/* Time block rows */}
            {TIME_BLOCKS.map(block => (
              <div key={block} className="grid grid-cols-8 border-t border-[#3A3A3A]">
                <div className="bg-[#262626] p-2.5 flex items-center">
                  <span className="text-[12px] text-[#A8A8A8] font-medium">{block}</span>
                </div>

                {WEEK_DAYS.map(day => {
                  const cellKey = `${weekNum}-${day}-${block}`;
                  const busyMembers = BUSY_DATA[cellKey] ?? [];
                  const tasks = TASK_DATA[cellKey] ?? [];
                  const hasPin = tasks.length > 0;

                  return (
                    <div
                      key={day}
                      className="relative border-l border-[#3A3A3A] bg-[#202020] h-20 p-2 hover:bg-[#2B2B2B] transition-colors duration-100 cursor-default"
                      onMouseEnter={e => handleMouseEnter(e, cellKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Busy member bars */}
                      {busyMembers.length > 0 && (
                        <div className="absolute right-2 top-2 space-y-0.5">
                          {busyMembers.map(member => (
                            <div
                              key={member}
                              className="h-1.5 w-5 rounded-full opacity-85"
                              style={{ backgroundColor: memberColorMap[member] ?? "#8A8A8A" }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Task pin */}
                      {hasPin && (
                        <div className="relative z-10 flex gap-1.5 flex-wrap">
                          {tasks.map((task, i) => (
                            <span
                              key={i}
                              className="inline-flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#252526] border border-[#464646]"
                              style={{ color: task.color }}
                              title={`${task.task} · Due ${task.due}`}
                            >
                              <Pin size={13} strokeWidth={1.8} />
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="bg-[#252526] border border-[#464646] rounded-[10px] p-3.5 inline-block mt-2">
        <div className="text-[11px] font-semibold text-[#A8A8A8] uppercase tracking-[0.04em] mb-2.5">Member Busy Time</div>
        <div className="space-y-2">
          {TEAM_MEMBERS.map(member => (
            <div key={member.name} className="flex items-center gap-2.5">
              <div className="w-5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: member.color }} />
              <button
                className="text-[12px] text-[#D0D0D0] hover:text-white transition-colors"
                onClick={() => openProfile(member.name)}
                title="View profile"
              >
                {member.name}
              </button>
            </div>
          ))}
          <div className="flex items-center gap-2.5 pt-1 border-t border-[#3A3A3A]">
            <Pin size={13} strokeWidth={1.8} className="text-[#6C7CFF]" />
            <span className="text-[12px] text-[#D0D0D0]">Task deadline in this slot</span>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 bg-[#2B2B2B] border border-[#3A3A3A] rounded-[10px] p-3 min-w-[200px] max-w-[280px] shadow-xl pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="mb-2">
            <div className="text-[11px] font-medium text-[#8A8A8A] uppercase tracking-wider mb-1.5">Busy</div>
            {tooltip.busy.length > 0 ? (
              tooltip.busy.map(m => (
                <div key={m} className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: memberColorMap[m] ?? "#8A8A8A" }} />
                  <span className="text-[12px] text-[#B8B8B8]">{m}</span>
                </div>
              ))
            ) : (
              <span className="text-[12px] text-[#8A8A8A]">None</span>
            )}
          </div>
          <div className="border-t border-[#3A3A3A] pt-2">
            <div className="text-[11px] font-medium text-[#8A8A8A] uppercase tracking-wider mb-1.5">Tasks</div>
            {tooltip.tasks.length > 0 ? (
              tooltip.tasks.map((t, i) => (
                <div key={i} className="mb-1">
                  <div className="text-[12px] text-[#B8B8B8] leading-snug">{t.task}</div>
                  <div className="text-[11px] text-[#8A8A8A]">Due {t.due}</div>
                </div>
              ))
            ) : (
              <span className="text-[12px] text-[#8A8A8A]">None</span>
            )}
          </div>
        </div>
      )}

      <ProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        user={profileUser ?? undefined}
      />
    </div>
  );
}
