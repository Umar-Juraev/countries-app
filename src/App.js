import Layout from "./components/Layout/Layout";
import DetailInfo from "./pages/DetailInfo/DetailInfo";
import HomePage from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailInfo />} />
      </Routes>
    </Layout>
  );
}
export default App;
