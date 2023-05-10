import React from "react";

const MovieCard = ({ myData }) => {
  const { title, body, id } = myData;
  return (
    <div className="card" >
      <div className="card-info">
      <img src="https://assets-global.website-files.com/5dbb30f00775d4350591a4e5/633c5d3fcd492900c9467595_microverse%20infinite%20loops%20(1)%20(1).jpg" width={"100%"} alt="img"/>
        <p className="card-id">{id}</p>
        <p>{body.substr(0, 150)}</p>
        <h2>{title.substr(0, 15)}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
// background-color: #4158D0;
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
