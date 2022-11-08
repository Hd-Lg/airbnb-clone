import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

import { Footer, Header, InfoCard } from "../components";

import { searchData } from "../data/exploreData";

export default function Search() {
	const router = useRouter();
	const { location, startDate, endDate, numberGuests } = router.query;

	const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
	const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
	const range = `${formattedStartDate} - ${formattedEndDate}`;

	return (
		<div className="h-screen">
			<Header placeholder={`${location} | ${range} | ${numberGuests}`} />

			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						300+ Stays - {range} - for {numberGuests} guests
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">
						Stay in {location}
					</h1>
					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
						<p className="button">More filters</p>
					</div>

					<div>
						{searchData.map(
							({
								id,
								img,
								location,
								title,
								description,
								star,
								price,
								total,
							}) => (
								<InfoCard
									key={id}
									img={img}
									location={location}
									title={title}
									description={description}
									star={star}
									price={price}
									total={total}
								/>
							)
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
