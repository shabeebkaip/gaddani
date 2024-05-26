
import './App.css'
import coverVideo from './assets/cover_film.mp4'
import coverVideoVertical from './assets/cover_video_vertical.mp4'


function App() {


  return (
    <div className='bg-black' >

      <video autoPlay loop id="myVideo" src={coverVideoVertical} className='object-cover w-full h-screen block md:hidden ' />
      <video autoPlay loop id="myVideo" src={coverVideo} className='object-cover w-full h-screen hidden md:block ' />
    </div>
  )
}

export default App
