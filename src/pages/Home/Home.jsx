
import Card from "../../components/Card/Card"
import { Store } from "../../context/context"
import { Col, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const HomePage = () => {
    const { countries } = Store()
    const { loading, data } = countries

    return <main>

        <Row gutter={[20,70]}>
            {!loading ?
                data.map((item) => (
                    <Col span={6} key={item.name?.common}>
                        <Card  data={item} />
                    </Col>
                ))
                :
                <Spin indicator={LoadingOutlined} />
            }
        </Row>
    </main>
}

export default HomePage