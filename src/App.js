
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CreateProject from './pages/CreateProject/CreateProject';
import AddInput from './pages/AddInput/AddInput';
import Result from './pages/Results/Results';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreateProject />}/>
        <Route path="/input/:projectID" element={<AddInput />}/>
        <Route path="/result/:projectID" element={<Result />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
