import type { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  badgeCount?: number;
}

export default function IconButton({
  icon,
  badgeCount = 0,
}: IconButtonProps) {
  return (
    <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
      {icon}

      {badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
          {badgeCount}
        </span>
      )}
    </button>
  );
}