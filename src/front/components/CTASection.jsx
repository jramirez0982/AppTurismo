import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-yellow-500" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            ¿Listo para tu Aventura?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Comienza a planear tu viaje hoy y descubre por qué nuestro municipio es un destino único en Colombia
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-black hover:bg-gray-900 text-white text-lg rounded-full transition-colors shadow-2xl"
          >
            Reserva tu Experiencia
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">Llámanos</p>
              <p className="text-white">+57 (123) 456-7890</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">Escríbenos</p>
              <p className="text-white">turismo@correo.com.co</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">Visítanos</p>
              <p className="text-white">Municipio, Colombia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
