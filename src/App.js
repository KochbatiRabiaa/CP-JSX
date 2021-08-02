
import './App.css';
import './style.css/style.css';
import imageInSrc from "./imageInSrc.jpg";
/*import ReactPlayer from 'react-player'*/
import myVideo from "./myVideo.mp4";

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

        <h1 className='title red'>Kochbati Rabiaa</h1>

<br / >

<img src={imageInSrc} />

<br / >

<img src="/imageInPublic.jpg" / >

</div>

<video style={{ width: "320", height: "240" }} src={myVideo} controls/>
</div>
  );
}

export default App;
