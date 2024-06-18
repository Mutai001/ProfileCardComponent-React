import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <ProfileCard 
        name="Cyrus Kimutai"
        age={23}
        profilePicture="https://avatars.githubusercontent.com/u/77490521?v=4"
        bio="I am a software developer"
      />
      <ProfileCard 
        name="Cyrus Kimutai"
        age={23}
        profilePicture="https://avatars.githubusercontent.com/u/77490521?v=4"
        bio="I am a software developer"
      />
      <ProfileCard 
        name="Cyrus Kimutai"
        age={23}
        profilePicture="https://avatars.githubusercontent.com/u/77490521?v=4"
        bio="I am a software developer"
      />
    </div>
    </>
  )
}

export default App
