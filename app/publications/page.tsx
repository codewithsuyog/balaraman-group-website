'use client';

import { useState, useEffect } from 'react';

interface Publication {
  id: number;
  title: string;
  authors: string;
  year: number;
  journal: string;
  link: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Advances in Sustainable Catalytic Systems for Modern Organic Synthesis',
    authors: 'Balaraman, E., et al.',
    year: 2025,
    journal: 'Nature Catalysis',
    link: '#',
  },
  {
    id: 2,
    title: 'Organometallic Complexes in Green Chemistry Applications',
    authors: 'Balaraman, E., & Team',
    year: 2024,
    journal: 'Chemical Reviews',
    link: '#',
  },
  {
    id: 3,
    title: 'Transition Metal-Catalyzed C-C Coupling Reactions',
    authors: 'Research Group',
    year: 2024,
    journal: 'Journal of Organic Chemistry',
    link: '#',
  },
];

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredPublications = selectedYear
    ? publications.filter((pub) => pub.year === selectedYear)
    : publications;

  const years = Array.from(new Set(publications.map((pub) => pub.year))).sort((a, b) => b - a);

  return (
    <main className="min-h-screen bg-[#FAFAF7] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Publications
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
            Research Publications
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Explore our latest research outputs and contributions to the field of catalysis and sustainable chemistry.
          </p>
        </div>

        {/* Year Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-4 py-2 rounded-full transition ${
              selectedYear === null
                ? 'bg-black text-white'
                : 'border border-gray-300 text-gray-700 hover:border-black'
            }`}
          >
            All Years
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full transition ${
                selectedYear === year
                  ? 'bg-black text-white'
                  : 'border border-gray-300 text-gray-700 hover:border-black'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">{pub.year}</p>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{pub.authors}</p>
                  <p className="text-sm text-gray-500 italic">{pub.journal}</p>
                </div>
                <a
                  href={pub.link}
                  className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition whitespace-nowrap"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No publications found for the selected year.</p>
          </div>
        )}
      </div>
    </main>
  );
}
