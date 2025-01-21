import React from 'react';
import { SummaryLength } from '../types';
import { AlignLeft, AlignJustify, FileText } from 'lucide-react';
import clsx from 'clsx';

interface SummaryOptionsProps {
  selectedLength: SummaryLength;
  onLengthChange: (length: SummaryLength) => void;
}

export function SummaryOptions({ selectedLength, onLengthChange }: SummaryOptionsProps) {
  const options: { value: SummaryLength; label: string; icon: React.ReactNode }[] = [
    { value: 'short', label: 'Short', icon: <AlignLeft className="w-4 h-4" /> },
    { value: 'medium', label: 'Medium', icon: <AlignJustify className="w-4 h-4" /> },
    { value: 'long', label: 'Long', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="flex gap-4">
      {options.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={() => onLengthChange(value)}
          className={clsx(
            'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors',
            'border focus:outline-none focus:ring-2 focus:ring-blue-500',
            selectedLength === value
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
          )}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}