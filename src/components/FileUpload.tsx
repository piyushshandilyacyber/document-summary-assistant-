import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileUp, File as FileIcon } from 'lucide-react';
import clsx from 'clsx';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={clsx(
        'w-full p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors',
        'flex flex-col items-center justify-center gap-4',
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
      )}
    >
      <input {...getInputProps()} />
      <div className="p-4 rounded-full bg-blue-100">
        {isDragActive ? <FileUp className="w-8 h-8 text-blue-600" /> : <FileIcon className="w-8 h-8 text-blue-600" />}
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">
          {isDragActive ? 'Drop your document here' : 'Drag & drop your document here'}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          or click to select a file
        </p>
      </div>
      <p className="text-xs text-gray-400">
        Supported formats: PDF, PNG, JPG, JPEG, GIF
      </p>
    </div>
  );
}