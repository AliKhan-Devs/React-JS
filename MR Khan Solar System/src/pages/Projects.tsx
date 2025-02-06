import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Eco Housing Complex',
      location: 'Silicon Valley, CA',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: '250kW system powering 50 luxury eco-friendly homes',
      video:'https://videos.pexels.com/video-files/12858696/12858696-uhd_2560_1440_60fps.mp4'
    },
    {
      title: 'Green Mall Initiative',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: '500kW commercial installation with energy storage',
      video:'https://videos.pexels.com/video-files/29543192/12717360_1920_1080_60fps.mp4'
    },
    {
      title: 'Tech Campus',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: '1MW system with advanced monitoring',
      video:'https://videos.pexels.com/video-files/29543193/12717372_1920_1080_60fps.mp4'
    },
    {
      title: 'House Project',
      location: 'Nowshera',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: '10MW system with advanced monitoring',
      video:'https://static.vecteezy.com/system/resources/previews/048/995/897/mp4/indian-technician-installing-the-solar-panels-at-roof-top-of-home-and-home-office-video.mp4'
    },
    {
      title: 'Industrial Project',
      location: 'Islamabad',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: '5MW system with advanced monitoring',
      video:'https://cdn.pixabay.com/video/2020/05/02/37907-415263544_large.mp4'
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-15">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-[#fca903]">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-2xl">
            Explore our successful solar installations across the country
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
      {document.title = 'Mr Khan Solar System | Projects'}
    </div>
  );
}