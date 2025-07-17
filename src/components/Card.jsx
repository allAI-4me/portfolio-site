export default function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-primary mb-2">{title}</h2>
      <p className="text-base text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
