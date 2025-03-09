import "./Prayers.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import PrayersCard from "./PrayersCard/PrayersCard.jsx";

const Prayers = () => {

  // Component States
  const prayersObject = [
    {
      name: "Fajr",
      nameArabic: "الفجر",
      icon: <i className="fa-solid fa-moon"></i>,
    },
    {
      name: "Dhuhr",
      nameArabic: "الظهر",
      icon: <i className="fa-solid fa-sun"></i>,
    },
    {
      name: "Asr",
      nameArabic: "العصر",
      icon: <i className="fa-solid fa-cloud-sun"></i>,
    },
    {
      name: "Maghrib",
      nameArabic: "المغرب",
      icon: <i className="fa-solid fa-cloud"></i>,
    },
    {
      name: "Isha",
      nameArabic: "العشاء",
      icon: <i className="fa-solid fa-cloud-moon"></i>,
    },
  ];

  const [card] = useState(prayersObject);

  // Component States
  const [prayersTime, setPrayersTime] = useState({});


  // Get Prayers Times
  const getPrayersTimes = async () => {
    const response = await axios.get("https://api.aladhan.com/v1/timingsByCity/03-09-2024?city=Eg&country=Cairo");
    setPrayersTime(response.data.data.timings);
  }


  // UseEffect
  useEffect(()=> {
    getPrayersTimes();
  }, [])


  return (
    <div className="prayers mt-5 mb-5">
      <Container>
        <Row className="justify-content-center">
          {card.length >= 1 ? (
            card.map((element, index) => (
              <Col sm={12} md={6} lg={2} key={index}>
                <PrayersCard element={ element } prayersTime={ prayersTime } />
              </Col>
            ))
          ) : (
            <h2 className="text-center">No Data Available</h2>
          )}
        </Row>
      </Container>
    </div>
  );
};


export default Prayers;