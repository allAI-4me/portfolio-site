import Card from '../components/Card';

const awardsLeadership = [
  {
    title: 'ICALT Best Reviewer Award',
    description:
      'Recognized as Best Reviewer at the 23rd IEEE International Conference on Advanced Learning Technologies (ICALT 2023), Utah, USA.',
  },
  {
    title: 'ICCE Merit Scholarship',
    description:
      'Received Asia-Pacific Society for Computers in Education Merit Scholarship for ICCE 2021, Bangkok.',
  },
  {
    title: 'T4E Student Award',
    description:
      'Awarded IEEE TCLT student award at T4E 2019 for contributions to educational technology research.',
  },
  {
    title: 'Goa University Gold Medal',
    description:
      'Secured highest CGPA in M.Tech program in Computer Science and Technology (2016).',
  },
  {
    title: 'Leadership at IIT Bombay',
    description:
      'Served as Department General Secretary and TA Council Head (2019–2021). Led academic and organizational efforts within the EdTech programme.',
  },
  {
    title: 'Outreach to Rural Learners',
    description:
      'Conducted workshops on Scratch programming and modern tech for 500+ rural students. Led sessions for special educators using visual programming tools.',
  },
];

export default function Awards() {
  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-10">Awards & Leadership</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {awardsLeadership.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
