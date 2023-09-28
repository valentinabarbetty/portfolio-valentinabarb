import "./info.css";
import Typewriter from "typewriter-effect";
const Info = ({ name, biography, show }) => {
  
  return (
   

    !show ? (
      <div className="container-info">
        <div className="animated-typing bio">
          <h1 className="name">Hi there! I'm {name}</h1>
          <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString(biography)
                        .changeDelay(0.5)
                        .start();
                }}
            />
         
        </div>
      </div>
    ) : null
  );
};

export default Info;
