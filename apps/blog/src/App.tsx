
import { formatDate } from '@myapp/utils'
import './App.css'

function App() {
 

  return (
   <>
   <h1>Welcome to my blog</h1>
    <p>{formatDate(new Date())}</p>
   </>
  )
}

export default App
