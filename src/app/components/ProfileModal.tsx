import { useEffect } from "react";
import { X } from "lucide-react";

export interface ProfileUser {
  name: string;
  role: string;
  intro?: string;
  skills?: string[];
  availability?: string;
  completed?: number;
  leftEarly?: number;
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: ProfileUser;
}

const PALETTE = ["#6C7CFF", "#9B7BFF", "#4EC970", "#D7BA7D", "#F16D6D"];
function avatarBg(name: string) { return PALETTE[name.charCodeAt(0) % PALETTE.length]; }
function initials(name: string) { return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase(); }

const DEFAULT_USER: ProfileUser = {
  name: "Sarah Chen",
  role: "UX Designer",
  intro: "Interested in product flows and accessibility. I enjoy working on complex user journeys.",
  skills: ["Figma", "Wireframing", "Research", "Prototyping"],
  availability: "4–6h/week",
  completed: 3,
  leftEarly: 0,
};

export default function ProfileModal({ isOpen, onClose, user = DEFAULT_USER }: ProfileModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const bg = avatarBg(user.name);
  const inits = initials(user.name);

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-[520px] bg-[#252526] border border-[#3A3A3A] rounded-[16px] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header band */}
        <div className="relative bg-[#2B2B2B] border-b border-[#3A3A3A] px-6 pt-6 pb-14">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-md text-[#8A8A8A] hover:text-[#E8E8E8] hover:bg-[#2F2F2F] transition-colors"
            title="Close"
          >
            <X size={14} />
          </button>
          <div
            className="absolute -bottom-8 left-6 w-16 h-16 rounded-full border-4 border-[#252526] flex items-center justify-center text-[18px] font-semibold text-white"
            style={{ backgroundColor: bg }}
          >
            {inits}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-12 pb-6">
          <div className="mb-5">
            <h2 className="text-[18px] font-semibold text-[#E8E8E8] mb-1">{user.name}</h2>
            <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#2F2F2F] border border-[#3A3A3A] text-[#B8B8B8]">
              {user.role}
            </span>
          </div>

          <div className="space-y-4">
            {user.intro && (
              <div>
                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Intro</div>
                <p className="text-[13px] text-[#B8B8B8] leading-relaxed">{user.intro}</p>
              </div>
            )}

            {user.skills && user.skills.length > 0 && (
              <div>
                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">Skills</div>
                <div className="flex flex-wrap gap-1.5">
                  {user.skills.map(skill => (
                    <span key={skill} className="text-[12px] px-2.5 py-0.5 rounded-full bg-[#2F2F2F] border border-[#3A3A3A] text-[#B8B8B8]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {user.availability && (
              <div>
                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Availability</div>
                <p className="text-[13px] text-[#B8B8B8]">{user.availability}</p>
              </div>
            )}

            <div className="border-t border-[#3A3A3A] pt-4">
              <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">Project History</div>
              <div className="flex gap-6">
                <div>
                  <div className="text-[20px] font-semibold text-[#E8E8E8]">{user.completed ?? 0}</div>
                  <div className="text-[11px] text-[#8A8A8A]">Completed</div>
                </div>
                <div>
                  <div className="text-[20px] font-semibold text-[#E8E8E8]">{user.leftEarly ?? 0}</div>
                  <div className="text-[11px] text-[#8A8A8A]">Left early</div>
                </div>
              </div>
            </div>
          </div>

          {/* Single primary action */}
          <div className="mt-6">
            <a
              href="/messaging"
              className="w-full h-9 flex items-center justify-center rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
