import Card from "../../components/Card/Card";
import { Store } from "../../context/context";
import { Col, Row, Spin, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Modal from "./_components/ModalContent/Modal";
import { useState } from "react";
import { Button } from "antd/lib/radio";
import useRequest from "../../hooks/useRequest";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(undefined);
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState("name");
  const [country, setCountry] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(25);
  const {
    dark,
    darkTheme
    // countries, setCountry, ref, searchValue, sortedData
  } = Store();
  //   const { loading, data } = countries

  const [loading, data, error, setData] = useRequest(
    search ? `/${categories}/${search}` : "/all"
  );

  const handleSearchValue = (e) => {
    setValue(e.target.value);
    if (e.target.value.trim() === "") {
      return setSearch(undefined);
    }
  };

  const handeSetCategory = (e) => {
    setCategories(e.target.value);
  };

  const handleSubmit = () => {
    setSearch(value);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const sortedData = () => {
    const sorted = data.data.sort((a, b) =>
      a.name?.common < b.name?.common ? -1 : 1
    );
    setData({ data: sorted });
  };

  const indexOfLastData = currentPage * prevPage;
  const indexOfFirstData = indexOfLastData - prevPage;
  const currentData = data.data?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const styledSpinner = {
    position: "fixed",
    top: "50%",
    left: "50%",
    tranform: "translate(-50% -50%)",
  };

  const padding = {
    padding: "20px",
  };

  return (
    <main style={dark ? darkTheme : null}>
      <select onChange={(e) => handeSetCategory(e)} name="" id="">
        <option value="name">name</option>
        <option value="currency">currency</option>
        <option value="region">region</option>
        <option value="lang">lang</option>
      </select>

      {error && <h3>notogri ma'lumot kiritildi</h3>}

      <Row style={padding}>
        <Col span={20}>
          <Button onClick={sortedData}>A-Z</Button>
        </Col>
        <Col span={4}>
          <Input.Search
            onChange={(e) => handleSearchValue(e)}
            onSearch={handleSubmit}
          />
        </Col>
      </Row>

      <Row gutter={[20, 70]}>
        {!loading ? (
          currentData.map((item) => (
            <Col span={6} key={item.name?.common}>
              <Link to={`/${item.name?.common.toLowerCase()}`}>
                <Card
                  handleVisible={handleVisible}
                  setCountry={setCountry}
                  data={item}
                />
              </Link>
            </Col>
          ))
        ) : (
          <Spin style={styledSpinner} indicator={LoadingOutlined} />
        )}
      </Row>

      <Pagination
        data={data.data?.length}
        paginate={paginate}
        prevPage={prevPage}
      />
      <Modal visible={visible} handleVisible={handleVisible} data={country} />
    </main>
  );
};

export default HomePage;
