import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

import { MapPinIcon } from "@heroicons/react/24/solid";

import { searchData } from "../data/exploreData";

export default function MapScreen() {
	const [selectedLocation, setSelectedLocation] = useState({});

	// Transform searchData into the object needed for geolib:
	// {latitude: xxx, longitude: yyy}
	const coordinates = searchData.map(({ long, lat }) => ({
		longitude: long,
		latitude: lat,
	}));

	// We have a group of items display on the map. We want to show all of them by showing the center of the (that includes the items).
	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		longitude: center.longitude,
		latitude: center.latitude,
		zoom: 11,
	});

	return (
		<Map
			mapStyle={"mapbox://styles/user-0124324/cla8k2ngy002e15o2dmljbyaz"}
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onMove={(e) => setViewport(e.viewState)}>
			{searchData.map((result) => (
				<div key={result.id}>
					<Marker latitude={result.lat} longitude={result.long}>
						<p
							onClick={() => setSelectedLocation(result)}
							className="cursor-pointer"
							aria-label="map-pin"
							role="img">
							<MapPinIcon className="h-8 text-white" />
						</p>
					</Marker>
					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</Map>
	);
}
