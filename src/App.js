import './App.css';
import Header from "./components/Header/Header";
import WhyWeComponent from "./components/WhyContainer/WhyContainer";
import TradeSecurely from "./components/TradeSecuraly/TradeSecurely";
import Features from "./components/Features/Features";
import StartMining from "./components/StartMining/StartMining";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App ">
      <Header/>
      <WhyWeComponent/>
      <TradeSecurely />
      <Features/>
      <StartMining/>
      <Footer/>


    </div>
  );
}

export default App;
