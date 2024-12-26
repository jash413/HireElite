interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-white/50 dark:bg-gray-800/50 
      backdrop-blur-lg 
      rounded-2xl 
      border border-gray-200 dark:border-gray-700
      ${hover ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}