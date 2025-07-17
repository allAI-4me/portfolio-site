export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-primary mb-4">Data with Purpose</h1>
      <p className="text-xl text-slate-600 dark:text-slate-200 mb-8">
        Technology with Empathy. Learning with Visibility.
      </p>
      <div className="space-x-4">
        <a href="/research" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">
          Explore Research
        </a>
        <a href="/work" className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition">
          Work With Me
        </a>
      </div>
    </section>
  );
}
