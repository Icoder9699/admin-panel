import { Col, Row } from "antd";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
// admin page 
import Create from "./pages/admin/create"; 
import Index from "./pages/admin/index"; 


function App() {
  return (
    <Row>
      <Col
        span={4}
      >
        <NavBar/>
      </Col>
      <Col
        span={20}
      >
        <Routes>
          <Route path='auth' element={<AuthPage/>}/>
          <Route path='about' element={<AboutPage/>} />
          <Route path='admin/create' element={<Create/>} />
          <Route path='admin/index' element={<Index/>} />
        </Routes>
      </Col>
    </Row>
  );
}

export default App;
