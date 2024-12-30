// @ts-nocheck

import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Motion from "./motion";
import { PhoneNumber } from "../../data/data";

// A reusable component for the diamond list item
const DiamondItem = ({ text }) => (
  <p className="p-1 flex gap-2">
    <BsSuitDiamondFill className="text-[#0D874C]" />
    {text}
  </p>
);

const PlansCard = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 md:p-0 mb-7">
      {data.map((item, index) => (
        <Motion key={index}>
          <motion.button
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center bg-white border-solid-[2px] border-gray-900 rounded-lg shadow-lg p-4 w-full md:w-72 cursor-pointer hover:ease-out duration-300 transition"
          >
            <div className="flex-col text-center">
              <h3 className="text-green-700 mt-6 text-lg font-semibold">
                {item.plan}
              </h3>
              <p className="p-2 mb-4 text-gray-600">{item.user}</p>
            </div>
            <hr />
            <div>
              <DiamondItem text={item.otion1} />
              <DiamondItem text={item.otion2} />
              <DiamondItem text={item.otion3} />
              <DiamondItem text={item.otion4} />
              <DiamondItem text={item.otion5} />

              <div className="flex items-center justify-center mt-4">
                <p className="text-[#00000096] text-[25px]">Ksh</p>
                <h2 className="ml-2 text-[40px] font-bold hover:text-green-800">
                  {item.price.toLocaleString()}
                </h2>
              </div>
              <p className="text-center font-serif text-[#00000096]">/month</p>
            </div>

            <a
              href={`https://wa.me/${PhoneNumber}?text=${encodeURIComponent(
                `Hi Zion Generals, I am Interested in ${
                  item.plan
                }, which costs ${item.price.toLocaleString()}/month. Can I get your response please! For more installation guide`
              )}`}
              className="no-underline"
            >
              <h4 className="bg-slate-200 text-green-800 font-bold p-3 px-8 rounded-md border-none hover:text-white hover:bg-green-800 text-center mt-4 mb-10 self-center">
                ORDER THIS PLAN
              </h4>
            </a>
          </motion.button>
        </Motion>
      ))}
    </div>
  );
};

export default PlansCard;
