export default function Flame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2c.6 3.2-.4 5.2-2 7.2-1.3 1.6-2.5 3.2-2.5 5.3a4.5 4.5 0 0 0 9 0c0-1.2-.4-2.3-1-3.3-.5 1-1.1 1.7-2 2.1.9-2.3.6-4.6-.3-6.6C12.6 5.4 12 3.8 12 2Z" />
      <path d="M12 22a6.5 6.5 0 0 1-6.5-6.5c0-2.5 1.4-4.6 2.9-6.5l.4-.5c-.7 2-.4 3.7.7 5.1A6.5 6.5 0 0 1 12 22Z" opacity=".55" />
    </svg>
  );
}
