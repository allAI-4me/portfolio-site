import Card from '../components/Card';

const projects = [
  {
    title: 'GeoSolvAR',
    description:
      'An augmented reality tool to visualize and manipulate complex 3D solids. Supported spatial reasoning using Predict–Observe–Explain pedagogy. Evaluated for engagement, usability, and learning impact.',
  },
  {
    title: 'VR Behavior Tracking',
    description:
      'Built a screen-recording-based system to capture detailed user interactions in virtual environments. Analyzed engagement with interactive features and instructional sequences.',
  },
  {
    title: 'Tulna: EdTech Evaluation',
    description:
      'Part of IIT Bombay’s Tulna initiative to evaluate EdTech products on pedagogical alignment, content quality, and design. Delivered detailed reviews and product insights.',
  },
  {
    title: 'Churn Prediction in Hello English',
    description:
      'Used behavioral trace data and machine learning to forecast learner dropout in a language learning app. Identified early churn indicators and demographic trends.',
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-10">Featured Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
}
