import React from 'react';

interface PageLoadingSpinnerProps {
  color: string;
}

const PageLoadingSpinner: React.FC<PageLoadingSpinnerProps> = ({ color }) => {
  return (
    <div className="flex space-x-2 justify-center items-center bg-transparent my-[0.5rem] h-2/3 opacity-25">
      <div className={`h-4 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.3s' }}></div>
      <div className={`h-8 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.6s' }}></div>
      <div className={`h-12 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.9s' }}></div>
      <div className={`h-16 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.12s' }}></div>
      <div className={`h-20 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.15s' }}></div>
      <div className={`h-16 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.18s' }}></div>
      <div className={`h-12 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.21s' }}></div>
      <div className={`h-8 w-1 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '-0.23s' }}></div>
      <div className={`h-4 w-1 bg-${color} rounded-full animate-bounce`}></div>
    </div>
  );
}

export default PageLoadingSpinner;
