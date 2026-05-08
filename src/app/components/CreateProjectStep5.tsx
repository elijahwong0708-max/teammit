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

const DURATION_INFO: Record<number, { label: string; helper: string }> = {
  1: { label: "1 Week", helper: "Quick, very small scope. Good for tight experiments." },
  2: { label: "2 Weeks", helper: "Recommended — focused and manageable for most projects." },
  3: { label: "3 Weeks", helper: "More room for iteration and review." },
};

export default function CreateProjectStep5() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [duration, setDuration] = useState(2);

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <StepHeader step={6} total={7} />

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[680px]">
            <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5 tracking-tight">Project duration</h1>
            <p className="text-[13px] text-[#8A8A8A] mb-8">How long will this project run?</p>

            {/* Current value */}
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 rounded-[10px] bg-[#2A3152] border border-[#6C7CFF]/40">
                <span className="text-[18px] font-semibold text-[#6C7CFF]">{DURATION_INFO[duration].label}</span>
              </div>
              <p className="text-[13px] text-[#8A8A8A]">{DURATION_INFO[duration].helper}</p>
            </div>

            {/* Slider */}
            <div className="mb-6">
              <input
                type="range"
                min={1}
                max={3}
                step={1}
                value={duration}
                onChange={e => setDuration(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                {[1, 2, 3].map(n => (
                  <button
                    key={n}
                    onClick={() => setDuration(n)}
                    className={`text-[12px] font-medium transition-colors ${
                      duration === n ? "text-[#6C7CFF]" : "text-[#8A8A8A]"
                    }`}
                  >
                    {DURATION_INFO[n].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual bar */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map(n => (
                <div
                  key={n}
                  className={`flex-1 h-2 rounded-full transition-all duration-200 ${
                    n <= duration ? "bg-[#6C7CFF]" : "bg-[#2F2F2F]"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between border-t border-[#3A3A3A] pt-5">
              <a href="/create-project/4" className="h-9 px-5 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all flex items-center">Back</a>
              <a href="/create-project/6" className="h-9 px-6 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors flex items-center">Next</a>
            </div>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
