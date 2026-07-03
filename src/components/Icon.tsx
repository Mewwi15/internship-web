import { ICONS } from "@/lib/icons";

export default function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const svg = ICONS[name];
  if (!svg) return null;
  return (
    <span
      className={`ic ${className}`.trim()}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
