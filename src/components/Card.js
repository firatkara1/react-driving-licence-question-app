import React from "react";

// function Card(props) {
//   return (
//     <div className="card" onClick={props.handleClick}>
//       <div className="card-image img-1"></div>
//       <h3>{props.title}</h3>
//       <p>{props.desc}</p>

//     </div>
//   );
// }
// function Card(props) {
//   return (
//     <div className="card" onClick={props.handleClick}>
//       <div className="card-image img-1"></div>
//       <h3>{props.title}</h3>
//       <p>{props.desc}</p>
//     </div>
// https://source.unsplash.com/1600x900/?nature
//   );
// }
function Card(props) {
  return (
    // <div className="card">
    //   <div className="card-details">
    //     <div className="card-image">
    //       <img src={props.img} alt="category" />
    //     </div>
    //     <p className="card-title">{props.title}</p>
    //     <p className="card-desc">{props.desc}</p>
    //   </div>
    //   <div className="card-footer">
    //     <button onClick={props.handleClick} className="card-button">
    //       Devam
    //     </button>
    //   </div>
    // </div>

    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={props.img} alt="category" />
        </div>
        <div className="card-desc">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <div className="card-button">
            <button onClick={props.handleClick} className="card-btn">
              {" "}
              Devam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
