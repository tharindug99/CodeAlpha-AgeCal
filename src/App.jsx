import AgeCalculator from './components/AgeCalculator'
import './index.css'

function App() {
  

  return (
    <>
      <div className='container'>
          <div className='m-10 rounded-xl justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex py-10 text-white'>
            <h1>Age Calculator </h1>
            
          </div>

          <div className='justify-center flex'>
            <p>The Age Calculator is used to calculate the age</p>
          </div>

          <AgeCalculator/>
      </div>
    </>
  )
}

export default App
