// import { ReactNode } from "react";
import { FaMobile, FaLocationDot, FaEnvelope, FaGlobe } from "react-icons/fa6";
// @ts-ignore
export default function DataDisplay({ data }) {
	if(!data) return null;
	if (data) {
		return (
			<>
				<p className="text-end italic font-serif text-slate-300">
					last updated in {' '}
					{new Date().toLocaleString("default", { month: "long" })}{" "}
					{new Date().toLocaleString("default", { year: "numeric" })}
				</p>
				<main className="pt-10 ">
					<h1 className="bg-slate-300 text-4xl w-[80%] text-center h-auto mx-auto">
						{data.name} | <span className="font-script">{data.role}</span>
					</h1>
					<section className="pt-10 flex gap-10 mx-[20%]">
						<p className="flex items-center gap-1">
							<FaLocationDot />
							{data.location}
						</p>
						<p className="flex items-center  gap-1">
							<FaEnvelope />
							{data.email}
						</p>
						<p className="flex flex-row items-center gap-1">
							<FaMobile />
							{data.phone}
						</p>
						<p className="flex items-center gap-1">
							<FaGlobe />
							{data.website}
						</p>
					</section>
				</main>
			</>
		);
	} else {
		return (
			<>
				<h1>Loading....</h1>
			</>
		);
	}
}
