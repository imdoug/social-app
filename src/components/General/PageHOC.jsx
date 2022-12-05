import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Nav } from "../index"

// import Alert from './Alert';


const PageHOC = (Component ) => () => {
//   const { showAlert } = useGlobalContext();
  const navigate = useNavigate();

  return (
      <div style={{marginTop: 70}} >
            <Nav/>
            {/* {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />} */}
            <Component />
            <Footer/>
      </div>
  );
};

export default PageHOC;