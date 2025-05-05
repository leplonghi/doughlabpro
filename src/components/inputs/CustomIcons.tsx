
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const SaltIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 8v.01" />
    <path d="M12 10v.01" />
    <path d="M16 10v.01" />
    <path d="M14 12v.01" />
    <path d="M6 14a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-4-4z" />
    <path d="M17 18a4 4 0 0 0 0-8" />
    <path d="M14 14h.01" />
    <path d="M3 14h.01" />
    <path d="M7 14h.01" />
  </svg>
);

export const OilIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 14c.5-3.5 2-6 3-9" />
    <path d="M14 4h.5C17 4 19 6 19 8.5c0 .5 0 1-.5 1.5" />
    <path d="M8.5 13C5 15 7 20 12 20h2.5c2.5 0 4.5-2 4.5-4.5 0-3-2-5.5-5-5.5-3 0-5 2-5.5 3z" />
  </svg>
);

export const YeastIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    <path d="M9.5 13.5v2" />
    <path d="M14.5 13.5v2" />
  </svg>
);

export const SugarIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 13V7c0-1.1.9-2 2-2h0a2 2 0 0 1 2 2v6" />
    <path d="M5 13V9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
    <path d="M15 13v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3" />
    <path d="M3 13h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
