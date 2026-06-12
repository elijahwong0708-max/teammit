const INITIAL_PALETTE = ["#6C7CFF", "#9B7BFF", "#4EC970", "#D7BA7D", "#F16D6D", "#CE9178"];

const PHOTO_AVATARS: Record<string, string> = {
  "Sarah Chen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
  "Marcus Liu": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
  "David Lin": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  "Olivia Park": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80",
};

const ONLINE_USERS = new Set(["Sarah Chen", "Marcus Liu", "Olivia Park", "Jason Miller"]);

const SIZE_CLASSES = {
  xs: "w-5 h-5 text-[9px]",
  sm: "w-6 h-6 text-[10px]",
  list: "w-7 h-7 text-[10px]",
  md: "w-8 h-8 text-[11px]",
  lg: "w-9 h-9 text-[12px]",
  xl: "w-16 h-16 text-[18px]",
} as const;

const PRESENCE_SIZE_CLASSES: Record<AvatarSize, string> = {
  xs: "w-1.5 h-1.5 ring-1",
  sm: "w-2 h-2 ring-2",
  list: "w-2 h-2 ring-2",
  md: "w-2.5 h-2.5 ring-2",
  lg: "w-2.5 h-2.5 ring-2",
  xl: "w-3 h-3 ring-2",
};

export type AvatarSize = keyof typeof SIZE_CLASSES;

export function avatarBg(name: string) {
  return INITIAL_PALETTE[name.charCodeAt(0) % INITIAL_PALETTE.length];
}

export function initials(name: string) {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function avatarPhoto(name: string) {
  return PHOTO_AVATARS[name];
}

export function isUserOnline(name: string) {
  return ONLINE_USERS.has(name);
}

interface UserAvatarProps {
  name: string;
  size?: AvatarSize;
  className?: string;
  interactive?: boolean;
  isOnline?: boolean;
  showPresence?: boolean;
  presenceRingClassName?: string;
}

export function UserAvatar({
  name,
  size = "md",
  className = "",
  interactive = false,
  isOnline,
  showPresence = true,
  presenceRingClassName = "ring-[#252526]",
}: UserAvatarProps) {
  const photo = avatarPhoto(name);
  const online = isOnline ?? isUserOnline(name);
  const positionClass = className.includes("absolute") ? "" : "relative";
  const avatarClasses = `absolute inset-0 rounded-full overflow-hidden flex items-center justify-center font-semibold text-white leading-none transition-shadow ${
    interactive ? "hover:ring-2 hover:ring-[#6C7CFF]/40" : ""
  }`;

  return (
    <span
      className={`${positionClass} inline-flex flex-shrink-0 ${SIZE_CLASSES[size]} ${className}`}
      title={online && showPresence ? "Active now" : undefined}
      aria-label={`${name}${online && showPresence ? ", active now" : ""}`}
    >
      <span className={avatarClasses} style={photo ? undefined : { backgroundColor: avatarBg(name) }}>
        {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          initials(name)
        )}
      </span>
      {online && showPresence && (
        <span
          className={`absolute bottom-0 right-0 rounded-full bg-[#5EC27D] ${PRESENCE_SIZE_CLASSES[size]} ${presenceRingClassName}`}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
