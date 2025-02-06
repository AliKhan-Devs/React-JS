import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+923426783244',
      link: 'tel:+923426783244',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@khansolar.com',
      link:'mailto:info@khansolar.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Solar Street, San Francisco, CA 94105',
      link:'https://www.google.com/maps/@37.7749,-122.4194,15z',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-15">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Get in <span className="text-[#fca903]">Touch</span>
          </h1>
          <p className="text-gray-300 text-2xl max-w-2xl mx-auto">
            Ready to start your solar journey? Contact us for a free consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Contact Info</h2>
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="relative">
                    <item.icon className="w-6 h-6 text-[#fca903]" />
                    <div className="absolute -inset-2 bg-[#fca903] opacity-20 blur-xl rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-gray-300"><a href={item.link} className='hover:underline'>{item.details}</a></p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {document.title = 'Mr Khan Solar System | Contact'}
    </div>
  );
}