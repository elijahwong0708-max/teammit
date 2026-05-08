import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

const TIME_OPTIONS = [
  { value: "2", label: "Up to 2h / week" },
  { value: "4", label: "Up to 4h / week" },
  { value: "6", label: "Up to 6h / week" },
  { value: "8", label: "Up to 8h / week" },
];

export default function CommitmentPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [role, setRole] = useState("");
  const [timeCapacity, setTimeCapacity] = useState("");
  const [motivation, setMotivation] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);

  const getMatchFeedback = () => {
    if (!timeCapacity) return null;
    const hours = parseInt(timeCapacity);
    if (hours >= 4 && hours <= 6) return { text: "Good match for this project", type: "good" };
    if (hours < 4) return { text: "Slightly below the expected effort", type: "warn" };
    return { text: "Above expected — that's fine", type: "good" };
  };

  const feedback = getMatchFeedback();
  const canSubmit = role && timeCapacity && motivation.trim().length > 10 && acknowledged;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      toast("Project joined");
      setTimeout(() => {
        window.location.href = "/project/1/tasks";
      }, 250);
    }
  };

  const inputClass = "w-full h-10 bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors";
  const selectClass = "w-full h-10 bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] outline-none focus:border-[#6C7CFF] transition-colors cursor-pointer";

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        activePage="explore"
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <div className="border-b border-[#3A3A3A] bg-[#1B1B1B] px-8 py-4 flex-shrink-0">
          <a href="/project/1" className="flex items-center gap-1.5 text-[13px] text-[#8A8A8A] hover:text-[#E8E8E8] transition-colors w-fit">
            <ArrowLeft size={13} />
            Back to Project
          </a>
        </div>

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[580px]">
            <div className="mb-8 text-center">
              <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5">Confirm Your Commitment</h1>
              <p className="text-[13px] text-[#8A8A8A]">Mobile Banking Redesign · 2 weeks</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role */}
              <div>
                <label className="block text-[12px] font-medium text-[#B8B8B8] mb-1.5">Role</label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  className={selectClass}
                  required
                >
                  <option value="">Select a role</option>
                  <option value="ux-designer">UX Designer</option>
                  <option value="developer">Frontend Developer</option>
                </select>
              </div>

              {/* Expected effort info */}
              <div className="bg-[#252526] border border-[#3A3A3A] rounded-[10px] px-4 py-3">
                <div className="text-[11px] font-medium text-[#8A8A8A] uppercase tracking-wider mb-1">Expected Effort</div>
                <div className="text-[13px] text-[#B8B8B8]">
                  {role ? (role === "ux-designer" ? "UX Designer" : "Frontend Developer") : "Selected role"}
                  {" → "}
                  <span className="text-[#E8E8E8]">Medium effort (4–6h/week)</span>
                </div>
              </div>

              {/* Time capacity */}
              <div>
                <label className="block text-[12px] font-medium text-[#B8B8B8] mb-2">How much time can you realistically commit per week?</label>
                <div className="space-y-2">
                  {TIME_OPTIONS.map(opt => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3 h-11 px-4 rounded-[8px] border cursor-pointer transition-all duration-150 ${
                        timeCapacity === opt.value
                          ? "border-[#6C7CFF] bg-[#2A3152]"
                          : "border-[#3A3A3A] bg-[#252526] hover:bg-[#2F2F2F]"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        timeCapacity === opt.value ? "border-[#6C7CFF]" : "border-[#3A3A3A]"
                      }`}>
                        {timeCapacity === opt.value && (
                          <div className="w-2 h-2 rounded-full bg-[#6C7CFF]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="time"
                        value={opt.value}
                        checked={timeCapacity === opt.value}
                        onChange={e => setTimeCapacity(e.target.value)}
                        className="hidden"
                      />
                      <span className="text-[13px] text-[#E8E8E8]">{opt.label}</span>
                    </label>
                  ))}
                </div>

                {feedback && (
                  <div className={`mt-2 flex items-center gap-1.5 text-[12px] ${
                    feedback.type === "good" ? "text-[#4EC970]" : "text-[#D7BA7D]"
                  }`}>
                    <CheckCircle2 size={12} />
                    {feedback.text}
                  </div>
                )}
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-[12px] font-medium text-[#B8B8B8] mb-1.5">Why I want to join</label>
                <textarea
                  value={motivation}
                  onChange={e => setMotivation(e.target.value)}
                  placeholder="Briefly explain why you're interested and what you can contribute"
                  rows={4}
                  className="w-full bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 py-2.5 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors resize-none"
                  required
                />
              </div>

              {/* Acknowledgement + submit */}
              <div className="border-t border-[#3A3A3A] pt-5 space-y-4">
                <label className="flex items-start gap-2.5 cursor-pointer group">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      acknowledged ? "bg-[#6C7CFF] border-[#6C7CFF]" : "border-[#3A3A3A] group-hover:border-[#6C7CFF]"
                    }`}
                    onClick={() => setAcknowledged(!acknowledged)}
                  >
                    {acknowledged && (
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span
                    className="text-[13px] text-[#B8B8B8] leading-relaxed"
                    onClick={() => setAcknowledged(!acknowledged)}
                  >
                    I understand the expected workload and commit to the project duration of 2 weeks.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full h-10 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  I commit to this project
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
