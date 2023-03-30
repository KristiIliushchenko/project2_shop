import './App.css';
import { Footer } from './Components/footer';
import { Header } from './Components/header';
import { Products } from './Components/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
