import { Button, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import { Store } from "../../../context/context";
import "./Header.css";

const Header = () => {
  const { setDark } = Store();

  return (
    <header>
      <Row>
        <Col span={12}>
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/a"}> a</NavLink>
          <NavLink to={"/b"}> b</NavLink>
        </Col>
        <Col span={12}>
          <Button onClick={() => setDark((prev) => !prev)} type="danger">
            C night
          </Button>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
