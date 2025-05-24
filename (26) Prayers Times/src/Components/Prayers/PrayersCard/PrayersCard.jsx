import React from 'react';
import { Card } from "react-bootstrap";
import './PrayersCard.css';


const PrayersCard = ({ element, prayersTime }) => {
  return (
    <div className='prayers-card'>
      <Card className="text-center shadow-sm">
      <Card.Body>
        <div className='prayer-icon'>
          <i>{element.icon}</i>
        </div>
        <Card.Title className="mt-2">{element.nameArabic}</Card.Title>
        <Card.Title className='mt-2'>{prayersTime[element.name]}</Card.Title>
      </Card.Body>
    </Card>
    </div>
  )
}


export default PrayersCard;