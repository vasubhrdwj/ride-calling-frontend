import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen pt-8 w-screen flex justify-between flex-col bg-red-400 ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png"
          className="w-15 ml-8"
        />
        <div className="bg-white text-black py-5 px-10">
          <h2>Get Started with RideCalling</h2>
          <button className="text-amber-300">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
