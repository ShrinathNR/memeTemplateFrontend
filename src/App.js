import './App.css';
import AllTemplates from './components/AllTemplates';
import UploadTemplate from './components/UploadTemplate'
function App() {
  return (
    <div className="App">
      <h1>meme template</h1>
      <UploadTemplate />
      <AllTemplates />
    </div>
  );
}

export default App;
