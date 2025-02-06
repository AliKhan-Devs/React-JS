import { ServiceCard } from '../components/ServiceCard';
import { Home, Building2, Factory, Wrench, Shield, BatteryCharging } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete solar solutions for homes, including panel installation and battery storage.',
    },
    {
      icon: Building2,
      title: 'Commercial Systems',
      description: 'Large-scale installations for office buildings and retail spaces.',
    },
    {
      icon: Factory,
      title: 'Industrial Solutions',
      description: 'Custom power systems for factories and industrial facilities.',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Regular maintenance and support services for all installations.',
    },
    {
      icon: Shield,
      title: 'System Protection',
      description: 'Advanced monitoring and protection systems for your installation.',
    },
    {
      icon: BatteryCharging,
      title: 'EV Integration',
      description: 'Solar-powered charging solutions for electric vehicles.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-15">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-[#fca903]">Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solar solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
      {document.title = 'Mr Khan Solar System - Services'}
    </div>
  );
}