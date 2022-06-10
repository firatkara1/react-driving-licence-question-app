// import React, { useState } from "react";

// function CategoryModal({ categoryId, handleClick, modal, title }) {
//console.log("categoryId in modalpage: ", categoryId.categoryName);
//   categoryId.forEach((cat) => {
//     console.log("cat.categoryName; ", cat.categoryName);
//   });

//   return (
// <div className="modalBackground">
//   <div className="modalContainer">
//     <div className="titleCloseBtn">
//       <button>x</button>
//     </div>
//     <div className="title">
//       <h1>Test Sec</h1>
//     </div>
//     <div className="modalBody">
// {categoryId.map((cat) => (
//   <h4>{cat.categoryName}</h4>
// ))}
//     </div>
//   </div>
// </div>

//     <>
//       {modal && (
//         <div className="modal">
//           <div onClick={handleClick} className="overlay"></div>
//           <div className="modal-content">
//             <h3>{title}</h3>
// {categoryId?.map((cat) => (
//   <div>
//     <h4>{cat.categoryName}</h4>
//     <button>Sec</button>
//   </div>
// ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default CategoryModal;
