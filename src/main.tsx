import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<div className="m-3">
			<App />
		</div>
	</StrictMode>
);
