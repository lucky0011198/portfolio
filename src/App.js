import "./App.css";
import { Route, Routes, useNavigate} from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
import Dashboard from "./Component/Dashboard";
import Init from "./Component/Init";




function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes >
        <Route path="/" element={<Dashboard/>} />
        <Route path="/init" element={<Init/>} />
      </Routes>
    </NextUIProvider>
  );
}


export default App;
