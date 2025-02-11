// import './App.css'

// function App() {

//   return (
//     <>

//       <h1>Vite </h1>
//       <div className="card">
//         <p>
//           Edit <code >src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//     </>
//   )
// }

// export default App


import { Cafe } from "./components/Cafe"

function App() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <Cafe /> 
    </div>
  )
}

export default App

