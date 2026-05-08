import { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

function StepHeader({ step, total }: { step: number; total: number }) {
  return (
    <div className="border-b border-[#3A3A3A] bg-[#1B1B1B] px-8 py-4 flex-shrink-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] text-[#8A8A8A]">Step {step} of {total}</span>
        <span className="text-[12px] text-[#8A8A8A]">{Math.round((step / total) * 100)}%</span>
      </div>
      <div className="h-[3px] bg-[#2F2F2F] rounded-full overflow-hidden">
        <div className="h-full bg-[#6C7CFF] rounded-full" style={{ width: `${(step / total) * 100}%` }} />
      </div>
    </div>
  );
}

const EFFORT_OPTIONS = [
  {
    level: "light",
    title: "Light effort",
    hours: "2–4h / week",
    description: "Small tasks, flexible pace. Good for exploratory or side projects.",
    accent: "#4EC970",
  },
  {
    level: "medium",
    title: "Medium effort",
    hours: "4–6h / week",
    description: "Consistent weekly contribution. The most common choice.",
    accent: "#6C7CFF",
  },
  {
    level: "high",
    title: "High effort",
    hours: "6–8h / week",
    description: "Core contributor, heavier tasks. Best for focused, ambitious projects.",
    accent: "#F16D6D",
  },
];

export default function CreateProjectStep4() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [effortLevel, setEffortLevel] = useState("");

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <StepHeader step={5} total={7} />

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[680px]">
            <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5 tracking-tight">Expected effort level</h1>
            <p className="text-[13px] text-[#8A8A8A] mb-8">This guides expectations for anyone joining your project.</p>

            <div className="space-y-3 mb-6">
              {EFFORT_OPTIONS.map(opt => (
                <button
                  key={opt.level}
                  onClick={() => setEffortLevel(opt.level)}
                  className={`w-full flex items-start gap-4 p-4 rounded-[12px] border text-left transition-all duration-150 ${
                    effortLevel === opt.level
                      ? "border-[#6C7CFF] bg-[#2A3152]"
                      : "border-[#3A3A3A] bg-[#252526] hover:bg-[#2B2B2B] hover:border-[#4A4A4A]"
                  }`}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: effortLevel === opt.level ? opt.accent : "#3A3A3A" }}
                  />
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[14px] font-semibold text-[#E8E8E8]">{opt.title}</span>
                      <span className="text-[12px] text-[#8A8A8A]">{opt.hours}</span>
                    </div>
                    <p className="text-[12px] text-[#8A8A8A] leading-relaxed">{opt.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="border-l-2 border-[#3A3A3A] pl-3 mb-8">
              <p className="text-[12px] text-[#8A8A8A] italic">
                This is an estimate to guide expectations, not a strict requirement.
              </p>
            </div>

            <div className="flex justify-between border-t border-[#3A3A3A] pt-5">
              <a href="/create-project/3" className="h-9 px-5 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all flex items-center">Back</a>
              <a
                href={effortLevel ? "/create-project/5" : "#"}
                className={`h-9 px-6 rounded-[8px] text-[13px] font-medium flex items-center transition-all ${
                  effortLevel
                    ? "bg-[#6C7CFF] text-white hover:bg-[#7D8AFF]"
                    : "bg-[#252526] text-[#8A8A8A] border border-[#3A3A3A] pointer-events-none"
                }`}
              >
                Next
              </a>
            </div>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
