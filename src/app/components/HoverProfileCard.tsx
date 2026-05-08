const PALETTE = ["#6C7CFF", "#9B7BFF", "#4EC970", "#D7BA7D", "#F16D6D"];
function avatarBg(name: string) { return PALETTE[name.charCodeAt(0) % PALETTE.length]; }
function initials(name: string) { return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase(); }

interface HoverProfileCardProps {
  user: { name: string; role?: string; bio?: string };
  position: { x: number; y: number };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function HoverProfileCard({ user, position, onMouseEnter, onMouseLeave }: HoverProfileCardProps) {
  return (
    <div
      className="fixed z-50 bg-[#2B2B2B] border border-[#3A3A3A] rounded-[10px] p-3.5 w-56 shadow-xl animate-in fade-in-0 slide-in-from-left-1 duration-150"
      style={{ left: position.x + 12, top: position.y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-semibold text-white"
          style={{ backgroundColor: avatarBg(user.name) }}
        >
          {initials(user.name)}
        </div>
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
        onClick={() => { window.location.href = `/messaging?user=${encodeURIComponent(user.name)}`; }}
      >
        Message
      </button>
    </div>
  );
}
