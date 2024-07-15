import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  background-color: #6bd1ff;
  color: red;
`;

const BannerTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BannerText = () => {
  return (
    <BannerTextContainer>
      <Title>BannerText</Title>
    </BannerTextContainer>
  );
};

export default BannerText;
