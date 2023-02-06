import Box from "./Box";
import View from "./View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Box />
            </>
          }
        ></Route>
        <Route
          path="/details"
          element={
            <>
              <View />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
