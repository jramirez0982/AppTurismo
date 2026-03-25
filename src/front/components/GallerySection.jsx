import React from 'react'
import { motion } from 'motion/react';


const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1633627354173-1a26871e3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGZhcm0lMjBDb2xvbWJpYXxlbnwxfHx8fDE3NzA4NjEzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Granos de café colombiano',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1768407683153-214ba33ee9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMG1vdW50YWlucyUyMHZhbGxleSUyMHNjZW5pY3xlbnwxfHx8fDE3NzA4NjEzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Valle montañoso',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1672435601318-1ca09061d656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBjb2xvbmlhbCUyMGFyY2hpdGVjdHVyZSUyMHRvd258ZW58MXx8fHwxNzcwODYxMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Arquitectura colonial',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1681298234396-276f4d081b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMG5hdHVyZSUyMHJhaW5mb3Jlc3R8ZW58MXx8fHwxNzcwODYxMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Naturaleza colombiana',
    span: 'col-span-1 row-span-1'
  }
];

export function GallerySection() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Galería de Momentos</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Imágenes que cuentan la historia de nuestro paraíso natural
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${img.span} relative overflow-hidden rounded-xl group cursor-pointer h-64 md:h-80`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}