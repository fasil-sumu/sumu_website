'use client';

import { MegaMenuItem as MegaMenuItemType } from '@/data/header';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import React from 'react';

const IconMap: Record<string, React.ReactNode> = {
  invoicing: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
  payments: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  ),
  expenses: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
    </svg>
  ),
  accounting: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
    </svg>
  ),
  reporting: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  clients: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  learn: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  ),
  support: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
    </svg>
  ),
  company: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <line x1="9" y1="22" x2="9" y2="22"></line>
      <line x1="15" y1="22" x2="15" y2="22"></line>
      <line x1="9" y1="6" x2="9" y2="6"></line>
      <line x1="15" y1="6" x2="15" y2="6"></line>
      <line x1="9" y1="10" x2="9" y2="10"></line>
      <line x1="15" y1="10" x2="15" y2="10"></line>
      <line x1="9" y1="14" x2="9" y2="14"></line>
      <line x1="15" y1="14" x2="15" y2="14"></line>
      <line x1="9" y1="18" x2="9" y2="18"></line>
      <line x1="15" y1="18" x2="15" y2="18"></line>
    </svg>
  ),
};

interface MegaMenuItemProps {
  item: MegaMenuItemType;
}

const MegaMenuItem = ({ item }: MegaMenuItemProps) => {
  const { t } = useTranslation();
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-start gap-4 rounded-[16px] p-4 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-background-7">
        {item.icon && IconMap[item.icon] && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7c31f6]/10 text-[#7c31f6] dark:bg-[#7c31f6]/20 dark:text-[#7c31f6]">
            {IconMap[item.icon]}
          </div>
        )}
        <div className="flex flex-col flex-1 h-full min-h-[48px] justify-center">
          <span className="text-base font-semibold leading-none text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-primary mb-1.5">
            {t(item.label, { defaultValue: item.label })}
          </span>
          {item.description && (
            <span className="text-[13px] leading-tight text-gray-500 dark:text-gray-400">
              {t(item.description, { defaultValue: item.description })}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
};

export default MegaMenuItem;
