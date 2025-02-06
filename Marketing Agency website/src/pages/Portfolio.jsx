import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Brand Evolution",
    client: "Tech Solutions Inc",
    image: "https://static.dezeen.com/uploads/2021/08/University-for-the-Creative-Arts_dezeen_2364_col_2-2.jpg",
    category: "Branding"
  },
  {
    title: "Digital Campaign",
    client: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&fit=crop&w=640&h=400&q=80",
    category: "Marketing"
  },
  {
    title: "App Redesign",
    client: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&fit=crop&w=640&h=400&q=80",
    category: "Design"
  },
  {
    title: "E-commerce Growth",
    client: "Shopify Experts",
    image: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Marketing"
  },
  {
    title: "Web Development",
    client: "Digital Horizon",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&fit=crop&w=640&h=400&q=80",
    category: "Web Development"
  },
  {
    title: "Social Media Strategy",
    client: "Creative Minds",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?crop=entropy&fit=crop&w=640&h=400&q=80",
    category: "Marketing"
  },
  {
    title: "Corporate Rebranding",
    client: "Enterprise Solutions",
    image: "https://swiftsigns.com.au/wp-content/uploads/2024/03/Rebranding-Feature-Image-1000x650.jpg",
    category: "Branding"
  },
  {
    title: "UX/UI Design",
    client: "Innovate Corp",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&fit=crop&w=640&h=400&q=80",
    category: "Design"
  },
  {
    title: "Content Marketing",
    client: "Storytellers Inc",
    image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/content_20marketing_5a75d1ba-cb68-450a-9252-5567fa321d6b.png?v=1729284607",
    category: "Content"
  },
  {
    title: "AI Integration",
    client: "NextGen AI",
    image: "https://www.newhorizons.com/Portals/2/EasyDNNnews/912/BenefitsAI.png",
    category: "Technology"
  },
  {
    title: "Mobile App Launch",
    client: "Appify",
    image: "https://mdevelopers.com/storage/0_bloghow-to-launch-an-app-the-right-way-1_c5b46096.png",
    category: "App Development"
  },
  {
    title: "Custom WordPress Theme",
    client: "Elegant Webs",
    image: "https://www.cloudways.com/blog/wp-content/uploads/Main-Image_750x394-32.jpg",
    category: "Web Development"
  }
];

const categories = ["All", "Branding", "Marketing", "Design"];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-16 text-center text-white">Our Work</h1>

        {/* Category Buttons */}
        <div className="text-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`my-2 md:p-0 px-6 py-2 mx-2 text-lg font-semibold rounded-full transition duration-300 
                ${selectedCategory === category ? 'bg-white text-zinc-900' : 'bg-zinc-800 text-white'} 
                hover:bg-white hover:text-zinc-900`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {/* Project Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-105"
                />
                {/* Dark Overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-gray-400">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.client}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
