import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

// Professional Highlights Data
const HIGHLIGHTS = [
  {
    testimonial:
      "Demonstrates strong troubleshooting skills across Windows, Linux, and enterprise network environments.",
  },
  {
    testimonial:
      "Known for staying calm under pressure and resolving issues efficiently in fast‑paced IT environments.",
  },
  {
    testimonial:
      "Passionate about continuous learning, system optimization, and improving IT infrastructure reliability.",
  },
];

// Card Component
type HighlightCardProps = {
  index: number;
  testimonial: string;
};

const HighlightCard = ({ index, testimonial }: HighlightCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Quote */}
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      {/* No name, no designation, no image */}
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-secondary text-[14px]">Professional Highlight</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Main Section
export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What I bring</p>
            <h2 className={styles.sectionHeadText}>Professional Highlights.</h2>
          </motion.div>
        </div>

        {/* Cards */}
        <div
          className={cn(styles.paddingX, "-mt-20 pb-14 flex flex-wrap gap-7")}
        >
          {HIGHLIGHTS.map((item, i) => (
            <HighlightCard key={i} index={i} testimonial={item.testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};