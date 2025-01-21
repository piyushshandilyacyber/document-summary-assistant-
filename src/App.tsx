import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { SummaryOptions } from './components/SummaryOptions';
import { Summary } from './components/Summary';
import { SummaryLength, DocumentSummary, UploadedDocument } from './types';
import { Loader2, FileText } from 'lucide-react';

function App() {
  const [document, setDocument] = useState<UploadedDocument | null>(null);
  const [summaryLength, setSummaryLength] = useState<SummaryLength>('medium');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<DocumentSummary | null>(null);

  const handleFileSelect = async (file: File) => {
    setLoading(true);
    try {
      const type = file.type.includes('pdf') ? 'pdf' : 'image';
      setDocument({ file, type });
      
      // TODO: Implement actual text extraction and summarization
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSummary({
        text: "This is a sample summary of the uploaded document. In a real implementation, this would be generated using AI services based on the extracted text from the document.",
        keyPoints: [
          "First key point from the document",
          "Second important point extracted",
          "Third significant finding"
        ],
        mainIdeas: [
          "Main concept discussed in the document",
          "Secondary theme or idea presented"
        ],
        length: summaryLength
      });
    } catch (error) {
      console.error('Error processing document:', error);
      // TODO: Implement proper error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Document Summary Assistant</h1>
          </div>
          <p className="text-gray-600">
            Upload your document and get an intelligent summary with key points and main ideas
          </p>
        </div>

        <div className="space-y-8">
          <FileUpload onFileSelect={handleFileSelect} />

          {document && (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Summary Options</h2>
              <SummaryOptions
                selectedLength={summaryLength}
                onLengthChange={setSummaryLength}
              />
            </div>
          )}

          {loading && (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              <span className="ml-2 text-gray-600">Processing your document...</span>
            </div>
          )}

          {summary && !loading && (
            <Summary summary={summary} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;