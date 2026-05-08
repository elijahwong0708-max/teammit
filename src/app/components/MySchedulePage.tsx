import { useState } from "react";
import { Pin } from "lucide-react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIME_BLOCKS = ["AM", "PM", "Evening"];

const TASK_INDICATORS: Record<string, Array<{ project: string; task: string; color: string }>> = {
  "1-Wed-Evening": [{ project: "Mobile Banking", task: "Create wireframes for transfer flow", color: "#6C7CFF" }],
  "1-Fri-Evening": [{ project: "E-commerce", task: "User research", color: "#9B7BFF" }],
  "2-Mon-PM": [{ project: "Mobile Banking", task: "Build prototype in Figma", color: "#6C7CFF" }],
};

const PROJECT_LEGEND = [
  { project: "Mobile Banking", color: "#6C7CFF" },
  { project: "E-commerce Checkout", color: "#9B7BFF" },
  { project: "Fitness Dashboard", color: "#4EC970" },
];

interface TooltipData {
  x: number;
  y: number;
  isBusy: boolean;
  tasks: Array<{ project: string; task: string; color: string }>;
}

export default function MySchedulePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [busyCells, setBusyCells] = useState<Set<string>>(new Set());
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const toggleBusy = (cellKey: string) => {
    setBusyCells(prev => {
      const next = new Set(prev);
      next.has(cellKey) ? next.delete(cellKey) : next.add(cellKey);
      return next;
    });
  };

  const handleMouseEnter = (e: React.MouseEvent, cellKey: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({
      x: rect.right + 8,
      y: rect.top,
      isBusy: busyCells.has(cellKey),
      tasks: TASK_INDICATORS[cellKey] ?? [],
    });
  };

  const renderWeek = (weekNum: number) => (
    <div key={weekNum} className="mb-8">
      <div className="flex items-center gap-3 mb-2.5">
        <span className="text-[12px] font-semibold text-[#B8B8B8] uppercase tracking-[0.04em]">Week {weekNum}</span>
        <div className="flex-1 h-px bg-[#303030]" />
      </div>

      <div className="bg-[#242424] border border-[#464646] rounded-[12px] overflow-hidden">
        <div className="grid grid-cols-8 border-b border-[#3A3A3A]">
          <div className="bg-[#262626] p-2" />
          {WEEK_DAYS.map(day => (
            <div key={day} className="bg-[#262626] border-l border-[#3A3A3A] p-2 text-center text-[11px] font-semibold text-[#A8A8A8] uppercase tracking-[0.04em]">
              {day}
            </div>
          ))}
        </div>

        {TIME_BLOCKS.map(block => (
          <div key={block} className="grid grid-cols-8 border-t border-[#3A3A3A]">
            <div className="bg-[#262626] p-2.5 flex items-center">
              <span className="text-[12px] text-[#A8A8A8] font-medium">{block}</span>
            </div>

            {WEEK_DAYS.map(day => {
              const cellKey = `${weekNum}-${day}-${block}`;
              const isBusy = busyCells.has(cellKey);
              const tasks = TASK_INDICATORS[cellKey] ?? [];

              return (
                <div
                  key={day}
                  className={`relative border-l border-[#3A3A3A] h-20 p-2 cursor-pointer transition-colors duration-100 ${
                    isBusy ? "bg-[#30313A] hover:bg-[#333440]" : "bg-[#202020] hover:bg-[#2B2B2B]"
                  }`}
                  onClick={() => toggleBusy(cellKey)}
                  onMouseEnter={e => handleMouseEnter(e, cellKey)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {isBusy && (
                    <div className="absolute right-2 top-2 h-1.5 w-5 rounded-full bg-[#8F3F3F]" />
                  )}

                  {tasks.length > 0 && (
                    <div className="relative z-10 flex gap-1.5 flex-wrap">
                      {tasks.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#252526] border border-[#464646]"
                          style={{ color: t.color }}
                          title={`${t.project}: ${t.task}`}
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
  );

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        activePage="my-schedule"
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <div className="border-b border-[#3A3A3A] bg-[#1B1B1B] px-8 py-4 flex-shrink-0">
          <h1 className="text-[20px] font-semibold text-[#E8E8E8] tracking-tight">My Schedule</h1>
          <p className="text-[13px] text-[#B8B8B8] mt-0.5">Click cells to mark yourself as busy. Task pins show scheduled deadlines across projects.</p>
        </div>

        <main className="flex-1 overflow-auto bg-[#1E1E1E] px-8 py-6 relative">
          {[1, 2, 3].map(w => renderWeek(w))}

          {/* Legend */}
          <div className="bg-[#252526] border border-[#464646] rounded-[10px] p-3.5 inline-block">
            <div className="text-[11px] font-semibold text-[#A8A8A8] uppercase tracking-[0.04em] mb-2.5">Legend</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-[4px] bg-[#30313A] border border-[#464646] relative">
                  <div className="absolute left-1 top-1 h-1 w-2.5 rounded-full bg-[#8F3F3F]" />
                </div>
                <span className="text-[12px] text-[#D0D0D0]">Busy (you)</span>
              </div>
              {PROJECT_LEGEND.map(p => (
                <div key={p.project} className="flex items-center gap-2.5">
                  <Pin size={13} strokeWidth={1.8} style={{ color: p.color }} />
                  <span className="text-[12px] text-[#D0D0D0]">{p.project}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 bg-[#2B2B2B] border border-[#3A3A3A] rounded-[10px] p-3 min-w-[180px] max-w-[260px] shadow-xl pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="mb-2">
            <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1">Availability</div>
            <span className="text-[12px] text-[#D8D8D8]">
              {tooltip.isBusy ? "You marked this as busy" : "You are available"}
            </span>
          </div>
          {tooltip.tasks.length > 0 && (
            <div className="border-t border-[#3A3A3A] pt-2">
              <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Tasks</div>
              {tooltip.tasks.map((t, i) => (
                <div key={i} className="mb-1">
                  <div className="text-[11px] font-medium" style={{ color: t.color }}>{t.project}</div>
                  <div className="text-[12px] text-[#D8D8D8] leading-snug">{t.task}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
