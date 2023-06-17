import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './index.css';
import './index.css';



function App() {
  return (
    <div style={{
      backgroundColor:"#1F2933"
    }} >
      <Navbar />
      <div>
        <Sidebar />
        <div style={{
          width: "85%",
          right: "0",
          position: "absolute",
          backgroundColor: "green",
          padding: "10px"
        }}

          className="text-red"
        >body</div>
      </div>



      <Footer />

    </div>
  );
}

export default App;
