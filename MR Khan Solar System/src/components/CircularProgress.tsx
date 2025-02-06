import { motion } from 'framer-motion';

interface CircularProgressProps {
  value: number;
  suffix?: string;
}

export function CircularProgress({ value, suffix = '' }: CircularProgressProps) {
  const circumference = 2 * Math.PI * 45; // radius = 45

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-white/10"
        />
        <motion.circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="text-[#fca903]"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - (value / 100) * circumference }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: false }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">
          {value}{suffix}
        </span>
      </div>
    </div>
  );
}