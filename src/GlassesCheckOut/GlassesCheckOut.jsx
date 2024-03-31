import React, { useState } from "react";
import glassesJson from "../Data/dataGlasses.json";

export const GlassesCheckOut = () => {
  const [glasses, setGlasses] = useState({
    currentGlasses: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  });

  const changeGlasses = (newGlasses) => {
    setGlasses({
      currentGlasses: newGlasses,
    });
  };

  const renderGlassesList = () => {
    return glassesJson.map((glassesItem, index) => {
      return (
        <img
          onClick={() => {
            changeGlasses(glassesItem);
          }}
          className="ms-2 p-2 border border-width-1"
          style={{ width: "110px", cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
        />
      );
    });
  };

  const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
  from {
    width: 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    width: 150px;
    opacity: 0.7;
    transform: rotate(0deg);
  }
}`;

  const styleGlasses = {
    width: "150px",
    top: "75px",
    right: "60px",
    opacity: "0.7",
    transform: "rotate(0deg)",
    animation: `animChangeGlasses${Date.now()} 2s`,
  };

  const infoGlasses = {
    width: "250px",
    top: "200px",
    left: "273px",
    backgroundColor: "rgba(255,127,0,.5)",
    textAlign: "left",
    height: "105px",
  };

  return (
    <div
      style={{
        backgroundImage: "url(./glassesImage/background.jpg)",
        backgroundSize: "2000px",
        minHeight: "2000px",
      }}
    >
      <style>{keyFrame}</style>
      <div style={{ backgroundColor: "rgba(0,0,0,.8)", minHeight: "2000px" }}>
        <h3
          style={{ backgroundColor: "rgba(0, 0, 0, .3)" }}
          className="text-center text-light p-5"
        >
          TRY OUT GLASSES
        </h3>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col-6">
              <div className="position-relative">
                <img
                  className="position-absolute"
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
                <img
                  className="position-absolute glassesStyles"
                  style={styleGlasses}
                  src={glasses.currentGlasses.url}
                  alt=""
                />
                <div
                  style={infoGlasses}
                  className="position-relative font-weight-bold"
                >
                  <span
                    style={{ color: "#AB82FF", fontSize: "17px" }}
                    className="font-weight-bold"
                  >
                    {glasses.currentGlasses.name}
                  </span>
                  <br />
                  <span style={{ fontSize: "13px", fontWeight: "400" }}>
                    {glasses.currentGlasses.desc}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                style={{ width: "250px" }}
                src="./glassesImage/model.jpg"
                alt="model.jpg"
              />
            </div>
          </div>
        </div>
        {/* the selected glasses */}
        <div className="bg-light container text-center mt-5 d-flex justify-content-center">
          {renderGlassesList()}
        </div>
      </div>
    </div>
  );
};
