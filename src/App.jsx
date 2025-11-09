import { useState } from 'react'
import {Box} from '@mui/material';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{
      textAlign: 'center', 
      backgroundColor: '#282c34', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: 'calc(10px + 2vmin)'}}
    >
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Box>
  )
}

export default App
