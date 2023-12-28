"use client";

import { useEffect, useState } from "react";

type Advice = {
	slip: {
		id: number;
		advice: string;
	};
};

export default function Home() {
	const [advice, setAdvice] = useState<Advice>();

	const fetchAdvice = async () => {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data: Advice = await res.json();

		setAdvice(data);
	};

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<main className="bg-neutral-darkGrayishBlue px-4 md:px-12 rounded-xl flex flex-col justify-center items-center space-y-8 container md:max-w-xl relative min-h-[20rem]">
			<span className="text-xs text-primary-neonGreen antialiased tracking-[.30rem]">
				ADVICE #{advice?.slip.id}
			</span>

			<p className="text-primary-lightCyan text-3xl text-center">
				{advice?.slip.advice}
			</p>

			<svg
				className="container"
				height="16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fill="none" fillRule="evenodd">
					<path
						className="-translate-x-10 md:translate-x-4"
						fill="#4F5D74"
						d="M0 8h196v1H0zM248 8h196v1H248z"
					/>
					<g
						className="translate-x-[170px] md:translate-x-[228px]"
						fill="#CEE3E9"
					>
						<rect width="6" height="16" rx="3" />
						<rect x="14" width="6" height="16" rx="3" />
					</g>
				</g>
			</svg>

			<button
				onClick={fetchAdvice}
				className="bg-primary-neonGreen rounded-full p-5 absolute top-64 ease-in-out duration-200 hover:shadow-[0_0_40px_.5px] hover:shadow-primary-neonGreen"
			>
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
						fill="#202733"
					/>
				</svg>
			</button>
		</main>
	);
}
