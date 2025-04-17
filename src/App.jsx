import { useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./App.css";
import SignUp from "./components/signUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="min-vh-100 d-flex flex-column">
        <header>
          <Navbar />
        </header>
        <main className="flex-fill">
          <SignUp />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
