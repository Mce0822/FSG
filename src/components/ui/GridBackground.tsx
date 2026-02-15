export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
    </div>
  );
}
