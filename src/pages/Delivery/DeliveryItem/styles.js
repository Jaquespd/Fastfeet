import styled from 'styled-components';

export const Container = styled.div`
  height: 57px;
  background: #fff;
  border-radius: 4px;

  padding-left: 25px;
  padding-right: 13px;

  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1.5fr 1.5fr 1fr 1fr 0.5fr;

  > small:last-child {
    text-align: right;
    margin-right: 25px;
  }

  > small {
    font-size: 16px;
    color: #666;
    text-align: left;

    margin: auto 0;

    > div {
      display: flex;
      justify-content: left;
      align-items: center;
    }
  }

  /* > section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  } */
`;
