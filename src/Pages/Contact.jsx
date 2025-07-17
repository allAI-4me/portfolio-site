import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mrblbeno', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error('Network error. Please try later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen px-6 py-20 max-w-3xl mx-auto text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold text-primary mb-6">Get in Touch</h1>

      <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">
        Whether you're interested in collaborating, have a question, or just want to say hi — I’d love to hear from you.
      </p>

      {/* LinkedIn */}
      <div className="mb-8">
        <a
          href="https://www.linkedin.com/in/rumana-pathan/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline text-lg"
        >
          <FaLinkedin className="text-2xl" />
          Connect on LinkedIn
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full p-3 border border-gray-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full p-3 border border-gray-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            required
            className="w-full p-3 border border-gray-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition font-medium"
        >
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
