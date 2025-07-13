import './Login.css';
import contactPhoto from './contact-us.jpeg';

const Login = () => {
  return (
    <div>
      <div className="login pt-4 pb-4" style={{backgroundColor: 'rgb(30, 30, 30)'}}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className='col-md-12 col-lg-5'>
              <div className="left">
                <h2 style={{color: 'white', textTransform: 'uppercase'}}>Lets Talk</h2>
                <p style={{color: 'gray', lineHeight: '1.7'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus labore nulla quaerat consectetur culpa tempore deleniti alias obcaecati ipsam eaque, hic adipisci. Perspiciatis quis exercitationem possimus dolorum quasi vero sint?</p>
                <form>
                  <input type="text" className="form-control" placeholder='Enter Your Name' />
                  <input type="text" className="form-control" placeholder='Enter Your Email' />
                  <input type="text" className="form-control" placeholder='Enter Your Age' />
                  <input type='submit' value='Contact Us' style={{textTransform: 'uppercase'}} className='submit' />
                </form>
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <div className="right">
                <img src={contactPhoto} className='img-fluid' alt='Contact Us' style={{borderRadius: '5px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;