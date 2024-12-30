// @ts-nocheck

import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";
import { PiVideoCameraFill } from "react-icons/pi";
import Motion from "./motion";

const PlanOptions = () => {
  return (
    <div className="flex flex-col w-[70%] justify-center mt-10 items-center mb-10">
      <div className="flex items-center justify-center flex-col md:w-[65%] w-[80%] mb-7">
        <Motion>
          <h2 className="text-[30px]">All Plans Include</h2>
        </Motion>
        <Motion>
          <p className="text-center mt-4">
            Our basic or essential offerings are the same across all
            subscription levels. However, there might be variations in terms of
            additional features, usage limits, or premium services available at
            higher-tier plans.
          </p>
        </Motion>
      </div>
      <Motion>
        <div className="md:flex flex-row p-4 justify-center gap-10 text-center">
          <div className="flex gap-4 items-center justify-center ">
            <BiSolidBarChartAlt2 size={150} className="text-green-800" />
            <div className="mt-8">
              <h3 className=" mb-2 border-b-2 border-green-800">
                Upgrade And Downgrade
              </h3>

              <p className="text-center mt-2">
                Want to modify your plan, increase or decrease it's speed,
                features and other aspects.
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-4 items-center">
            <FaDatabase size={150} className="text-green-800" />
            <div className="mt-8">
              <h3 className=" mb-2 border-b-2 border-green-800">
                No Data Limits
              </h3>

              <p className="text-center mt-2">
                There are no restrictions on the amount of data a customer can
                use within a specified period (typically a month).
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <PiVideoCameraFill size={150} className="text-green-800" />
            <div className="mt-8">
              <h3 className=" mb-2 border-b-2 border-green-800">
                Video Streaming
              </h3>

              <p className="text-center mt-2">
                Watch videos live and streaming without having to download the
                entire file beforehand.
              </p>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  );
};

export default PlanOptions;
