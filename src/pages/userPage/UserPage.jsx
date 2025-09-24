import { useEffect, useState } from "react";
import { userList } from "../../Api/Products";
import SingleUsers from "../../components/singleUsers/SingleUsers";

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await userList();
      setUsers(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <h6>لیست کاربران</h6>
      <div className="row mx-0">
          {users && users.length > 0
            ? users.map((userData) => <SingleUsers userDetail={userData} key={userData.id} />)
            : "موردی یافت نشد"}
        </div>
    </>
  );
}

export default UserPage
