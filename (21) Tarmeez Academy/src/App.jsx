import TopTitle from './Components/Top-title/TopTitle.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Post from './Components/Post/Post.jsx';
import SideMenu from './Components/Side-menu/SideMenu.jsx';


function App() {
  return (
    <div>
      <TopTitle />
      <Container>
        <Row className='mt-5 mb-5'>
          <Col lg={6}>
            <Post title="How To Study English" description="this topic show how to study english" />
            <Post title="Best Sales On Steam Games" description="this topic show sales on steam" />
            <Post title="Recover Health In Many Ways" description="this topic show health recover ways" />
          </Col>
          <Col lg={4}>
            <SideMenu />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;