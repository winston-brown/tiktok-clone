import './App.css';
import Video from './Video';
//import Video from './Video';
function App() {
  return (
    <div className="app">
      {/* app container */}
      {/* videos */}
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
