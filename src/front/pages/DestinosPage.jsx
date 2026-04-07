import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bird, Coffee, Music, Bike, Wind, Mountain, Landmark, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ContactForm } from '../components/ContactForm.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1568489711036-9c94a7d5aea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGxhbmRzY2FwZSUyMG1vdW50YWlucyUyMHZhbGxleXxlbnwxfHx8fDE3NzUwNzU3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Paisajes Montañosos'
  },
  {
    url: 'https://images.unsplash.com/photo-1649616549847-d74c98f36edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvZmZlZSUyMGZhcm0lMjBzY2VuaWMlMjB2aWV3fGVufDF8fHx8MTc3NTA3NTcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Plantaciones de Café'
  },
  {
    url: 'https://images.unsplash.com/photo-1631134953337-b660eda6e87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMG5hdHVyZSUyMHdhdGVyZmFsbCUyMHRyb3BpY2FsfGVufDF8fHx8MTc3NTA3NTcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Cascadas Naturales'
  },
  {
    url: 'https://images.unsplash.com/photo-1759474946213-db858486d1f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMHRvd24lMjBzdHJlZXQlMjBjb2xvcmZ1bCUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NzUwNzU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Arquitectura Colonial'
  },
  {
    url: 'https://images.unsplash.com/photo-1771508665121-46bdb4794d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMHN1bnNldCUyMGxhbmRzY2FwZSUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzUwNzU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Atardeceres Únicos'
  }
];

const destinos = [
  {
    id: 1,
    title: 'Avistamiento de Aves',
    description: 'Colombia es el país con mayor diversidad de aves en el mundo. En nuestro municipio podrás observar especies únicas y endémicas en su hábitat natural. Una experiencia perfecta para los amantes de la naturaleza.',
    image: 'https://images.unsplash.com/photo-1762987018807-7a4359c3e27c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGJpcmQlMjB3YXRjaGluZyUyMHRyb3BpY2FsJTIwYmlyZHM8ZW58MXx8fHwxNzc1MDc1NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Bird,
    duration: '4-6 horas',
    difficulty: 'Fácil',
  },
  {
    id: 2,
    title: 'Cultura Cafetera',
    description: 'Sumérgete en el proceso del café de especialidad, desde la semilla hasta la taza. Aprende sobre el cultivo, recolección y tostado del mejor café del mundo directamente de nuestros caficultores.',
    image: 'https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvZmZlZSUyMHBsYW50YXRpb24lMjBmYXJtZXJ8ZW58MXx8fHwxNzc1MDc1NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Coffee,
    duration: '5-7 horas',
    difficulty: 'Fácil',
  },
  {
    id: 3,
    title: 'Música y Tradición',
    description: 'Experimenta el ritmo de nuestra cultura. Disfruta de presentaciones de música tradicional, danzas folclóricas y participa en talleres donde aprenderás sobre nuestras raíces culturales.',
    image: 'https://images.unsplash.com/photo-1771980589908-86b23f94f02b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMHRyYWRpdGlvbmFsJTIwbXVzaWMlMjBkYW5jZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NTA3NTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Music,
    duration: '3-4 horas',
    difficulty: 'Fácil',
  },
  {
    id: 4,
    title: 'Rutas en Bicicleta',
    description: 'Recorre nuestros paisajes montañosos en dos ruedas. Rutas diseñadas para todos los niveles que te llevarán por caminos rurales, plantaciones de café y miradores espectaculares.',
    image: 'https://images.unsplash.com/photo-1760892471867-d50bb945c13d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjB0cmFpbCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzUwMjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Bike,
    duration: '3-5 horas',
    difficulty: 'Media',
  },
  {
    id: 5,
    title: 'Parapentismo',
    description: 'Vive la emoción de volar sobre nuestros hermosos paisajes. Experimenta vistas panorámicas increíbles del valle cafetero y las montañas andinas desde las alturas.',
    image: 'https://images.unsplash.com/photo-1633119553191-df7320e9c5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhZ2xpZGluZyUyMG1vdW50YWlucyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzUwNzU1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Wind,
    duration: '2-3 horas',
    difficulty: 'Alta',
  },
  {
    id: 6,
    title: 'Senderismo y Caminatas Ecológicas',
    description: 'Explora senderos naturales rodeados de exuberante vegetación. Descubre cascadas escondidas, flora nativa y fauna silvestre en caminatas guiadas por expertos locales.',
    image: 'https://images.unsplash.com/photo-1603475429038-44361bcde123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3NzUwNzU1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Mountain,
    duration: '4-8 horas',
    difficulty: 'Media-Alta',
  },
  {
    id: 7,
    title: 'Historia de Nuestro Municipio',
    description: 'Viaja en el tiempo recorriendo nuestras calles coloniales, museos y sitios históricos. Conoce las historias de nuestros ancestros y la evolución de nuestra comunidad a través de los siglos.',
    image: 'https://images.unsplash.com/photo-1759474946083-08fef767181e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvbG9uaWFsJTIwdG93biUyMGNvbG9yZnVsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NTA3NTUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Landmark,
    duration: '3-4 horas',
    difficulty: 'Fácil',
  }
];

