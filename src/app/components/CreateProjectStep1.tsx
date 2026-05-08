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
        <div className="h-full bg-[#6C7CFF] rounded-full transition-all" style={{ width: `${(step / total) * 100}%` }} />
      </div>
    </div>
  );
}

const inputClass = "w-full h-10 bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors";
const textareaClass = "w-full bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 py-2.5 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors resize-none";

export default function CreateProjectStep1() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <StepHeader step={2} total={7} />

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[680px]">
            <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5 tracking-tight">Create your project</h1>
            <p className="text-[13px] text-[#8A8A8A] mb-8">Give your project a clear title and a brief description.</p>

            <form className="space-y-5">
              <div>
                <label className="block text-[12px] font-medium text-[#B8B8B8] mb-1.5">Project Title</label>
                <input
                  type="text"
                  placeholder="e.g. Mobile Banking Redesign"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#B8B8B8] mb-1.5">Project Overview</label>
                <p className="text-[11px] text-[#8A8A8A] mb-1.5">1–2 lines. Keep it short and general.</p>
                <textarea
                  rows={2}
                  placeholder="Short description of what this project is about"
                  className={textareaClass}
                  required
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#B8B8B8] mb-1.5">Creator Note</label>
                <p className="text-[11px] text-[#8A8A8A] mb-1.5">2–4 lines. Why you want to do this and who you'd like to work with.</p>
                <textarea
                  rows={4}
                  placeholder="Why you want to do this project and what kind of teammates you're looking for"
                  className={textareaClass}
                  required
                />
              </div>

              <div className="flex justify-between border-t border-[#3A3A3A] pt-5">
                <a
                  href="/create-project/0"
                  className="h-9 px-5 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all flex items-center"
                >
                  Back
                </a>
                <a
                  href="/create-project/2"
                  className="h-9 px-6 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors flex items-center"
                >
                  Next
                </a>
              </div>
            </form>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
