import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  padding: 30px;
  width: 360px;
  height: 425px;
  max-width: 360px;
  text-align: center;
  box-shadow: 0px 0px 10px #00000033;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    strong {
      letter-spacing: 0;
      color: #444444;
      height: 19px;
      text-align: left;
      margin-bottom: 9px;
      font-size: 14px;
      font-weight: bold;
    }

    input {
      background: rgba(255, 255, 255, 1);
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #999999;
      margin: 0 0 15px;

      &::placeholder {
        /* color: rgba(255, 255, 255, 0.7); */
        color: #999999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 60;
      height: 45px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#7D40E7')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
