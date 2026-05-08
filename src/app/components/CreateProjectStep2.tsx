import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
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

const CATEGORIES: Record<string, string[]> = {
  "Organizer": ["Project Lead"],
  "Design": ["UX Designer", "UI Designer"],
  "Engineering": ["Frontend Developer", "Backend Developer", "Full-stack Developer"],
  "Research": ["Researcher", "Data Analyst"],
  "Content": ["Copywriter", "Marketing"],
};

export default function CreateProjectStep2() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleRole = (role: string) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(prev => prev.filter(r => r !== role));
    } else if (selectedRoles.length < 5) {
      setSelectedRoles(prev => [...prev, role]);
    }
  };

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <StepHeader step={3} total={7} />

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[680px]">
            <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5 tracking-tight">Select roles needed</h1>
            <p className="text-[13px] text-[#8A8A8A] mb-6">Choose up to 5 roles for your team.</p>

            {/* Selected roles */}
            <div className="bg-[#252526] border border-[#3A3A3A] rounded-[10px] px-4 py-3 mb-4 min-h-[52px]">
              <div className="text-[11px] font-medium text-[#8A8A8A] uppercase tracking-wider mb-2">Selected Roles</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedRoles.length === 0 ? (
                  <span className="text-[12px] text-[#8A8A8A]">No roles selected</span>
                ) : (
                  selectedRoles.map(role => (
                    <span
                      key={role}
                      className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2A3152] border border-[#6C7CFF]/40 text-[12px] text-[#6C7CFF]"
                    >
                      {role}
                      <button onClick={() => toggleRole(role)} className="hover:text-[#F16D6D] transition-colors">
                        <X size={10} />
                      </button>
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Category list */}
            <div className="space-y-1.5 mb-6">
              {Object.entries(CATEGORIES).map(([category, roles]) => (
                <div key={category} className="bg-[#252526] border border-[#3A3A3A] rounded-[10px] overflow-hidden">
                  <button
                    onClick={() => setExpanded(expanded === category ? null : category)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#2F2F2F] transition-colors"
                  >
                    <span className="text-[13px] font-medium text-[#E8E8E8]">{category}</span>
                    <ChevronDown
                      size={14}
                      className={`text-[#8A8A8A] transition-transform duration-150 ${expanded === category ? "rotate-180" : ""}`}
                    />
                  </button>

                  {expanded === category && (
                    <div className="border-t border-[#3A3A3A] px-4 py-2.5 space-y-1">
                      {roles.map(role => {
                        const isSelected = selectedRoles.includes(role);
                        return (
                          <button
                            key={role}
                            onClick={() => toggleRole(role)}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-left transition-all ${
                              isSelected
                                ? "bg-[#2A3152] border border-[#6C7CFF]/40"
                                : "hover:bg-[#2F2F2F] border border-transparent"
                            }`}
                          >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                              isSelected ? "bg-[#6C7CFF] border-[#6C7CFF]" : "border-[#3A3A3A]"
                            }`}>
                              {isSelected && (
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                  <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-[13px] ${isSelected ? "text-[#E8E8E8]" : "text-[#B8B8B8]"}`}>{role}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between border-t border-[#3A3A3A] pt-5">
              <a href="/create-project/1" className="h-9 px-5 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all flex items-center">Back</a>
              <a href="/create-project/3" className="h-9 px-6 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors flex items-center">Next</a>
            </div>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
