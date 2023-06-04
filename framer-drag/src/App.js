import './App.css';
import FormsGoogle from './components/FormsGoogle';
// import CardsGrabbing from './components/CardsGrabbing';
import FramerMotion from './components/FramerMotion';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <br />
      <FramerMotion />
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
        Button
      </button>

      <FormsGoogle />
    </>
  );
}

export default App;
