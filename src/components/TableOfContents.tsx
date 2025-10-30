'use client';

import { useState, useEffect } from 'react';
import type { HeaderItem } from '@/lib/editorjs-parser';

interface TableOfContentsProps {
  headers: HeaderItem[];
}

export default function TableOfContents({ headers }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    );

    headers.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headers.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headers]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (headers.length === 0) {
    return null;
  }

  return (
    <nav className="toc-container">
      <h3 className="toc-title">Table of Contents</h3>
      <ul className="toc-list">
        {headers.map((header) => (
          <li
            key={header.id}
            className={`toc-item toc-level-${header.level} ${
              activeId === header.id ? 'toc-active' : ''
            }`}
          >
            <a
              href={`#${header.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(header.id);
              }}
              className="toc-link"
            >
              {header.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
