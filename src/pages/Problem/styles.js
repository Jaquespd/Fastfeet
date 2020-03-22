import styled from 'styled-components';

export const Container = styled.div`
  /* background: #fff; */
  /* max-width: 600px; */
  /* margin: 50px auto; */
  /* margin: 50px 120px 50px 120px; */
  padding: 50px 120px 50px 120px;
  width: 100%;
  /* max-width: 1440px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  position: relative;

  h1 {
    font-size: 24px;
    text-align: left;
    margin-bottom: 25px;
  }

  #problems {
    /* font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; */
    border-collapse: collapse;
    /* border: 0; */
    width: 100%;
    /* border-spacing: 15px; */
    background-color: #ffffff;
  }

  #problems td,
  #problems th {
    /* border: 1px solid #ddd; */

    padding: 18px 25px;
    /* margin: 5px; */
  }

  /* #problems td {
    color: red;
  } */

  #problems tr {
    /* border: 1px solid #ddd;
    padding: 8px;
    margin: 15px; */

    /* border: 1px solid #ddd; */
    border-bottom: 15px solid #f5f5f5;
    background-color: #fff;
    color: #666666;
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    padding-right: 4px;
    margin-top: 12px;
    height: 57px;
    margin-bottom: 9px;
  }

  /* #problems tr:nth-child(even) {
    background-color: #ffffff;
  } */

  /* #problems tr:hover {
    background-color: #ddd;
  } */

  #problems th {
    border-bottom: 0px solid #f5f5f5;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    border: none;
    background-color: #f5f5f5;
    /* color: white; */
  }

  button {
    background-color: #fff;
    border: 0;
    border-radius: 50%;
    /* position: absolute; */
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* align-self: center; */
    /* align-items: center; */

    button {
      border: 0px;
      background: none;
    }

    strong {
      color: #444444;
      font-size: 16px;
      margin: 0 15px;
    }
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;

export const List = styled.li`
  /* width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 200px;
  height: 95px;
  left: calc(85% - 134px);
  top: calc(30% + 15px);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #00000026;
  opacity: 1;
  /* border: #f5f5f5; */
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 9px);
    top: -9px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 9px solid rgba(0, 0, 0, 0.6);
  }

  h1 {
    color: #fff;
    /* z-index: -2; */
  }
`;
