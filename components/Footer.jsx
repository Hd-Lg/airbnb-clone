import React from "react";

export default function Footer() {
	return (
		<footer className="grid grid-cols-1 md:grid-cols-4 pl-72 py-14 bg-gray-100">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">ABOUT</h5>
				<p>How Airbnb work</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Accessibility</p>
				<p>Something</p>
				<p>Something else</p>
				<p>Another thing</p>
				<p>The last thing</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">HOST</h5>
				<p>Program</p>
				<p>Something</p>
				<p>Something else</p>
				<p>Another thing</p>
				<p>The last thing</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Help Center</p>
				<p>Trust & Safety</p>
				<p>Something else</p>
				<p>Another thing</p>
				<p>The last thing</p>
			</div>
		</footer>
	);
}
