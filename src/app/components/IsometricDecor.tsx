interface IsometricDecorProps {
  className?: string;
  opacity?: number;
}

export function IsometricDecor({ className = '', opacity = 1 }: IsometricDecorProps) {
  return (
    <svg
      viewBox="0 0 240 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Board 1 — bottom */}
      <path d="M24,162 L156,90 L216,126 L84,198 Z" fill="currentColor" fillOpacity="0.25" />
      {/* Board 1 left face */}
      <path d="M24,162 L24,174 L84,210 L84,198 Z" fill="currentColor" fillOpacity="0.14" />
      {/* Board 1 right face */}
      <path d="M216,126 L216,138 L84,210 L84,198 Z" fill="currentColor" fillOpacity="0.18" />

      {/* Board 2 — middle */}
      <path d="M24,120 L156,48 L216,84 L84,156 Z" fill="currentColor" fillOpacity="0.45" />
      {/* Board 2 left face */}
      <path d="M24,120 L24,132 L84,168 L84,156 Z" fill="currentColor" fillOpacity="0.28" />
      {/* Board 2 right face */}
      <path d="M216,84 L216,96 L84,168 L84,156 Z" fill="currentColor" fillOpacity="0.35" />

      {/* Board 3 — top */}
      <path d="M24,78 L156,6 L216,42 L84,114 Z" fill="currentColor" fillOpacity="0.72" />
      {/* Board 3 left face */}
      <path d="M24,78 L24,90 L84,126 L84,114 Z" fill="currentColor" fillOpacity="0.5" />
      {/* Board 3 right face */}
      <path d="M216,42 L216,54 L84,126 L84,114 Z" fill="currentColor" fillOpacity="0.6" />
    </svg>
  );
}
