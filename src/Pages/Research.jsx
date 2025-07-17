import Card from '../components/Card';

const researchAreas = [
  {
    title: 'Metacognition',
    description:
      'Exploring how learners reflect, regulate, and adjust their strategies during complex problem-solving. Designed and validated frameworks to model metacognitive processes across various learning environments.',
  },
  {
    title: 'AR/VR Learning',
    description:
      'Designed immersive tools like GeoSolvAR and VR trackers to enhance spatial reasoning and capture interaction data. Analyzed user behavior to evaluate engagement and instructional design.',
  },
  {
    title: 'EdTech Evaluation',
    description:
      'Conducted structured evaluations of EdTech platforms (e.g., Tulna) for pedagogical alignment, content quality, and usability across formal and informal learning contexts.',
  },
  {
    title: 'Learner Analytics',
    description:
      'Developed dashboards and prediction models using multimodal data. Applied ML techniques to trace learning behaviors, predict churn, and support adaptive feedback systems.',
  },
];

export default function Research() {
  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-10">Research Focus</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {researchAreas.map((area) => (
          <Card key={area.title} title={area.title} description={area.description} />
        ))}
      </div>
    </section>
  );
}
