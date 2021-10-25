// prettier-ignore
import styled from 'styled-components';

const ComponentTitleWrapperStyle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #202739;
  width: 100%;
  margin-right: 17px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media only screen and (max-width: 767px) {
    margin: 0 10px 30px;
  }

  &:before {
    content: '';
    width: 7px;
    height: 30px;
    background-color: #E4E6E9;
    display: flex;
    margin: 0 15px 0 0;
  }

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #E4E6E9;
    display: flex;
    margin: 0 0 0 15px;
  }
`;

export { ComponentTitleWrapperStyle };
