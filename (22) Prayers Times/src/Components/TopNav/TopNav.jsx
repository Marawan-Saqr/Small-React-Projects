import { Container, Col, Row } from "react-bootstrap";
import "./TopNav.css";

const TopNav = ({ selectedCity, setSelectCity }) => {

  const cities = [
    { name: "القاهره", value: "Cairo" },
    { name: "الاسكندريه", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "اسوان", value: "Aswan" },
    { name: "الاقصر", value: "Luxor" },
  ];

  return (
    <div className="top-nav mt-3">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={2}>
            <div className="logo">
              <img src="./logo.png" className="img-fluid" />
            </div>
          </Col>
          <Col lg={4}>
            <label style={{ fontWeight: "bold", marginLeft: "5px" }} htmlFor="city">اختر المدينة</label>
            <select id="city" value={selectedCity} onChange={(e) => setSelectCity(e.target.value)}>
              {cities.map((city, index) => (
                <option key={index} value={city.value}>{city.name}</option>
              ))}
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopNav;