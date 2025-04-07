import { useContext } from "react";
import { dataContext } from '../../MyContext';
import CardUser from "./CardUser";

const UsersList = () => {

  const { users } = useContext(dataContext);

  return (
    <div>
      {
        users.length >= 1 ? (users.map((item)=> (
          <CardUser key={item.id} item={item} />
        ))) : <h2>No Users Found</h2>
      }
    </div>
  )
}


export default UsersList;