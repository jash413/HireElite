const stats = [
  { value: '48h', label: 'Average Onboarding' },
  { value: '97%', label: 'Project Success Rate' },
  { value: '24/7', label: 'Developer Support' },
  { value: '1%', label: 'Top Talent Only' }
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}