import Image from "next/image";
import React, { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import {
	MagnifyingGlassIcon,
	GlobeAltIcon,
	Bars3Icon,
	UserCircleIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import Airbnb_logo from "../assets/Airbnb_Logo.png";
import { useRouter } from "next/router";

export default function Header({ placeholder }) {
	const [searchInput, setSearchInput] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numberGuests, setNumberGuests] = useState(1);
	const router = useRouter();

	const handleSelect = (ranges) => {
		console.log(ranges);
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const search = () => {
		router.push({
			pathname: "/search",
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				numberGuests,
			},
		});
	};

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			{/* Left */}
			<div
				onClick={() => router.push("/")}
				className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src={Airbnb_logo}
					style={{
						objectFit: "contain",
						objectPosition: "left",
					}}
					fill
					alt="logo airbnb"
				/>
			</div>
			{/* Middle */}
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					type={"text"}
					placeholder={placeholder || "Start your search"}
					className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
				/>
				<MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
			</div>
			{/* Right */}
			<div className="flex space-x-4 items-center justify-end text-gray-500">
				<p className="cursor-pointer hidden md:inline-block">
					Become a host
				</p>
				<GlobeAltIcon className="h-6 cursor-pointer" />
				<div className="flex items-center space-x-2 border-2 p-2 rounded-full">
					<Bars3Icon className="h-6 cursor-pointer" />
					<UserCircleIcon className="h-6 cursor-pointer" />
				</div>
			</div>
			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={["#FD5B61"]}
						onChange={handleSelect}
					/>
					<div className="flex items-center border-b mb-4">
						<h2 className="text-2xl flex-grow font-semibold">
							Number of Guests
						</h2>

						<UserIcon className="h-5" />
						<input
							value={numberGuests}
							onChange={(e) => setNumberGuests(e.target.value)}
							min={1}
							type="number"
							className="w-12 pl-2 text-lg outline-none text-red-400"
						/>
					</div>
					<div className="flex">
						<button
							onClick={() => setSearchInput("")}
							className="flex-grow text-gray-500">
							Cancel
						</button>
						<button
							onClick={search}
							className="flex-grow text-red-400">
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
}
