
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    
<Navbar title="Shivam TextUtils" aboutText="About Us"></Navbar>
<div className="container">
<TextForm heading="Enter Your Text to analyze"/>
</div>
    </>
  );
}

export default App;
