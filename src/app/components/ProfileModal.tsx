import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { UserAvatar } from "./UserAvatar";

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

const CURRENT_USER_NAME = "Elijah Wang";

const DEFAULT_USER: ProfileUser = {
  name: CURRENT_USER_NAME,
  role: "UX Designer",
  intro: "Interested in UX, product flows, and collaborative design projects.",
  skills: ["Figma", "Wireframing", "Research", "Prototyping"],
  availability: "4–6h/week",
  completed: 3,
  leftEarly: 0,
};

export default function ProfileModal({ isOpen, onClose, user = DEFAULT_USER }: ProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<ProfileUser>(user);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setIsEditing(false);
    setDraft(user);
  }, [isOpen, user]);

  if (!isOpen) return null;

  const isSelf = user.name === CURRENT_USER_NAME;
  const displayUser = isSelf && isEditing ? draft : user;
  const firstName = displayUser.name.split(" ")[0];

  const updateDraft = (field: keyof ProfileUser, value: string) => {
    setDraft(prev => ({
      ...prev,
      [field]: field === "skills" ? value.split(",").map(skill => skill.trim()).filter(Boolean) : value,
    }));
  };

  const handleMessage = () => {
    onClose();
    window.location.href = `/messaging?user=${encodeURIComponent(displayUser.name)}`;
  };

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
          <UserAvatar name={displayUser.name} size="xl" className="absolute -bottom-8 left-6 border-4 border-[#252526]" />
        </div>

        {/* Content */}
        <div className="px-6 pt-12 pb-6">
          <div className="mb-5">
	            <h2 className="text-[18px] font-semibold text-[#E8E8E8] mb-1">{displayUser.name}</h2>
	            <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#2F2F2F] border border-[#3A3A3A] text-[#B8B8B8]">
	              {displayUser.role}
	            </span>
	          </div>

	          {isSelf && isEditing ? (
	            <div className="space-y-3">
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Name</div>
	                <input
	                  value={draft.name}
	                  onChange={e => updateDraft("name", e.target.value)}
	                  className="w-full h-9 bg-[#202020] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] outline-none focus:border-[#6C7CFF] transition-colors"
	                />
	              </div>
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Role</div>
	                <input
	                  value={draft.role}
	                  onChange={e => updateDraft("role", e.target.value)}
	                  className="w-full h-9 bg-[#202020] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] outline-none focus:border-[#6C7CFF] transition-colors"
	                />
	              </div>
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Intro</div>
	                <textarea
	                  value={draft.intro ?? ""}
	                  onChange={e => updateDraft("intro", e.target.value)}
	                  rows={3}
	                  className="w-full bg-[#202020] border border-[#3A3A3A] rounded-[8px] px-3 py-2 text-[13px] text-[#E8E8E8] outline-none focus:border-[#6C7CFF] transition-colors resize-none"
	                />
	              </div>
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Skills</div>
	                <input
	                  value={(draft.skills ?? []).join(", ")}
	                  onChange={e => updateDraft("skills", e.target.value)}
	                  className="w-full h-9 bg-[#202020] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] outline-none focus:border-[#6C7CFF] transition-colors"
	                />
	              </div>
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Availability</div>
	                <input
	                  value={draft.availability ?? ""}
	                  onChange={e => updateDraft("availability", e.target.value)}
	                  className="w-full h-9 bg-[#202020] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] outline-none focus:border-[#6C7CFF] transition-colors"
	                />
	              </div>
	            </div>
	          ) : (
	          <div className="space-y-4">
	            {displayUser.intro && (
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Intro</div>
	                <p className="text-[13px] text-[#B8B8B8] leading-relaxed">{displayUser.intro}</p>
	              </div>
	            )}

	            {displayUser.skills && displayUser.skills.length > 0 && (
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">Skills</div>
	                <div className="flex flex-wrap gap-1.5">
	                  {displayUser.skills.map(skill => (
	                    <span key={skill} className="text-[12px] px-2.5 py-0.5 rounded-full bg-[#2F2F2F] border border-[#3A3A3A] text-[#B8B8B8]">
	                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

	            {displayUser.availability && (
	              <div>
	                <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-1.5">Availability</div>
	                <p className="text-[13px] text-[#B8B8B8]">{displayUser.availability}</p>
	              </div>
	            )}

            <div className="border-t border-[#3A3A3A] pt-4">
              <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">Project History</div>
              <div className="flex gap-6">
                <div>
	                  <div className="text-[20px] font-semibold text-[#E8E8E8]">{displayUser.completed ?? 0}</div>
                  <div className="text-[11px] text-[#8A8A8A]">Completed</div>
                </div>
                <div>
	                  <div className="text-[20px] font-semibold text-[#E8E8E8]">{displayUser.leftEarly ?? 0}</div>
                  <div className="text-[11px] text-[#8A8A8A]">Left early</div>
                </div>
              </div>
            </div>
	          </div>
	          )}

	          {/* Single primary action */}
	          <div className="mt-6 flex gap-2">
	            {isSelf ? (
	              isEditing ? (
	                <>
	                  <button
	                    onClick={() => setIsEditing(false)}
	                    className="flex-1 h-9 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all"
	                  >
	                    Cancel
	                  </button>
	                  <button
	                    onClick={() => setIsEditing(false)}
	                    className="flex-1 h-9 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors"
	                  >
	                    Save Changes
	                  </button>
	                </>
	              ) : (
	                <button
	                  onClick={() => setIsEditing(true)}
	                  className="w-full h-9 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors"
	                >
	                  Edit Profile
	                </button>
	              )
	            ) : (
	              <button
	                onClick={handleMessage}
	                className="w-full h-9 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors"
	              >
	                Message {firstName}
	              </button>
	            )}
	          </div>
        </div>
      </div>
    </div>
  );
}
