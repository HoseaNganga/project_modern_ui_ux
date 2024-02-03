import "./App.css";
import { Brand, CTA, NavBar } from "./components";
import {
  About,
  Blog,
  Footer,
  Features,
  Header,
  Possibility,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <About />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
