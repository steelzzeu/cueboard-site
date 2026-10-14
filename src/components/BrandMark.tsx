export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <rect x="3" y="10" width="3.2" height="8" rx="1" />
      <rect x="8.4" y="6" width="3.2" height="12" rx="1" />
      <rect x="13.8" y="8" width="3.2" height="10" rx="1" />
      <rect x="19.2" y="4" width="1.8" height="14" rx="0.8" />
    </svg>
  );
}
