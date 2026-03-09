import { motion } from 'motion/react';
import react from 'react';

export function TourismCard({ titulo, descripcion, imagen, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
                <img
                    src={imagen}
                    alt={titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

            </div>

            {/* Content */}
            <div className="absolute flex flex-col inset-0 left-0 right-0 p-6 text-black-400 text-left">
                <h3 className="text-2xl mb-3 font-bold">{titulo}</h3>
                <p className="text-black  font-semibold">{descripcion}</p>

                <motion.button
                    whileHover={{ x: 5 }}
                    className="font-bolt mt-auto text-2xl text-yellow-400 hover:text-yellow-300 inline-flex items-center gap-2 transition-colors"
                >
                    Descubrir más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>
        </motion.div>
    );
}