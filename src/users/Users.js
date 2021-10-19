import React, { useContext } from "react";
import Spinner from "../components/layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/gethub/gethubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container d-flex'>
        <div className='row gx-2 justify-content-center flex-wrap'>
          {users.map((user) => (
            //<div className='col-md-3 col-lg-2 mx-2' key={user.id}>
            <UserItem user={user} key={user.id} />
            //</div>
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
