import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import OurServices from '../components/OurServices';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import Processes from '../components/Processes';
import Feature from '../components/feature';
import CallToAction from '../components/CallToAction';

function AnimatedSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <AnimatedSection>
        <OurServices />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUsSection />
      </AnimatedSection>
      <Processes/>
      <Feature/>
      <Testimonials />
      <CallToAction/>
    </div>
  );
}

export default Home;
