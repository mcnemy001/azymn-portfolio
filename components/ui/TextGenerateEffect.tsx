import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(' ');

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <div>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                initial={{ opacity: 0, filter: filter ? 'blur(10px)' : 'none' }}
                animate={{ opacity: 1, filter: filter ? 'blur(0px)' : 'none' }}
                transition={{ delay: idx * 0.2, duration }}
                className={idx > 3 ? 'text-cyan-500' : ''}
              >
                {word}{' '}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
