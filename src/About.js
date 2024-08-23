import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-slate-300 text-indigo-600 font-libre flex flex-col items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div className='max-w-3xl w-full bg-slate-300 shadow-lg rounded-lg p-6 lg:p-12'>
        <h1 className='text-3xl lg:text-4xl font-bungee text-center mb-6'>
          About The Uglee One
        </h1>
        <p className='text-lg lg:text-xl leading-relaxed mb-6'>
          At The Uglee One, we believe that every watch tells a story—a story of
          craftsmanship, precision, and timeless elegance. Founded with a
          passion for horology and a desire to bring the finest timepieces to
          our customers, The Uglee One has grown into a trusted name in watch
          retail. Our journey began with a simple yet profound idea: to offer
          unique, high-quality watches that stand out in a world full of
          ordinary.
        </p>
        <p className='text-lg lg:text-xl leading-relaxed mb-6'>
          The name "The Uglee One" is a playful nod to the beauty of
          imperfection. We believe that true beauty lies in the details, even
          those that are often overlooked. Our carefully curated collection
          features watches that are not just functional but also works of
          art—each with its own character, charm, and story to tell.
        </p>
        <p className='text-lg lg:text-xl leading-relaxed mb-6'>
          Our commitment to excellence is reflected in every aspect of our
          business, from the selection of the finest materials to the
          exceptional customer service we provide. We partner with renowned
          watchmakers and brands that share our dedication to quality, ensuring
          that every watch we offer is a masterpiece in its own right.
        </p>
        <p className='text-lg lg:text-xl leading-relaxed mb-6'>
          At The Uglee One, we are more than just a retailer—we are a community
          of watch enthusiasts who appreciate the artistry and craftsmanship
          behind every timepiece. Whether you are looking for a statement piece,
          a daily companion, or a thoughtful gift, we have something special for
          you. Join us in celebrating the beauty of watches, one tick at a time.
        </p>
        <div className='text-center mt-8'>
          <a
            href='/entry'
            className='inline-block bg-indigo-600 text-slate-300 rounded-full px-8 py-3 text-lg font-bold hover:bg-indigo-400 transition duration-300'
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
