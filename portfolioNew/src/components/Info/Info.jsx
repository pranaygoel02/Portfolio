import React from "react";
import Experience from "../../pages/About/Experience";
import Heading from "../Heading/Heading";

function Info({ heading, data, cols }) {
  
  return (
    <section className="w-full">
      <Heading title={heading}/>
      {data.map((item) => (
        <Experience {...item} />
      ))}
    </section>
  );
}

export default Info;
