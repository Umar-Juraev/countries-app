import { Card as AntdCard, Button, Row } from "antd";
import { Store } from "../../context/context";

const Card = ({ data, handleVisible, setCountry }) => {
  const { dark, darkTheme } = Store();
  const handleCard = (data) => {
    handleVisible();
    setCountry(data);
  };

  return (
    <AntdCard
      style={dark ? darkTheme : null}
      title={data.name?.common}
      hoverable
      cover={<img alt="example" style={{ height: 180 }} src={data.flags.png} />}
    >
      <ul>
        <li> Poytaxti: {data.capital}</li>
        <li>
          {" "}
          Tili:{" "}
          {Object.values(data?.languages !== undefined && data?.languages).map(
            (item) => ` ${item}`
          )}
        </li>
        <li> Qitasi: {data.continents}</li>
      </ul>
      <Row justify={"end"}>
        <Button type={"primary"} onClick={() => handleCard(data)}>
          Batafsil ma'lumot
        </Button>
      </Row>
    </AntdCard>
  );
};
export default Card;
