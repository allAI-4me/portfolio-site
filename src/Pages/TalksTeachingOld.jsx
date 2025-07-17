import Card from '../components/Card';

const teachingItems = [
  {
    title: 'Faculty Development Talks & Trainings',
    description:
      'Delivered invited sessions on EdTech and learning analytics at government bodies, higher education institutions, and NGOs. Trained 300+ participants through faculty development programmes.',
  },
  {
    title: 'MOOCs on SWAYAM',
    description:
      'Teaching Assistant for NPTEL MOOCs: "Introduction to Learning Analytics" (July 2019) and "Demystifying Networks" (Sept 2020), supporting 700+ and 1500+ learners respectively.',
  },
  {
    title: 'Graduate Teaching at IIT Bombay',
    description:
      'TA for M.Tech & Ph.D. courses: Adaptive Tutoring Systems (2019–2020) and Self-Regulation in Tech-Enhanced Learning (Autumn 2020).',
  },
  {
    title: 'Workshops for K–12 & Rural Learners',
    description:
      'Designed and facilitated Scratch programming workshops for rural students and special educators, reaching over 500+ learners under Goa’s modern tech initiatives.',
  },
];

export default function TalksTeaching() {
  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-10">Talks & Teaching</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {teachingItems.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
