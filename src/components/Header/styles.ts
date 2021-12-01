import styled from "styled-components";

export const Container = styled.header`
  background-color: black;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 15rem 1rem;
  display: flex;
  align-items: center;

  input {
    height: 2rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    margin-left: 1rem;
  }

  button:hover {
    background-color: black;
  }
`;
