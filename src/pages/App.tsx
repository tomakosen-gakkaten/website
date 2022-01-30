import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "./Home";
import { groupData } from "../utils/groupData";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/website">
          <Route index element={<Home />} />
          {groupData.map((data) => (
            <Route path={data.path} element={data.elm} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
