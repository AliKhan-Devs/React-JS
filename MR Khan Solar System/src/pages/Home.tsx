import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';
import { StatsSection } from '../components/StatsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Battery, Zap, Sun, Shield } from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: Sun,
      title: 'Solar Power',
      description: 'Harness clean, renewable energy from the sun with cutting-edge solar technology.',
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Advanced battery solutions ensuring 24/7 power availability.',
    },
    {
      icon: Zap,
      title: 'Smart Integration',
      description: 'Seamless integration with your existing electrical infrastructure.',
    },
    {
      icon: Shield,
      title: 'Reliable Support',
      description: '24/7 monitoring and maintenance to ensure optimal performance.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a]">
      <HeroSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#fca903]">MR Khan Solar System</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the future of energy with our comprehensive solar solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ServiceCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />
      {document.title = "MR Khan Solar System"}
    </div>
  );
}