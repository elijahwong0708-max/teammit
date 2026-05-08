import { useState } from "react";
import { Users, UserPlus, X } from "lucide-react";
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
        <div
          className="h-full bg-[#6C7CFF] rounded-full transition-all duration-300"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function CreateProjectStep0() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<"recruit" | "private" | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [inviteEmails, setInviteEmails] = useState<string[]>([]);

  const addEmail = () => {
    if (emailInput.trim() && !inviteEmails.includes(emailInput.trim())) {
      setInviteEmails(prev => [...prev, emailInput.trim()]);
      setEmailInput("");
    }
  };

  const MODES = [
    {
      id: "recruit" as const,
      Icon: Users,
      title: "Recruit teammates",
      description: "Create a public project and let others apply to join.",
    },
    {
      id: "private" as const,
      Icon: UserPlus,
      title: "Start with my own team",
      description: "Invite people you already know and create a private team workspace.",
    },
  ];

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <StepHeader step={1} total={7} />

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[680px]">
            <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5 tracking-tight">How do you want to start?</h1>
            <p className="text-[13px] text-[#8A8A8A] mb-8">Choose how your team will be formed.</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {MODES.map(({ id, Icon, title, description }) => (
                <button
                  key={id}
                  onClick={() => setSelectedMode(id)}
                  className={`flex flex-col items-start gap-3 p-5 rounded-[12px] border text-left transition-all duration-150 ${
                    selectedMode === id
                      ? "border-[#6C7CFF] bg-[#2A3152]"
                      : "border-[#3A3A3A] bg-[#252526] hover:bg-[#2B2B2B] hover:border-[#4A4A4A]"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-[8px] flex items-center justify-center ${
                    selectedMode === id ? "bg-[#6C7CFF]/20" : "bg-[#2F2F2F]"
                  }`}>
                    <Icon size={16} className={selectedMode === id ? "text-[#6C7CFF]" : "text-[#8A8A8A]"} />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-[#E8E8E8] mb-1">{title}</div>
                    <div className="text-[12px] text-[#8A8A8A] leading-relaxed">{description}</div>
                  </div>
                </button>
              ))}
            </div>

            {selectedMode === "private" && (
              <div className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] p-5 mb-6">
                <h2 className="text-[13px] font-semibold text-[#E8E8E8] mb-4">Invite teammates</h2>

                <div className="flex gap-2 mb-3">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && addEmail()}
                    placeholder="Enter email address"
                    className="flex-1 h-9 bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors"
                  />
                  <button
                    onClick={addEmail}
                    className="h-9 px-4 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all"
                  >
                    Add
                  </button>
                </div>

                <button className="text-[12px] text-[#6C7CFF] hover:text-[#7D8AFF] transition-colors mb-3">
                  Copy invite link
                </button>

                {inviteEmails.length > 0 && (
                  <div className="space-y-1.5 mt-3 border-t border-[#3A3A3A] pt-3">
                    {inviteEmails.map(email => (
                      <div key={email} className="flex items-center justify-between bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 py-2">
                        <span className="text-[13px] text-[#B8B8B8]">{email}</span>
                        <button
                          onClick={() => setInviteEmails(prev => prev.filter(e => e !== email))}
                          className="text-[#8A8A8A] hover:text-[#F16D6D] transition-colors ml-2"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end border-t border-[#3A3A3A] pt-5">
              <a
                href={selectedMode ? "/create-project/1" : "#"}
                className={`h-9 px-6 rounded-[8px] text-[13px] font-medium flex items-center transition-all duration-150 ${
                  selectedMode
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
