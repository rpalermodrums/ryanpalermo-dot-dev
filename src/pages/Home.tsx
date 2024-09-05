import React from 'react';
import DJDeck from '../components/DJDeck';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Ryan Palermo</h1>
      <div className="mb-12">
        <DJDeck width={800} height={150} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Architectural Expertise</h2>
          <p>AI/ML integration. Cloud-native architecture. Distributed systems.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Stack</h2>
          <p>React.js, Node.js, Python, Tensorflow, Pytorch, Docker, Kubernetes, AWS, Azure, GCP</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Leadership</h2>
          <p>Technical architecture. Team leadership. Product design and development.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Hobbies</h2>
          <p>Music composition, performance, production. Programming. Tinkering. Traveling.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;