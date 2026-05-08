import { useState } from "react";
import { Users } from "lucide-react";
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

export default function CreateProjectStep3() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [teamSize, setTeamSize] = useState(3);

  const sizeLabels: Record<number, string> = {
    2: "Small team, fast and focused",
    3: "Balanced — most project types",
    4: "Larger scope with more specialization",
    5: "Full team — higher coordination needed",
  };

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <StepHeader step={4} total={7} />

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[680px]">
            <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5 tracking-tight">Choose team size</h1>
            <p className="text-[13px] text-[#8A8A8A] mb-8">How many people do you want on this project?</p>

            {/* Current value display */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-[10px] bg-[#2A3152] border border-[#6C7CFF]/40 flex items-center justify-center">
                <span className="text-[18px] font-semibold text-[#6C7CFF]">{teamSize}</span>
              </div>
              <div>
                <div className="text-[14px] font-medium text-[#E8E8E8]">{teamSize} people</div>
                <div className="text-[12px] text-[#8A8A8A]">{sizeLabels[teamSize]}</div>
              </div>
            </div>

            {/* Slider */}
            <div className="mb-6">
              <input
                type="range"
                min={2}
                max={5}
                step={1}
                value={teamSize}
                onChange={e => setTeamSize(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                {[2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    onClick={() => setTeamSize(n)}
                    className={`text-[11px] font-medium transition-colors ${
                      teamSize === n ? "text-[#6C7CFF]" : "text-[#8A8A8A]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual slots */}
            <div className="flex gap-2 mb-8">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-10 rounded-[8px] border flex items-center justify-center transition-all ${
                    i < teamSize
                      ? "border-[#6C7CFF]/40 bg-[#2A3152]"
                      : "border-[#3A3A3A] bg-[#252526]"
                  }`}
                >
                  <Users size={13} className={i < teamSize ? "text-[#6C7CFF]" : "text-[#3A3A3A]"} />
                </div>
              ))}
            </div>

            <div className="flex justify-between border-t border-[#3A3A3A] pt-5">
              <a href="/create-project/2" className="h-9 px-5 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all flex items-center">Back</a>
              <a href="/create-project/4" className="h-9 px-6 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors flex items-center">Next</a>
            </div>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
