import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";


function App() {


  return (
    <div className="">
      
      <Header/>
      <Routes>
        <Route path="/" element={''}/>

        

        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
