import { ReactNode, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DataDisplay from "./components/DataDisplay";
import MetaData from "./components/MetaDataForm";

export default function App() {
	const [data, setData] = useState<object | ReactNode>({
		name: "john",
		role: "software engineer",
		location: "Tokyo",
		email: "john@whatever.com",
		phone: "1233 1233 123",
		website: "john.com",
	});
	return (
		<>
			<Header />
			<div className="flex w-full m-1 max-h-[2000px]">
				<div className="card rounded-box h-auto p-9 ">
					<MetaData data={data} setData={setData} sectionTitle={"contact"} />
				</div>
				<div className="divider divider-horizontal divider-primary "></div>
				<div className="card bg-slate-100 text-black rounded-box grow p-5 w-[595px] h-[842px]">
					<DataDisplay data={data} />
				</div>
			</div>

			<Footer />
		</>
	);
}
