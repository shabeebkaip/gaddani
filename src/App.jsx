import './App.css';
import coverVideo from './assets/cover_film.mp4';
import coverVideoVertical from './assets/cover_video_vertical.mp4';

function App() {
  return (
    <div className='bg-black'>
      <>
        <video autoPlay muted loop id="myVideo" className='object-cover w-full h-screen block md:hidden' >
          <source src={coverVideoVertical} type="video/mp4" />
        </video>
        <video autoPlay muted loop id="myVideo" className='object-cover w-full h-screen hidden md:block' >
          <source src={coverVideo} type="video/mp4" />
        </video>
      </>
    </div>
  );
}

export default App;