import { useState } from 'react';
import Card from '../components/Card'; // Existing reusable card component

const tabs = ['Teaching', 'MOOCs & Instruction', 'Outreach', 'Consulting & Curriculum', 'Research Mentorship'];

const content = {
  Teaching: [
    {
      title: 'Faculty Development',
      description:
        'Delivered invited talks on EdTech, analytics, and metacognition at IITs, NITs, IIITs, and government bodies. Facilitated workshops for 300+ educators across India.',
    },
    {
      title: 'TA Leadership',
      description:
        'Led TA efforts for multiple graduate courses; guided pedagogy strategies and supported structured assessment reviews.',
    },
  ],
  'MOOCs & Instruction': [
    {
      title: 'Graduate Courses at IIT Bombay',
      description:
        'TA for M.Tech/Ph.D. courses: Adaptive Tutoring Systems and Self-Regulation in Tech-Enhanced Learning. Supported projects, discussions, and instructional design.',
    },
    {
      title: 'SWAYAM/NPTEL MOOCs',
      description:
        'TA for "Introduction to Learning Analytics" and "Demystifying Networks" — moderated discussions and supported over 2,000 learners across both MOOCs.',
    },
  ],
  Outreach: [
    {
      title: 'K–12 & Rural Tech Workshops',
      description:
        'Facilitated Scratch programming and creative coding sessions for 500+ rural students and special educators under Goa’s ICT outreach initiative.',
    },
    {
      title: 'Community Engagement',
      description:
        'Promoted inclusive technology access and self-paced learning strategies among underserved learner populations.',
    },
  ],
  'Consulting & Curriculum': [
    {
      title: 'EdTech Evaluation',
      description:
        'Reviewed AR/VR and app-based tools using Tulna frameworks. Assessed usability, alignment, and pedagogical effectiveness.',
    },
    {
      title: 'Curriculum Design',
      description:
        'Collaborated with TAP and Next Education to design interactive multimedia content across STEM subjects for grades 4–11.',
    },
  ],
  'Research Mentorship': [
    {
      title: 'Research Guidance',
      description:
        'Mentored M.Tech and Ph.D. students in educational data analytics, facilitating publication and experimentation.',
    },
    {
      title: 'Academic Community Contributions',
      description:
        'Coordinated research documentation, shaped dashboard studies, and led cross-institutional collaborative projects.',
    },
  ],
};

export default function TalksTeaching() {
  const [activeTab, setActiveTab] = useState('Teaching');

  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-8">Academic & Professional Engagements</h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Cards per Tab */}
      <div className="grid gap-6 md:grid-cols-2">
        {content[activeTab].map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
