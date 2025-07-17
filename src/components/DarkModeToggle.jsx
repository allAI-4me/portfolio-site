import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.darkMode === 'true' || document.documentElement.classList.contains('dark')
  );

  // Sync <html> class & localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.darkMode = dark;
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="p-1 rounded focus:outline-none focus:ring"
    >
      {dark
        ? <SunIcon className="h-6 w-6 text-yellow-400" />
        : <MoonIcon className="h-6 w-6 text-gray-700" />}
    </button>
  );
}
