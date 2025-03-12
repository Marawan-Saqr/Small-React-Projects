import './SideMenu.css';
import ButtonComp from '../Button-comp/ButtonComp.jsx';



const SideMenu = () => {
  return (
    <div className='side-menu'>
      <div className='d-flex justify-content-around'>
      <ButtonComp>
        <img src="./image.jpg" style={{width: "35px"}} />
      </ButtonComp>
      <ButtonComp>

      </ButtonComp>
      </div>
    </div>
  )
}

export default SideMenu;