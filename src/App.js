import { Route } from "express";
import "./App.css";
import Header from "./Components/Header/Header";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Route path='/signin'  ></Route>
      <Route path='/signup' element={<SignUp />} ></Route>
      <Header />
    </div>
  );
}

export default App;
