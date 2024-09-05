import React from 'react';
import DJDeck from '../components/DJDeck';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Music-Themed Portfolio</h1>
      <p className="text-xl mb-8">
        I'm a staff software engineer with a passion for music. Explore my projects, thoughts, and more!
      </p>
      <div className="mb-8">
        <DJDeck width={800} height={150} />
        <p className="text-center mt-4 text-sm text-gray-600">
          Click on the waves to create ripples! Use the play/pause button to start/stop the animation, and adjust the tempo with the slider.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Latest Project</h2>
          <p>Brief description of your latest project goes here.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Recent Thought</h2>
          <p>Excerpt from your most recent blog post goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;