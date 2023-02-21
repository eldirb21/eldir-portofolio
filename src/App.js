import "./App.css";
import { Route, Routes as RoutesProvider } from "react-router-dom";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Opensource from "./pages/opensource";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layouts from "./layouts";
import About from "./pages/about";

function App() {
  return (
    <Provider store={store}>
      <Layouts>
        <RoutesProvider>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/project" element={<Project />} /> */}
          <Route path="/opensource" element={<Opensource />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/about" element={<About />} />
        </RoutesProvider>
      </Layouts>
    </Provider>
  );
}

export default App;
