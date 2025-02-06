// // import React from "react";
// // import CBCPropsex1 from "./components/CBCPropsex1";
// // const App=()=>{
// //     return(
// //         <div>
// //             <hr/>
// //             <CBCPropsex1
// //                 username="Sam"
// //                 age={25}
// //                 desig={['developer','tester']}
// //                 userDetails={{city:'hyd',area:'maisammaguda'}}
// //                 sendFun={function(){alert("hi i m from parent component")}}
// //                 />
// //         </div>
// //     )
// // }
// // export default App;
// // @flow
// import React from 'react'
// import FBCPropex1 from './components/FBCPropex1'

// const App = () => {
//   return (
//     <div>
//       <FBCPropex1
//            username="tharun"
//            isLoggedIn={true}
//            hobbies={['roaming','watching movies','travel','studies']}   
//       />
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import ChildProps from './components/ChildProps'
// import PropsChildrenEx from './components/PropsChildrenEx'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenEx username="shankar" company="meta">
//         <h1>this data is passed as props children</h1>
//         <ChildProps/>
//       </PropsChildrenEx>
//     </div>
//   )
// }
// import React from "react";
// import CBCStateEx from "./stateexamples/CBCStateEx";


// const App = () => {
//   return (
//     <div>APP
//       <CBCStateEx/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import FBCStateEx from './stateexamples/FBCStateEx'
const App = () => {
  return (
    <div>
      <FBCStateEx/>
    </div>
  )
}

export default App

