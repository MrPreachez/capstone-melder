
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreateForm />}/>
        <Route path="/input/:inputId" element={<AddInput />}/>
        <Route path="/result/:resultId" element={<Result />} /> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
