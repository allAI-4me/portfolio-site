export default function CitationPanel({ citation, bibtex, style }) {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-slate-800 text-sm shadow-sm">
      {style === 'APA' ? (
        <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">{citation}</p>
      ) : (
        <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">{bibtex}</pre>
      )}
    </div>
  );
}
