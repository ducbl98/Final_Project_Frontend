import "./App.css";
import { Routes ,Route } from 'react-router-dom';
import Home from "./features/Home";
import Headers from "./components/Headers";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
        <Layout>
            <Header className="header"><Headers/></Header>
            <Content>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </div>
  );
}

export default App;
