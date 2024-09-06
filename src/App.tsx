import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
	useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";
import Contact from "./pages/Contact";
import MarkdownView from "./components/MarkdownView";
import { useEffect } from "react";

function RouteMap() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const nextRoute = searchParams.get("next");

		if (nextRoute) {
			navigate(nextRoute, { replace: true });
		}
	}, [location.search, navigate]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/thoughts" element={<Thoughts />} />
			<Route path="/thoughts/:slug" element={<MarkdownView />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
}

function App() {
	return (
		<Router>
			<Layout>
				<RouteMap />
			</Layout>
		</Router>
	);
}

export default App;
