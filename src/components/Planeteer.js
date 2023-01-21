import React, { useState } from "react";

function Planeteer({planeteer}) {

  const [bio, setBio] = useState(true)

  const currentYear = new Date().getFullYear()

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={() => setBio(bio => !bio)}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{bio? planeteer.bio : planeteer.quote}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>Age: {currentYear - planeteer.born}</p>
            <p>
              {
                planeteer.fromUSA ? "USA-based" : "Working Oversees"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
