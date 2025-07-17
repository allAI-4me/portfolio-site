import { useState } from 'react';
import {
  FaUserGraduate,
  FaLightbulb,
  FaPenNib,
  FaBriefcase,
  FaChalkboardTeacher,
  FaUniversity,
  FaUsersCog,
  FaLaptopCode,
} from 'react-icons/fa';
import ExperienceCard from '../components/ExperienceCard'; // Make sure this path is correct

export default function About() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeExperience, setActiveExperience] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(section);
    setActiveSkill(null);
    setActiveExperience(null);
  };

  const toggleSkill = (index) => {
    setActiveSkill((prev) => (prev === index ? null : index));
  };

  const toggleExperience = (index) => {
    setActiveExperience((prev) => (prev === index ? null : index));
  };

  const skills = [
    { title: 'Learning Analytics', desc: 'Using ML tools for predictive/diagnostic analytics, modeling learner behavior, process mining, multimodal analysis, and dashboard design.' },
    { title: 'EdTech Evaluation & Curriculum Design', desc: 'Evaluated EdTech products using structured frameworks; designed and reviewed multimedia curricula for alignment, skill development, and engagement.' },
    { title: 'AR/VR in Education', desc: 'Developed immersive learning tools to enhance spatial reasoning and analyze learner interaction patterns in virtual environments.' },
    { title: 'Research Methods', desc: 'Proficient in quantitative, qualitative, and mixed-methods research; designed and conducted large-scale studies in diverse educational settings.' },
    { title: 'Teaching & Communication', desc: 'Experienced in online and offline instruction, MOOC facilitation, and faculty development with strong writing and public speaking skills.' },
    { title: 'Leadership & Mentorship', desc: 'Led educator training programmes, mentored postgraduate researchers, and actively contributed to the academic research community.' },
    { title: 'Pedagogical Innovation', desc: 'Applied constructivist and active learning strategies using EdTech tools to enhance learner engagement and autonomy.' },
  ];

  const experiences = [
    {
      title: 'Chief Programme Coordinator',
      org: 'PRISm, EdTech Society',
      duration: '2025 – Present',
      icon: <FaUsersCog className="text-primary mr-2" />,
      details: 'Coordinated educator training, supported EdTech documentation, mentored 50+ learners publishing research in international conferences.',
    },
    {
      title: 'EdTech Consultant',
      org: 'TAP, Pune | Next Education, Hyderabad',
      duration: '2023 – 2025',
      icon: <FaLaptopCode className="text-primary mr-2" />,
      details: 'Reviewed multimedia curricula, mapped content to skill-building goals, and designed interactive video lessons for Grades 4–11.',
    },
    {
      title: 'Teaching Assistant',
      org: 'IIT Bombay, Mumbai',
      duration: '2017 – 2023',
      icon: <FaChalkboardTeacher className="text-primary mr-2" />,
      details: 'Facilitated graduate courses and MOOCs, supported 2000+ learners, and conducted training sessions for faculty development.',
    },
    {
      title: 'Assistant Professor',
      org: 'Dhempe College of Science, Goa',
      duration: '2016 – 2017',
      icon: <FaUniversity className="text-primary mr-2" />,
      details: 'Taught undergraduate computer science courses and led outreach workshops on Scratch programming for rural and special needs learners.',
    },
  ];

  return (
    <section className="min-h-screen px-6 py-16 max-w-5xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-8">About Me</h1>
      <div className="space-y-6">

        {/* About Section */}
        <div>
          <button
            onClick={() => toggleSection('about')}
            className="flex items-center w-full text-left bg-primary-light dark:bg-slate-700 px-4 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <FaLightbulb className="mr-2 text-primary-dark" />
            <span className="text-lg font-medium text-primary-dark dark:text-white">About</span>
          </button>
          {activeSection === 'about' && (
            <div className="mt-4 text-base leading-relaxed px-4">
              I'm <strong>Dr. Rumana Pathan</strong>, an EdTech researcher passionate about creating learning environments that are visible, empathetic, and grounded in data. My journey from Goa to IIT Bombay has been shaped by a commitment to understanding how learners engage, reflect, and grow—especially in tech-enhanced contexts like AR/VR, MOOCs, and immersive analytics. Whether I’m designing a dashboard, mentoring a researcher, or delivering a faculty training session, my goal is to foster meaningful, adaptive, and equitable learning.
            </div>
          )}
        </div>

        {/* Academic Journey Section */}
        <div>
          <button
            onClick={() => toggleSection('academic')}
            className="flex items-center w-full text-left bg-primary-light dark:bg-slate-700 px-4 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <FaUserGraduate className="mr-2 text-primary-dark" />
            <span className="text-lg font-medium text-primary-dark dark:text-white">Academic Journey</span>
          </button>
          {activeSection === 'academic' && (
            <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              <div className="bg-white dark:bg-slate-800 shadow-md p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-primary">B.Tech, Padre Conceição College</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Computer Science and Technology</p>
                <p className="text-sm mt-2">2010 – 2014</p>
              </div>
              <div className="bg-white dark:bg-slate-800 shadow-md p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-primary">M.Tech, Goa University</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Computer Science and Technology</p>
                <p className="text-sm mt-2">2014 – 2016</p>
              </div>
              <div className="bg-white dark:bg-slate-800 shadow-md p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-primary">Ph.D., IIT Bombay</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Educational Technology</p>
                <p className="text-sm mt-2">2017 – 2024</p>
              </div>
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div>
          <button
            onClick={() => toggleSection('skills')}
            className="flex items-center w-full text-left bg-primary-light dark:bg-slate-700 px-4 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <FaPenNib className="mr-2 text-primary-dark" />
            <span className="text-lg font-medium text-primary-dark dark:text-white">Skills</span>
          </button>
          {activeSection === 'skills' && (
            <div className="mt-4 grid md:grid-cols-2 gap-4 px-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  onClick={() => toggleSkill(i)}
                  className="cursor-pointer bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-primary-dark dark:text-white">{skill.title}</h3>
                  {activeSkill === i && (
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{skill.desc}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Work Experience Section */}
        <div>
          <button
            onClick={() => toggleSection('experience')}
            className="flex items-center w-full text-left bg-primary-light dark:bg-slate-700 px-4 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <FaBriefcase className="mr-2 text-primary-dark" />
            <span className="text-lg font-medium text-primary-dark dark:text-white">Work Experience</span>
          </button>

          {activeSection === 'experience' && (
            <div className="mt-4 grid md:grid-cols-2 gap-4 px-4">
              {experiences.map((exp, i) => (
                <ExperienceCard
                  key={i}
                  exp={exp}
                  index={i}
                  isActive={activeExperience === i}
                  onToggle={toggleExperience}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
