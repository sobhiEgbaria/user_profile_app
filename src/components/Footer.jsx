import React from "react";

const Footer = () => {
  return (
    <section className="text-center">
      <p className="text-lg mb-4 text-white">
        No more users available. You have reached the end of the list.
      </p>
      <button className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-2 px-4 rounded">
        Reset and Start Over
      </button>
    </section>
  );
};

export default Footer;
