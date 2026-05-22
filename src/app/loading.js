import { Skeleton } from "@heroui/react";

export default function Loading() {
  // Create an array of 6 empty items to map over so we fill the screen with skeletons
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* Optional: A subtle loading pulse for the page header */}
      <div className="space-y-3 mb-10">
        <Skeleton className="h-8 w-64 rounded-xl dark:bg-slate-800" />
        <Skeleton className="h-4 w-96 rounded-lg dark:bg-slate-800" />
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {skeletonCards.map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-white dark:bg-slate-900 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
          >
            {/* Aspect 4/3 Image Area Skeleton */}
            <Skeleton className="w-full aspect-4/3 dark:bg-slate-800" />

            <div className="p-8 flex flex-col grow space-y-4">
              
              {/* Subject, Title, and Institution Lines */}
              <div className="space-y-3">
                <Skeleton className="h-3 w-1/4 rounded-full dark:bg-slate-800" />
                <Skeleton className="h-6 w-3/4 rounded-lg dark:bg-slate-800" />
                <Skeleton className="h-4 w-1/2 rounded-lg dark:bg-slate-800" />
              </div>

              {/* Location Line */}
              <Skeleton className="h-4 w-1/3 rounded-lg dark:bg-slate-800 mt-2" />

              {/* Days/Time Gray Box Area Skeleton */}
              <Skeleton className="h-16 w-full rounded-xl dark:bg-slate-800 mt-4" />

              {/* Footer: Price Block and Button Skeleton */}
              <div className="pt-4 mt-auto border-t border-slate-200/50 dark:border-white/10 flex justify-between items-center">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-16 rounded-lg dark:bg-slate-800" />
                  <Skeleton className="h-2 w-12 rounded-full dark:bg-slate-800" />
                </div>
                {/* Pill shaped button skeleton */}
                <Skeleton className="h-10 w-32 rounded-full dark:bg-slate-800" />
              </div>
              
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}