import React, { Fragment } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Spinner = () => {
  return (
    <Fragment>
      <div className='d-flex align-items-center justify-content-center'>
        <PuffLoader
          size={100}
          color={"orange"}
          loading={true}
          speedMultiplier={1.2}
        />
      </div>
    </Fragment>
  );
};

export default Spinner;
