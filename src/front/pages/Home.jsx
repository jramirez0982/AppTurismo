import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

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

	return (
		<div className="text-center mt-5">
			<h1 className="text-4xl font-bold">Hello Rigo!!</h1>
			<p className="text-lg">
				<img src={rigoImageUrl} className="w-32 h-32 rounded-full mb-3 mx-auto block" alt="Rigo Baby" />
			</p>
			<div className="bg-blue-100 text-blue-800 p-3 rounded mx-auto max-w-md">
				{store.message ? (
					<span>{store.message}</span>
				) : (
					<span className="text-red-500">
						Loading message from the backend (make sure your python 🐍 backend is running)...
					</span>
				)}
			</div>
		</div>
	);
}; 