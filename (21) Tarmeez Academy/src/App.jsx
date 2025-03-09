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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
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