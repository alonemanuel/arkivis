/**
 * Friends Page Component
 * 
 * Placeholder view for the upcoming friends feature.
 * Currently displays a "coming soon" message.
 */

import React from 'react';

const Friends: React.FC = () => {
  return (
    <div className="card p-6 flex flex-col items-center justify-center text-center h-64">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Friends Feature Coming Soon
      </h2>
      <p className="text-arkivis-mutedDark dark:text-arkivis-mutedLight mb-4">
        Collaborate and share notes with friends in our next update!
      </p>
    </div>
  );
};

export default Friends; 