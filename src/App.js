import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="main">
       <Topbar />
     <Dashboard/>
      </div>
    </div>
  );
}

export default App;
