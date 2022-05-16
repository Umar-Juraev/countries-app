import { Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const DetailInfo = () => {
  const { id } = useParams();
  const [loading, data] = useRequest(`/name/${id}`);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <ul>
      <Button onClick={goBack}>go back</Button>

      {!loading ? (
        <>
          <li>
            <iframe src={data.data[0].maps.googleMaps} />
          </li>
          <li>
            <img src={data.data[0].flags.png} alt={data.data[0].name?.common} />
          </li>
          <li>{data.data[0].name?.common}</li>
          <li>{data.data[0].region}</li>
          <li>{data.data[0].subregion}</li>
          <li>{data.data[0].capital[0]}</li>
        </>
      ) : (
        <p>...loading</p>
      )}
    </ul>
  );
};

export default DetailInfo;
