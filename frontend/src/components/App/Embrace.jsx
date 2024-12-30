// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Motion from "./motion";

const Embrace = () => {
  const [counter, setCounter] = useState(false);

  const data = [
    { id: 1, number: 800, comment: "Happy Customers" },
    { id: 2, number: 12, comment: "Support Services" },
    { id: 3, number: 30, comment: "Access Points" },
    { id: 4, number: "24/7", comment: "Customer Service" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-green-100 to-slate-300 py-16">
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="text-center max-w-7xl mx-auto">
          <Motion>
            <h2 className="text-[30px] md:text-[40px] font-semibold text-green-800 mt-10">
              Why <span className="text-green-800">Embrace</span> Our Network?
            </h2>
          </Motion>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
            {data.map((item) => (
              <Motion key={item.id}>
                <div className="flex flex-col items-center justify-center gap-4 border border-gray-300 p-6 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h2
                    className="text-green-700 text-[40px] font-bold"
                    aria-label={`Stat: ${item.comment}`}
                  >
                    {counter && (
                      <CountUp
                        start={0}
                        end={typeof item.number === "number" ? item.number : 0}
                        delay={0}
                        duration={2.5}
                        suffix={typeof item.number === "number" ? "+" : ""}
                      />
                    )}
                  </h2>
                  <p
                    className="text-[18px] text-gray-600"
                    aria-label={`Description: ${item.comment}`}
                  >
                    {item.comment}
                  </p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Embrace;
