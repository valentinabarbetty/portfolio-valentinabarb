import "./info.css";
import Typed from "react-typed";
const Info = ({ name, biography, show }) => {
  return (
    // <div className="container-info">
    //   <div>
    //     <h1 className="name">Hi there! I'm {name}</h1>
    //     <p className="bio">{biography}</p>
    //   </div>
    // </div>

    !show ? (
      <div className="container-info">
        <div className="animated-typing bio">
          <h1 className="name">Hi there! I'm {name}</h1>

          <Typed
            strings={[biography]}
            typeSpeed={80}
            // backSpeed={100}
            // loop
          />
        </div>
      </div>
    ) : null
  );
};

export default Info;
