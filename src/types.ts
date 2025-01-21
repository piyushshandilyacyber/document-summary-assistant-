export type SummaryLength = 'short' | 'medium' | 'long';

export interface DocumentSummary {
  text: string;
  keyPoints: string[];
  mainIdeas: string[];
  length: SummaryLength;
}

export interface UploadedDocument {
  file: File;
  type: 'pdf' | 'image';
  text?: string;
}