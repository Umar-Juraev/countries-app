
import Card from "../../components/Card/Card"
import { Store } from "../../context/context"
import { Col, Row, Spin, Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Modal from "./_components/ModalContent/Modal";
import { useRef, useState } from "react";
import { Button } from "antd/lib/radio";

const HomePage = () => {
    const [visible, setVisible] = useState(false)
    const { countries, setCountry, ref, searchValue,sortedData } = Store()
    const { loading, data } = countries

    const handleVisible = () => {
        setVisible(!visible)
    }
    const styledSpinner = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        tranform: 'translate(-50% -50%)',

    }

    const padding = {
        padding: '20px'
    }
    return <main>


<select name="" id="" >

    <option value="">name</option>
    <option value="">currency</option>
    <option value="">region</option>
</select>


        <Row style={padding}>
            <Col span={20}>
                <Button onClick={sortedData}>A-Z</Button>
            </Col>
            <Col span={4}>
                <Input.Search ref={ref} onChange={searchValue} loading={loading} />
            </Col>
        </Row>

        <Row gutter={[20, 70]}>
            {!loading ?
                data.map((item) => (
                    <Col span={6} key={item.name?.common}>
                        <Card handleVisible={handleVisible} setCountry={setCountry} data={item} />
                    </Col>
                ))
                :
                <Spin style={styledSpinner} indicator={LoadingOutlined} />
            }
        </Row>

        <Modal visible={visible} handleVisible={handleVisible} />
    </main>
}

export default HomePage