import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Leaf, Users, Coffee, Mountain, Camera, Heart } from 'lucide-react';
import { TourismCard } from "../components/TourismCard.jsx";
import { ExperienceSection } from "../components/ExperienceSection.jsx";
import { GallerySection } from "../components/GallerySection.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { Footer } from "../components/Footer.jsx";
import { Link } from "react-router-dom";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	const planesTurismo = [
		{
			titulo: "Avistamiento de Aves",
			Descripcion: "Sumergete en la varidad de nuestro ecosistema y disfruta de las mas bellas aves de la region",
			imagen: "https://images.unsplash.com/photo-1635991062422-b3e2f8c36dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvZmZlZSUyMHBsYW50YXRpb24lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwODYxMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
		},

		{
			titulo: "Parapentismo",
			Descripcion: "Vuela sobre los paisajes mas hermosos de la region y disfruta de una experiencia unica",
			imagen: "https://images.unsplash.com/photo-1635991062422-b3e2f8c36dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvZmZlZSUyMHBsYW50YXRpb24lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwODYxMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
		},

		{
			titulo: "Caminatas Ecológicas",
			Descripcion: "Explora los senderos naturales de nuestro municipio y descubre la flora y fauna local en su hábitat natural",
			imagen: "https://images.unsplash.com/photo-1635991062422-b3e2f8c36dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvZmZlZSUyMHBsYW50YXRpb24lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwODYxMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
		},

		{
			titulo: "Ruta del café",
			Descripcion: "Descubre el proceso del café desde la siembra hasta la taza, visitando fincas cafeteras y aprendiendo sobre la cultura cafetera local",
			imagen: "https://images.unsplash.com/photo-1635991062422-b3e2f8c36dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYSUyMGNvZmZlZSUyMHBsYW50YXRpb24lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwODYxMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
		}

	]


	
	return (
		<div className="text-center mt-5">
			<section className="bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl mb-4">Tres Mundos por Descubrir</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Nuestro municipio te ofrece una experiencia completa que combina naturaleza, cultura y tradición cafetera
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-12">

						{planesTurismo.map((plan, index) => (
							<TourismCard
								key={index}
								titulo={plan.titulo}
								descripcion={plan.Descripcion}
								imagen={plan.imagen}
							/>
						))}

					</div>
				</div>
			
				<ExperienceSection />
				<GallerySection />
				<CTASection />
				<Footer />
				
			</section>
			
			 
			
		</div>
	);
}; 