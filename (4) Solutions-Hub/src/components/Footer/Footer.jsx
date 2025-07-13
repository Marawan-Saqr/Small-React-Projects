import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer" style={{backgroundColor: 'rgb(20, 20, 20)', padding: '40px 0px'}}>
        <div className="container">
          <h1 style={{color: 'white', paddingBottom: '20px', textTransform: 'uppercase'}}>Marketing Solution Agency</h1>
          <div className="row">
            <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
              <div className="box">
                <ul>
                  <h3>Quick Links</h3>
                  <li>Home</li>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>Visit Us</li>
                  <li>Order Request</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
              <div className="box">
                <ul>
                  <h3>Help Links</h3>
                  <li>Home</li>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>Visit Us</li>
                  <li>Order Request</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
              <div className="box">
                <ul>
                  <h3>Social Links</h3>
                  <li>Home</li>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>Visit Us</li>
                  <li>Order Request</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
              <div className="box">
                <ul>
                  <h3>Another Links</h3>
                  <li>Home</li>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>Visit Us</li>
                  <li>Order Request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;