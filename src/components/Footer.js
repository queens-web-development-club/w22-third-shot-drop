import React from "react";
import { render } from "react-dom";

const Footer = () => (
  <footer className="footer">
    <div
      style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100px'
      }}
      />
    

  </footer>
);

const App = () => (
  <div className="content">
    <h1>Hi guys!</h1>
  </div>
);

render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));
export default Footer