// import React from "react";
// import { Html, Text } from "@react-three/drei";

// const Info = ({ nombre, biografia }) => {
//   return (

//       <div>
//         <h3 className="name text-box">Hi there! I'm {nombre}.</h3>
//         <p className="bio text-box">{biografia}.</p>
//       </div>

//   );
// };

// export default Info;

import "./info.css";

const Info = ({ name, biography }) => {
  return (
    <div className="container-info">
      <div>
        <h1 className="name">Hi there! I'm {name}</h1>
        <p className="bio">{biography}</p>
      </div>
    </div>
  );
};

export default Info;
