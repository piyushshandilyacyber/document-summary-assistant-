import React from 'react';
import { DocumentSummary } from '../types';
import { BookOpen, ListChecks, Lightbulb } from 'lucide-react';

interface SummaryProps {
  summary: DocumentSummary;
}

export function Summary({ summary }: SummaryProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
        </div>
        <p className="text-gray-700 whitespace-pre-wrap">{summary.text}</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <ListChecks className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Key Points</h3>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {summary.keyPoints.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Main Ideas</h3>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {summary.mainIdeas.map((idea, index) => (
            <li key={index} className="text-gray-700">{idea}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}