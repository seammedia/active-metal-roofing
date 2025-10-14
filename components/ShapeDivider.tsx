interface ShapeDividerProps {
  position?: 'top' | 'bottom';
  color?: string;
  height?: number;
  flip?: boolean;
}

export default function ShapeDivider({
  position = 'bottom',
  color = '#ffffff',
  height = 90,
  flip = false
}: ShapeDividerProps) {
  const isBottom = position === 'bottom';
  const transform = flip ? 'scaleX(-1)' : undefined;

  return (
    <div
      className={`absolute ${isBottom ? 'bottom-0' : 'top-0'} left-0 w-full overflow-hidden leading-none z-20`}
      style={{ height: `${height}px` }}
    >
      <svg
        className="relative block w-full"
        style={{ height: `${height}px`, transform }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d={isBottom
            ? "M0,0 C150,80 350,80 600,60 C850,40 1050,40 1200,80 L1200,120 L0,120 Z"
            : "M0,120 C150,40 350,40 600,60 C850,80 1050,80 1200,40 L1200,0 L0,0 Z"
          }
          fill={color}
        />
      </svg>
    </div>
  );
}
