import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Category = ({ allCategory, filterByCategory }) => {


  return (
    <Row className='my-2 mb-5'>
      <Col sm="12" className='d-flex justify-content-center'>
        {allCategory.length >= 1 ? (allCategory.map((cat, index)=> (
          <button onClick={()=> filterByCategory(cat)} className='btn btn-success mx-1' key={index}>{cat}</button>
        ))) : <h2>No Categories For Now</h2>}
      </Col>
    </Row>
  )
}




export default Category;