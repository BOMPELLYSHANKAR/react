import React,{useState} from 'react'

const FBCStateEx = () => {
//     const data=React.useState(100)
// console.log(data[0])
// console.log(data[1])
const [value,setvalue]=useState("MRU")
let changeName=()=>{
    setvalue("Malla Reddy University")
}
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changeName}>change state</button>
      
    </div>
  )
}

export default FBCStateEx

