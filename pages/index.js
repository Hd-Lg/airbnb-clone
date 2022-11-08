import Head from "next/head";

import exploreData from "../data/exploreData";
import { Banner, Header, SmallCard } from "../components";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>AirBnB-Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font font-semibold pb-5">
						Explore Nearby
					</h2>
					<div className="grid">
						{exploreData?.map(({ id, img, distance, location }) => (
							<SmallCard
								key={id}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
