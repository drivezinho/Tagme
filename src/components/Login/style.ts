import styled from "styled-components";

export const Container = styled.body`
  background-color: grey;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  max-height: 800px;
  margin: 0 auto;

  padding: 3rem 2rem;
  display: flex;
  align-items: center;

  .bg-login {
    max-width: 300px;
    max-height: 700px;
    position: relative;
  }
  .logococobambu {
    position: absolute;
    height: 80px;
    width: 80px;
    top: 25%;
    left: 46%;
  }

  .input-login {
    position: absolute;
    height: 30px;
    width: 180px;
    top: 38%;
    left: 43%;
  }

  .input-senha {
    position: absolute;
    height: 30px;
    width: 180px;
    top: 43%;
    left: 43%;
  }

  button {
    position: absolute;
    height: 30px;
    width: 180px;
    top: 52%;
    left: 43%;
    background-color: #ff4500;
  }
`;
