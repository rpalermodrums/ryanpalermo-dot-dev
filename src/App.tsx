import { useEffect } from "react";
import {
	BrowserRouter,
	Route,
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

const RouteHandler = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const nextRoute = new URLSearchParams(location.search).get("next");
		if (nextRoute) {
			navigate(nextRoute, { replace: true });
		}
	}, [location.search, navigate]);

	return null;
};

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/projects" element={<Projects />} />
		<Route path="/thoughts" element={<Thoughts />} />
		<Route path="/thoughts/:slug" element={<MarkdownView />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="*" element={<Home />} />
	</Routes>
);

const App = () => (
	<BrowserRouter>
		<Layout>
			<RouteHandler />
			<AppRoutes />
		</Layout>
	</BrowserRouter>
);

export default App;
