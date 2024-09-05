import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import Home from './pages/Home'
import Thoughts from './pages/Thoughts'
import BlogPost from './components/BlogPost'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function BlogPostWrapper() {
  const { slug } = useParams();
  return <BlogPost slug={slug ?? ''} />;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/thoughts/:slug" element={<BlogPostWrapper />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  )
}

export default App