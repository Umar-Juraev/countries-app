import { Col, Row } from "antd";

const Pagination = ({ data, paginate, prevPage }) => {
  const pagination = [];

  for (let i = 0; i < Math.ceil(data / prevPage); i++) {
    pagination.push(i + 1);
  }

  return (
    <Row gutter={10}>
      {pagination.map((item) => (
        <Col onClick={() => paginate(item)} key={item}>
          {item}
        </Col>
      ))}
    </Row>
  );
};

export default Pagination;
