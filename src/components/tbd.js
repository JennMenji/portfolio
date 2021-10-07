// import React, { useState } from "react";

// function Photolist({ category }) {
//   const [projects] = useState([
//     {
//       name: "Castle Cottage or Cave",
//       image: "commercial",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//     },
//     {
//       name: "Weather Dashboard",
//       image: "commercial",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//     },
//     {
//       name: "Tech Blog",
//       image: "commercial",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//     },

//     {
//       name: "Fruit bowl",
//       image: "food",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
//     },
//   ]);

//   const currentPhotos = photos.filter((photo) => photo.image === image);

//   return (
//     <div>
//       <div className="flex-row">
//         {currentPhotos.map((image, i) => (
//           <img
//             src={require(`../../assets/small/${image}/${i}.jpg`).default}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             key={image.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Photolist;
