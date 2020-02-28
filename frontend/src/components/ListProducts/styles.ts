import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 992px;
  padding: 15px 10px;
  margin: auto;
`;

export const List = styled.ul`
  width: 100%;
  list-style-type: none;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  @media (max-width: 740px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const Item = styled.li`
  height: 60px;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #e9ebee;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 0 15px;
  &:hover,
  &:active {
    box-shadow: 0px 0px 5px #b7b7b7;
  }
`;