// Custom arrow components for carousel
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

function DestinoCard({ destino, index, onOpenModal }) {
  const Icon = destino.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={destino.image}
          alt={destino.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-3 shadow-lg">
          <Icon className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl text-gray-900 mb-3">{destino.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{destino.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {destino.duration}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {destino.difficulty}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onOpenModal(destino)}
          className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl border-none outline-none"
        >
          Más Información
        </motion.button>
      </div>
    </motion.div>
  );
}

export function DestinosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestino, setSelectedDestino] = useState(null);

  const handleOpenModal = (destino) => {
    setSelectedDestino(destino);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDestino(null);
    document.body.style.overflow = 'unset';
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            {/* Modal Content */}
            {selectedDestino && (
              <div>
                {/* Header Image */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedDestino.image}
                    alt={selectedDestino.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl md:text-4xl text-white mb-2">{selectedDestino.title}</h2>
                    <div className="flex items-center gap-4 text-white/90">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {selectedDestino.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {selectedDestino.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl text-gray-900 mb-4">Sobre esta experiencia</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedDestino.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-8 font-bold">
                    <h3 className="text-2xl text-gray-900 mb-6">Solicita más información</h3>
                    <ContactForm />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1681298234396-276f4d081b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMG5hdHVyZSUyMHJhaW5mb3Jlc3R8ZW58MXx8fHwxNzcwODYxMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Destinos Colombia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <Link to="/home">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl text-white mb-4">
              Nuestros <span className="text-yellow-400">Destinos</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Descubre experiencias inolvidables que conectan la naturaleza, cultura y aventura
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Galería de <span className="text-yellow-600">Nuestro Municipio</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un vistazo a las maravillas que te esperan
            </p>
          </motion.div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Slider {...sliderSettings}>
              {carouselImages.map((image, index) => (
                <div key={index} className="relative h-[500px] md:h-[600px]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-3xl md:text-4xl mb-2">{image.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Destinos Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Experiencias Únicas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada destino es una aventura diseñada para conectarte con la esencia de nuestro municipio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinos.map((destino, index) => (
              <DestinoCard key={destino.id} destino={destino} index={index} onOpenModal={handleOpenModal} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-black mb-6">
              ¿Listo para tu Próxima Aventura?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Contáctanos para planificar tu visita y crear recuerdos inolvidables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-full transition-colors"
              >
                Reservar Ahora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-black border-2 border-black rounded-full backdrop-blur-sm transition-colors"
              >
                Más Información
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Llena el formulario para obtener más información sobre nuestros destinos
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl mb-4">Turismo <span className="text-yellow-400">Colombia</span></h3>
          <p className="text-gray-400 mb-6">
            Descubre la magia de nuestro municipio
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">YouTube</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Turismo Colombia. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}




