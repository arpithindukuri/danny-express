export default function CodeBlock({ children }: { children: any }) {
  return (
    <div className="rounded-xl p-4 bg-slate-200 shadow-inner font-mono text-neutral-600">
      {children}
    </div>
  );
}
