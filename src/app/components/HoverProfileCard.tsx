import { UserAvatar } from "./UserAvatar";

const CURRENT_USER_NAME = "Elijah Wang";

interface HoverProfileCardProps {
  user: { name: string; role?: string; bio?: string };
  position: { x: number; y: number };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function HoverProfileCard({ user, position, onMouseEnter, onMouseLeave }: HoverProfileCardProps) {
  const isSelf = user.name === CURRENT_USER_NAME;

  return (
    <div
      className="fixed z-50 bg-[#2B2B2B] border border-[#3A3A3A] rounded-[10px] p-3.5 w-56 shadow-xl animate-in fade-in-0 slide-in-from-left-1 duration-150"
      style={{ left: position.x + 12, top: position.y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <UserAvatar name={user.name} size="md" interactive />
        <div>
          <div className="text-[13px] font-semibold text-[#E8E8E8]">{user.name}</div>
          {user.role && <div className="text-[11px] text-[#8A8A8A]">{user.role}</div>}
        </div>
      </div>
      {user.bio && (
        <p className="text-[12px] text-[#B8B8B8] leading-relaxed border-t border-[#3A3A3A] pt-2 mt-1">
          {user.bio}
        </p>
      )}
      <button
        className="mt-3 h-7 px-3 rounded-[7px] border border-[#3A3A3A] bg-[#252526] text-[12px] text-[#D8D8D8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all"
        onClick={() => {
          if (!isSelf) window.location.href = `/messaging?user=${encodeURIComponent(user.name)}`;
        }}
      >
        {isSelf ? "Edit Profile" : "Message"}
      </button>
    </div>
  );
}
