export default function ExperienceCard({ exp, index, isActive, onToggle }) {
  return (
    <div
      onClick={() => onToggle(index)}
      className="cursor-pointer bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <div className="flex items-center mb-2">
        {exp.icon}
        <h3 className="text-lg font-semibold text-primary-dark dark:text-white">{exp.title}</h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{exp.org}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{exp.duration}</p>
      {isActive && (
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{exp.details}</p>
      )}
    </div>
  );
}
