import React from 'react'
import { motion } from 'motion/react';
import { Coffee, Mountain, Users, Leaf, Camera, Heart } from 'lucide-react';


const experiences = [
  {
    icon: Coffee,
    title: 'Tour Cafetero',
    description: 'Recorre plantaciones y aprende el proceso del café de la semilla a la taza'
  },
  {
    icon: Mountain,
    title: 'Senderismo',
    description: 'Explora senderos naturales con vistas espectaculares'
  },
  {
    icon: Users,
    title: 'Cultura Local',
    description: 'Conecta con la comunidad y sus tradiciones ancestrales'
  },
  {
    icon: Leaf,
    title: 'Ecoturismo',
    description: 'Observa flora y fauna en su hábitat natural'
  },
  {
    icon: Camera,
    title: 'Fotografía',
    description: 'Captura paisajes únicos y momentos inolvidables'
  },
  {
    icon: Heart,
    title: 'Gastronomía',
    description: 'Degusta la auténtica comida tradicional colombiana'
  }
];

export function ExperienceSection() {
  return (
    <section className="flex flex-wrap justify-center gap-12  bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 mt-20">Experiencias Inolvidables</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada momento en nuestro municipio es una oportunidad para crear recuerdos duraderos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 md:px-16 lg:px-19">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                <exp.icon className="w-16 h-16 text-white bg-yellow-400 rounded-full" />
              </div>
              <h3 className="text-xl text-left mb-3">{exp.title}</h3>
              <p className="text-gray-600 text-left leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
