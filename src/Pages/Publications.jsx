import { useState } from 'react';
import CitationPanel from '../components/CitationPanel';

const publications = [
  {
    title: 'Modeling Metacognitive Processes in SRL',
    citation: `Pathan, R., Murthy, S., & Iyer, S. (2022). Modeling metacognitive processes in self-regulated learning in a complex problem-solving environment. Journal of Learning Analytics.`,
    bibtex: `@article{pathan2022srl,
  title={Modeling metacognitive processes in self-regulated learning in a complex problem-solving environment},
  author={Pathan, Rumana and Murthy, Sahana and Iyer, Sridhar},
  journal={Journal of Learning Analytics},
  year={2022}
}`,
  },
  {
    title: 'GeoSolvAR: AR Tool for 3D Solids',
    citation: `Kaur, A., Pathan, R., & Murthy, S. (2018). GeoSolvAR: Visualizing 3D solids in AR. In Proceedings of the T4E Conference.`,
    bibtex: `@inproceedings{kaur2018geosolvar,
  title={GeoSolvAR: Visualizing 3D solids in AR},
  author={Kaur, Amandeep and Pathan, Rumana and Murthy, Sahana},
  booktitle={Proceedings of the T4E Conference},
  year={2018}
}`,
  },
  {
    title: 'Churn Prediction in Hello English',
    citation: `Singh, V., & Pathan, R. (2021). Churn prediction in a language learning app using learner interaction data. Smart Learning Environments.`,
    bibtex: `@article{singh2021churn,
  title={Churn prediction in a language learning app using learner interaction data},
  author={Singh, Vishal and Pathan, Rumana},
  journal={Smart Learning Environments},
  year={2021}
}`,
  },
  {
    title: 'VR Interaction Capture Mechanism',
    citation: `Pathan, R., & Murthy, S. (2020). Mechanism to capture learner interactions in a VR-based learning environment. In ICALT 2020.`,
    bibtex: `@inproceedings{pathan2020vr,
  title={Mechanism to capture learner interactions in a VR-based learning environment},
  author={Pathan, Rumana and Murthy, Sahana},
  booktitle={Proceedings of the IEEE ICALT},
  year={2020}
}`,
  },
  {
    title: 'Comparing Experts’ Systems Thinking Skill',
    citation: `Deep, A., Pathan, R., & Chitre, L. (2017). Comparing experts’ systems thinking skill across contexts. Unpublished research study.`,
    bibtex: `@misc{deep2017systems,
  title={Comparing experts’ systems thinking skill across contexts},
  author={Deep, Anshul and Pathan, Rumana and Chitre, Leena},
  note={Unpublished research study},
  year={2017}
}`,
  },
  {
    title: 'Web-based Divergent/Convergent Thinking Environment (M.Tech Thesis)',
    citation: `Pathan, R. (2016). Web-based learning environment to enhance divergent and convergent thinking skills (M.Tech Thesis). Goa University.`,
    bibtex: `@mastersthesis{pathan2016mtech,
  title={Web-based learning environment to enhance divergent and convergent thinking skills},
  author={Pathan, Rumana},
  school={Goa University},
  year={2016},
  type={M.Tech Thesis}
}`,
  },
];

export default function Publications() {
  const [style, setStyle] = useState('APA');

  return (
    <section className="min-h-screen px-6 py-16 max-w-5xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-6">Publications</h1>

      {/* Toggle */}
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 text-sm rounded border ${
            style === 'APA'
              ? 'bg-primary text-white'
              : 'bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-slate-100'
          }`}
          onClick={() => setStyle('APA')}
        >
          APA
        </button>
        <button
          className={`px-4 py-2 text-sm rounded border ${
            style === 'BibTeX'
              ? 'bg-primary text-white'
              : 'bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-slate-100'
          }`}
          onClick={() => setStyle('BibTeX')}
        >
          BibTeX
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {publications.map((pub) => (
          <CitationPanel
            key={pub.title}
            citation={pub.citation}
            bibtex={pub.bibtex}
            style={style}
          />
        ))}
      </div>
    </section>
  );
}
