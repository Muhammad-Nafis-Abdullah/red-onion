import { Navigate, Route, Routes } from "react-router-dom";
import Breakfast from "./components/Breakfast";
import Dinner from "./components/Dinner";
import Header from "./components/Header";
import Lunch from "./components/Lunch";
import NotFound from "./components/NotFound";


function App() {


  return (
    <div className="">
      
      <Header/>
      <Routes>
        <Route path="/home" element={<Navigate to='/'/>}/>
        <Route path="/" element={''}/>
        <Route path="/breakfast" element={<Breakfast/>}/>
        <Route path="/lunch" element={<Lunch/>}/>
        <Route path="/dinner" element={<Dinner/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
