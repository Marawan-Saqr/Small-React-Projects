import './Landing.css';


const Landing = () => {
  return (
    <div>
      <div className="landing">
        <div className="content" style={{textAlign: 'center', zIndex: '2'}}>
          <h1 style={{color: 'white', fontSize: '73px', fontWeight: 'bold', textTransform: 'uppercase'}}>Marketing Solution Agency</h1>
          <p style={{color: 'gray', lineHeight: '1.7'}}>Welcome To Our Company Art Of Solutions Take A Look At Our Website And Tell Us What You Want We Are Here We Can Help You</p>
          <button style={{border: 'none', color: 'white', backgroundColor: 'rebeccapurple', borderRadius: '5px', textTransform: 'uppercase', padding: '10px'}}><i className="fab fa-telegram-plane"></i> Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Landing;