import React from "react";
// import RegistrationForm from "./RegistrationForm";
import styled from "styled-components";

const Registration = () => {
  // return <RegistrationForm />;
  return (
    <div>
      <Title large>TEST</Title>
      <SubTitle>SubTitle</SubTitle>
    </div>
  );
};

export default Registration;

const Title = styled.h1`
  font-size: ${(props: { large: boolean }) => (props.large ? "50px" : "20px")}
  color: red;
`;

const SubTitle = styled.h2`
  font-size: 10px;
`;
