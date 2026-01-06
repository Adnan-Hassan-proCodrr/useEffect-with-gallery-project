import { React,useEffect, useState } from 'react'

import Button from './Button'



const UseEffectHook = () => {

const [count,setCount] = useState(0);
// this is one wil be run whenever there an element re-Render and once it will run when visit to Ui

    //  useEffect(() => {
    //   console.log("useEffect is Running.....")
    // })
    

    // this one will be run one time as a whole when for the first time you visit to the page bc of Empty dependency[]
   useEffect(() => {
      console.log("useEffect is Running with a empty Dependency [].....")
    },[])
    

    function updateCount() {
      setCount(prev =>prev +1);
   
    }

useEffect(() => {
  
console.log( `the count is : ${count} and useEffect is run `)
  }
, [count])



     
  return (
    <div>
    <h2>Count : {count}</h2>
    <Button btnText="Update Count" onClick={updateCount}/>
    </div>
  )
}

export default UseEffectHook
