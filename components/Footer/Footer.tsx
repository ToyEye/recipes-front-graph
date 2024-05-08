import React from "react";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <Container>
        <NavBar location="footer" />
        <p className="text-sm text-center ">
          © 2024 Recipe Collection. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
