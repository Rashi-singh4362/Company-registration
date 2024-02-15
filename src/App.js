import Navbar from './Navbar/navbar.js'; // Corrected path
import Form from './Form/form.js'; // Corrected path
import Footer from './Footer/footer.js'; // Corrected path
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      {/* You can place other components or content here */}
      <Footer />
    </div>
  );
}


export default App;
