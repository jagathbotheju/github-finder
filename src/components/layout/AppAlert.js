import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const AppAlert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert != null && (
      <div className='container'>
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' />
          {alert.msg}
        </div>
      </div>
    )
  );
};

export default AppAlert;
