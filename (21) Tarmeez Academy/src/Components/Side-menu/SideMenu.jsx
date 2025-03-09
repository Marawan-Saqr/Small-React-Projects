import './SideMenu.css';
import ButtonComp from '../Button-comp/ButtonComp.jsx';



const SideMenu = () => {
  return (
    <div className='side-menu'>
      <div className='d-flex justify-content-around'>
      <ButtonComp />
      <ButtonComp />
      </div>
      <div className='d-flex justify-content-around'>
      <ButtonComp />
      <ButtonComp />
      </div>
      <div className='d-flex justify-content-around'>
      <ButtonComp />
      <ButtonComp />
      </div>
      <div className='d-flex justify-content-around'>
      <ButtonComp />
      <ButtonComp />
      </div>
      <div className='d-flex justify-content-center'>
      <ButtonComp />
      </div>
    </div>
  )
}

export default SideMenu;