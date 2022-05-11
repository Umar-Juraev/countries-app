import Footer from './Footer/Footer'
import Header from './Header/Header'
// import SideBar from './SideBar/SideBar'
import { Layout as AntdLayout } from 'antd';

const { 
    Header: AntdHeader,
    Footer: AntdFooter,
    Sider: AntdSider,
    Content: AntdContent } = AntdLayout;


const Layout = ({ children }) => {

    return (
        <AntdLayout>
            {/* <AntdSider><    SideBar /></AntdSider>
            <AntdLayout> */}
                <AntdHeader><Header /></AntdHeader>
                <AntdContent>{children}</AntdContent>
                <AntdFooter><Footer /></AntdFooter>
            {/* </AntdLayout> */}
        </AntdLayout>

    )
}

export default Layout