import { Navbar, Welcome, Footer, Services} from "./components";
import './styles/Global.scss';
import './styles/App.scss';
import Underline from "./components/Underline";

const App = () => (
  <div className="app">
    <Navbar />
    <Welcome />
    <Services />
    <Footer />
  </div>
);

export default App;
