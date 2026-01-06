import React from 'react'
import UseEffectHook from './components/useEffectHook'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <>
      <h1>useEffect HOOk use to handle side effect like data fetching...</h1>
      <p>useEffect can be run one when it have no dependencies || it can be run once when it have 
      empty [ ] dependeny  || it can be again and again by the change in the dependecy [count]....</p>

      <hr />

      <UseEffectHook/>

      <hr />
      <Gallery/>

    </>
  )
}

export default App
