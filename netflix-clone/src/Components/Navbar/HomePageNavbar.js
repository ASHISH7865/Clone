import React, { useEffect, useState } from "react";
import "./HomePageNavbar.css";
import firebase from "firebase/compat/app";

function HomePageNavbar(props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const [show, setShow] = useState(false);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <img
        className="navLogo"
        src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png"
        alt="Netflix Logo"
      />
      <img
        className="navAvatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Avatar"
        onClick={() => firebase.auth().signOut()}
      />
    </div>
  );
}

export default HomePageNavbar;
