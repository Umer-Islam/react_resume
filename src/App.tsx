import { ReactNode, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DataDisplay from "./components/DataDisplay";
import MetaData from "./components/MetaDataForm";
import ExperienceDisplay from "./components/ExperienceDisplay.tsx";
import ExperienceForm from "./components/ExperienceForm.tsx";

export default function App() {
	const [data, setData] = useState<object | ReactNode>({
		name: "john",
		role: "software engineer",
		location: "Tokyo",
		email: "john@whatever.com",
		phone: "1233 1233 123",
		website: "john.com",
		summary:
			"Passionate and detail-oriented software developer with 5+ years of experience building scalable web and mobile applications. Proficient in modern frameworks like React, Node.js, and Django. Skilled in translating complex requirements into efficient, maintainable code. Strong background in Agile development, DevOps practices, and CI/CD pipelines. Committed to continuous learning and delivering high-quality, user-focused solutions.",
		education: {
			institute: "univeristy of abc",
			degree: "BS in Computer Science",
		},
		experience: {
			1: {
				title: "software enginner",
				company: "abc",
				summary:
					"Reduced time to render user buddy lists by 75% by implementing a prediction algorithm.Integrated iChat with Spotlight Search by creating a tool to extract metadata from saved chat transcriptsand provide metadata to a system-wide search database.Redesigned chat file format and implemented backward compatibility for search",
			},
			2: {
				title: "software enginner",
				company: "abc",
				summary:
					"Reduced time to render user buddy lists by 75% by implementing a prediction algorithm.Integrated iChat with Spotlight Search by creating a tool to extract metadata from saved chat transcriptsand provide metadata to a system-wide search database.Redesigned chat file format and implemented backward compatibility for search",
			},
			3: {
				title: "software enginner",
				company: "abc",
				summary:
					"Reduced time to render user buddy lists by 75% by implementing a prediction algorithm.Integrated iChat with Spotlight Search by creating a tool to extract metadata from saved chat transcriptsand provide metadata to a system-wide search database.Redesigned chat file format and implemented backward compatibility for search",
			},
		},
		projects: {
			1: {
				title: "made an appointment system for academic activies",
				summary: "",
			},
			2: {
				title: "made an appointment system for academic activies",
				summary: "",
			},
			3: {
				title: "made an appointment system for academic activies",
				summary: "",
			},
		},
		expertise: {
			list: "javascript, react, nodejs, mongodb, postges, primsa, django",
		},
	});
	return (
		<>
			<Header />
			<div className="flex w-full m-1 max-h-[2000px]">
				<div className="card rounded-box h-auto p-9 ">
					<MetaData data={data} setData={setData} sectionTitle={"contact"} />
					<ExperienceForm data={data} setData={setData} sectionTitle={"Contact"} />
				</div>
				<div className="divider divider-horizontal divider-primary "></div>
				<div className="card bg-slate-100 text-black rounded-box grow p-5 w-[595px] h-[842px]">
					<DataDisplay data={data} />
					<ExperienceDisplay/>
					<div className="h-0.5 w-[80%] mx-auto bg-black my-10"></div>
				</div>
			</div>

			<Footer />
		</>
	);
}
