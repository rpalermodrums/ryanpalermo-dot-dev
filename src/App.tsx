import { useEffect } from "react";
import {
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
	useNavigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import MarkdownView from "./components/MarkdownView";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";

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
