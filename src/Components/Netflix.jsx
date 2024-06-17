import React from "react";
import demoImages from "../json/demoImages";
import Services from "../Pages/Services";

const Netflix = () => {
  return (
    <div>
      <Services
        key={demoImages[1].id}
        sname={demoImages[1].sname}
        imageSrc={demoImages[1].imgsrc}
        title={demoImages[1].title}
        link={demoImages[1].link}
      />
    </div>
  );
};

export default Netflix;
