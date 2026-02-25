import { motion } from 'motion/react';
//import { ImageWithFallback } from './figma/ImageWithFallback.tsx';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1635991062422-b3e2f8c36dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvZmZlZSUyMHBsYW50YXRpb24lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwODYxMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Paisaje cafetero colombiano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl text-white mb-6 font-semibold">
            Descubre la Magia de <span className="text-yellow-400">Nuestro Municipio</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-semi-bold">
            Vive una experiencia única donde se encuentran la naturaleza, la cultura y el mejor café del mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full transition-colors"
            >
              Explorar Destinos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold px-8 py-4 bg-white/10 hover:bg-white/20 text-black border-2 border-white rounded-full backdrop-blur-sm transition-colors"
            >
              Planifica tu Viaje
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>

    );
}