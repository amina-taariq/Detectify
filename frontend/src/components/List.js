import React from 'react'
import { GiDandelionFlower } from "react-icons/gi";
import { GiVanillaFlower } from "react-icons/gi";
import { GiFlowerTwirl } from "react-icons/gi";
import { PiArrowArcRight } from "react-icons/pi";
const List = () => {
  return (
    <div
      className="flex flex-col items-center flex-wrap gap-20  justify-center py-10 px-10 min-h-screen"
      style={{ overflow: "visible", flex: "none", width: "100%" }}>
      <div className="flex flex-col w-4/5">
        <div className="w-full flex flex-row gap-20">
          <GiDandelionFlower
            size={100}
            // style={{ color: "#abd4b5" }}
          />
          <GiVanillaFlower
            size={100}
            //style={{ color: "#abd4b5" }}
          />
          <GiFlowerTwirl
            size={100}
            //  style={{ color: "#abd4b5" }}
          />
          <GiDandelionFlower
            size={100}
            //style={{ color: "#abd4b5" }}
          />
          <GiVanillaFlower
            size={100}
            //  style={{ color: "#abd4b5" }}
          />
          <GiFlowerTwirl
            size={100}
            // style={{ color: "#abd4b5" }}
          />
          <GiDandelionFlower
            size={100}
            // style={{ color: "#abd4b5" }}
          />
        </div>
      </div>
      <div className="flex flex-col w-2/5 gap-20 ">
        <div>
          <ul>
            <li className="pb-8">
              <div className="flex flex-row bg-bgColor gap-14 p-2 px-6 justify-between">
                <div className="flex flex-row gap-4">
                  <div>
                    <GiFlowerTwirl size={40} />
                  </div>
                  <div>
                    <h3 className="font-bold">6 Plant Types</h3>
                    <p>Covering a broad spectrum</p>
                  </div>
                </div>
                <div className="right-0">
                  <PiArrowArcRight size={40} />
                </div>
              </div>
            </li>
            <li className="pb-8">
              <div className="flex flex-row  bg-bgColor gap-14 p-2 px-6 justify-between">
                <div className="flex flex-row gap-4">
                  <div>
                    <GiVanillaFlower size={40} />
                  </div>
                  <div>
                    <h3 className="font-bold">10 Disease Detection</h3>
                    <p>Wide-ranging diagnostic prowess</p>
                  </div>
                </div>
                <div className="right-0">
                  <PiArrowArcRight size={40} />
                </div>
              </div>
            </li>
            <li className="pb-8">
              <div className="flex flex-row  bg-bgColor gap-14 p-2 px-6 justify-between">
                <div className="flex flex-row gap-4">
                  <div>
                    <GiDandelionFlower size={40} />
                  </div>
                  <div>
                    <h3 className="font-bold">Instant Results</h3>
                    <p>No more waiting around</p>
                  </div>
                </div>
                <div className="right-0">
                  <PiArrowArcRight size={40} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List