
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import CreateProject from './pages/CreateProject/CreateProject';
import AddInput from './pages/AddInput/AddInput';
import Results from './pages/Results/Results';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreateProject />}/>
        <Route path="/input/:projectID" element={<AddInput />}/>
        <Route path="/result/:projectID" element={<Results />} /> 
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
