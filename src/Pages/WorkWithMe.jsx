import { Link } from 'react-router-dom';

export default function WorkWithMe() {
  return (
    <section className="min-h-screen px-6 py-20 max-w-3xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-6">Work With Me</h1>

      <p className="text-lg leading-relaxed mb-6">
        I’m always excited to collaborate with people who care deeply about learners, equity, and impact. 
        Whether you're an EdTech startup, a research group, an NGO, or a fellow educator, I bring a human-centered and data-informed lens to our shared goals.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        From immersive technologies to large-scale learning analytics, my work focuses on making learning visible, meaningful, and adaptive — especially in resource-constrained or underserved contexts.
      </p>

      <p className="text-lg leading-relaxed mb-10">
        If you’re working on tools, frameworks, or interventions that aim to empower learners, I’d love to hear from you.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition text-lg font-medium"
      >
        Let’s Collaborate →
      </Link>
    </section>
  );
}
