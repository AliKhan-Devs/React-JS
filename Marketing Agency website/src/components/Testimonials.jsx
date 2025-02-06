import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Solutions",
    content: "The results we've seen are simply outstanding. Our digital presence has grown exponentially.",
    image: "https://i.pravatar.cc/300?img=21"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Innovate Corp",
    content: "Their strategic approach and creativity have transformed our brand completely.",
    image: "https://i.pravatar.cc/300?img=23"
  },
  {
    name: "Michael Brown",
    role: "Founder, Startup Genius",
    content: "Working with their team was a game-changer. They exceeded all our expectations.",
    image: "https://i.pravatar.cc/300?img=25"
  },
  {
    name: "Emily Davis",
    role: "Operations Manager, Global Reach",
    content: "Their attention to detail and professionalism is unmatched. Highly recommend them.",
    image: "https://i.pravatar.cc/300?img=27"
  },
  {
    name: "Chris Miller",
    role: "Creative Head, Artisans Studio",
    content: "Their innovative solutions and dedication to our project were incredible.",
    image: "https://i.pravatar.cc/300?img=29"
  },
  {
    name: "Sophia Taylor",
    role: "CTO, Digital Pioneers",
    content: "They brought our vision to life with their technical expertise and creative approach.",
    image: "https://i.pravatar.cc/300?img=31"
  },
  {
    name: "David Wilson",
    role: "Head of Marketing, Market Leaders",
    content: "The team was a pleasure to work with. Their insights and strategies made a huge difference.",
    image: "https://i.pravatar.cc/300?img=33"
  },
  {
    name: "Olivia Martin",
    role: "Product Manager, Evolve Tech",
    content: "Their approach was incredibly collaborative, and the results spoke for themselves.",
    image: "https://i.pravatar.cc/300?img=35"
  },
  {
    name: "James Anderson",
    role: "Business Owner, Local Heroes",
    content: "Their team is simply the best. They understood our needs and delivered top-notch solutions.",
    image: "https://i.pravatar.cc/300?img=37"
  },
  {
    name: "Emma Thompson",
    role: "HR Manager, Bright Futures",
    content: "They provided creative and effective solutions to help us achieve our goals.",
    image: "https://i.pravatar.cc/300?img=39"
  }
];


function Testimonials() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-16">Client Success Stories</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-800 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-8 mb-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{testimonial.name}</h3>
                    <p className="text-xl text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-200 italic">{testimonial.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
