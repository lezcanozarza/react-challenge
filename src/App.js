import "./app.css";

//components
import Header from "./components/Header/Header.jsx";
import StolenBikesMain from "./components/StolenBikesMain/StolenBikesMain.jsx";
import StolenBikeDetailContainer from "./components/StolenBikesMain/StolenBikeDetail/StolenBikeDetailContainer.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

//Routing
import { BrowserRouter, Route } from "react-router-dom";

//context
import { DataProvider } from "./services/Context.js";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={StolenBikesMain} />
        <Route path="/case/:bikeId" component={StolenBikeDetailContainer} />
        <Route path="/home/search" component={StolenBikesMain} />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
