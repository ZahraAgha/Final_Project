

// import React from "react";
// import Collections from "./Collections";
// import Price from "./Price";
// import Material from "./Material";
// import Color from "./Color";
// import Size from "./Size";
// import Availability from "./Availability";

// const LeftSideBar = () => {
//   return (
//     <div>
//       <Collections />
//       {/* <Price /> */}
//       <Material />
//       {/* <Color /> */}
//       <Size />
//       <Availability />
//     </div>
//   );
// };

// export default LeftSideBar;



// import React from "react";
// import Collections from "./Collections";
// import Material from "./Material";
// import Size from "./Size";
// import Availability from "./Availability";

// const LeftSideBar = ({ setSelectedCategory }) => {
//   return (
//     <div>
//       <Collections setSelectedCategory={setSelectedCategory} />
//       <Material />
//       <Size />
//       <Availability />
//     </div>
//   );
// };

// export default LeftSideBar;





import React from "react";
import Collections from "./Collections";
import Material from "./Material";
import Size from "./Size";
import Availability from "./Availability";

const LeftSideBar = ({ setSelectedCategories }) => {
  return (
    <div>
      <Collections setSelectedCategories={setSelectedCategories} />
      <Material />
      <Size />
      <Availability />
    </div>
  );
};

export default LeftSideBar;
