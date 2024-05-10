interface SideLineProps {
  text: string
  fontSize?: number
  gap?: number
  side?: "left" | "right"
}

export default function SideLine({
  text, fontSize, gap, side,
}: SideLineProps) {
  const defaultFontSize = 24;
  const defaultGap = 16;
  const orientation = side === "right" ? "grid-cols-[1fr_auto]" : "grid-cols-[auto_1fr]";

  return (
    <span className={`grid ${orientation} gap-${gap || defaultGap} w-full`}>
      <h1 className={`text-${fontSize || defaultFontSize}`}>
        { text }
      </h1>
      <div className="row items-center">
        <div className="w-full" style={{ verticalAlign: "middle", border: "0.5px solid rgba(255, 255, 255, 0.75)" }} />
      </div>
    </span>
  );
}