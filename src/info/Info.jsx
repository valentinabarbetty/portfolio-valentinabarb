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
