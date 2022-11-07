import Head from "next/head";

import { Banner, Header } from "../components";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>AirBnB-Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
			<main>
				<section>
					<h2>Explore Nearby</h2>
				</section>
			</main>
		</div>
	);
}
