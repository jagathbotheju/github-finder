import React, { useState, useContext } from "react";
import GithubContext from "../../context/gethub/gethubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert(" Please enter something", "danger");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div className='d-flex container mx-auto'>
      <div className='row flex-fill'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            className='mb-3'
            value={text}
            onChange={onChange}
          />

          <input
            type='submit'
            value='Search'
            className='btn btn-primary btn-block mb-2'
          />
        </form>
        {githubContext.users.length > 0 && (
          <button
            className='btn btn-secondary btn-block col mx-3'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
