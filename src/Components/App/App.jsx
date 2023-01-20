import './App.scss'
import Navbar from '../Navabar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Sidebar isFooter={false}/>
      <Content/>
    </div>
  )
}

export default App
