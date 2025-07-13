import { Outlet } from 'react-router-dom';

const Posts = () => {
  return (
    <div className='posts'>
      <h2 className='text-center mt-3 mb-3' style={{backgroundColor: 'orange'}}>Welcome To Posts Category</h2>
      <Outlet />
    </div>
  )
}


export default Posts;