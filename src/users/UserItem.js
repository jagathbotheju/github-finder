import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;

  return (
    <div
      className='card shadow-sm rounded d-flex p-3 m-3'
      style={{ width: "200px" }}
    >
      <div className='card-body mx-auto'>
        <img
          src={avatar_url}
          alt=''
          className='img round-img'
          style={{ width: "60px" }}
        />

        <h5>{login}</h5>
        <Link
          className='btn btn-primary btn-sm justify-content-center'
          to={`/user/${login}`}
          role='button'
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
