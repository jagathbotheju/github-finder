import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../components/layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../components/repos/Repos";
import GithubContext from "../context/gethub/gethubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <>
      <section id='section-bio'>
        {/*SECTION BIO*/}
        <div className='container border p-3'>
          <div className='row justify-content-start'>
            <div className='col-md-2'>
              <img src={avatar_url} alt='' />
              <h2>{name}</h2>
              <p>Location : {location}</p>
            </div>
            <div className='col-md-4'>
              {bio && (
                <div>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                  <a
                    href={html_url}
                    role='button'
                    className='btn btn-dark btn-sm'
                  >
                    Visit Github Profile
                  </a>
                </div>
              )}
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username : </strong>
                      {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company : </strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website : </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>

              <div>
                Hirable: {""}
                {hireable ? (
                  <i className='fas fa-check text-success' />
                ) : (
                  <i className='fas fa-times-circle text-danger' />
                )}
              </div>
            </div>
          </div>

          <Link to='/' className='btn btn-primary btn-sm'>
            Back
          </Link>
        </div>
      </section>
      <div className='row'>
        <div className='text-center m-2'>
          <div className='col-1 badge bg-dark'>Followers: {followers}</div>
          <div className='col-1 badge bg-success'>Following: {following}</div>
          <div className='col-1 badge bg-warning'>
            Public Repos: {public_repos}
          </div>
          <div className='col-1 badge bg-info'>
            Public Gists: {public_gists}
          </div>
        </div>
      </div>
      <section id='user-repos'>
        <div className='container px-0'>
          <Repos repos={repos} />
        </div>
      </section>
    </>
  );
};

export default User;
