import './App.css';
import Header from "./components/Header/Header";
import WhyWeComponent from "./components/WhyContainer/WhyContainer";
import TradeSecurely from "./components/TradeSecuraly/TradeSecurely";
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="App ">
      <Header/>
      <WhyWeComponent/>
      <TradeSecurely />
      <Features/>

    </div>
  );
}

export default App;
