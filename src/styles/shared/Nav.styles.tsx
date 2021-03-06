import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #d6eaf8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  width: 100%;
  float: left;
  margin-bottom: 10px;

  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      display: block;
      float: left;
      width: auto;

      a {
        display: block;
        padding: 1rem;
        color: #3498db;
        text-decoration: none;

        :hover {
          background-color: #aed6f1;
        }

        &.active {
          background-color: #3498db;
          color: #fff;
        }
      }
    }
  }
`;
