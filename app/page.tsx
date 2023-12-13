export default function Home() {
	return (
		<main className="bg-neutral-darkGrayishBlue p-12 rounded-xl flex flex-col justify-center items-center space-y-8 max-w-xl">
			<span className="text-xs text-primary-neonGreen antialiased tracking-[.30rem]">
				ADVICE #117
			</span>

			<p className="text-primary-lightCyan text-3xl text-center">
				&quot;It is easy to sit up and take notice, what&apos;s
				difficult is getting up taking action.&quot;
			</p>

			<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
				<g fill="none" fillRule="evenodd">
					<path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
					<g transform="translate(212)" fill="#CEE3E9">
						<rect width="6" height="16" rx="3" />
						<rect x="14" width="6" height="16" rx="3" />
					</g>
				</g>
			</svg>
		</main>
	);
}
