import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Daniel"
          description="Encerramento de Jujut Kaisen"
          music="Lost in Paradise feat.AKLO"
          url={"https://firebasestorage.googleapis.com/v0/b/videos-6cd15.appspot.com/o/Download.mp4?alt=media&token=39e52303-a9f1-4128-b8b9-85f41deaaca1"}
        />
        <Video
          likes={444}
          messages={555}
          shares={666}
          name="Daniel"
          description="Abertura de Oshi no Ko com memes kkk"
          music="Yoasobi - IDOL"
          url="https://firebasestorage.googleapis.com/v0/b/videos-6cd15.appspot.com/o/Download%20(2).mp4?alt=media&token=a3b5a23a-c55f-4e0a-a305-0b7a28ab7265"
        />

      </div>
    </div>
  );
}

export default App;
