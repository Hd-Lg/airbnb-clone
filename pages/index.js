import Head from "next/head";

import { exploreData, cardsData } from "../data/exploreData";
import {
	Banner,
	Header,
	SmallCard,
	MediumCard,
	LargeCard,
} from "../components";
import Large_card from "../assets/Large_card.webp";

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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
				<section>
					<h2 className="text-4xl font-semibold py-8">
						Live Anywhere
					</h2>
					<div className="flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3">
						{cardsData?.map(({ id, img, title }) => (
							<MediumCard key={id} img={img} title={title} />
						))}
					</div>
				</section>
				<LargeCard
					img={Large_card}
					title="The Greatest Outdoors"
					description="Wishlists curated by Airbnb."
					buttonText="Get Inspired"
				/>
			</main>
		</div>
	);
}
