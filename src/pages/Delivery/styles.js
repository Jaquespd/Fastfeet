import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 120px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
`;

export const Grid = styled.div`
  height: 400px;
  > section {
    display: grid;

    padding-left: 25px;
    padding-right: 13px;

    grid-template-columns: 0.5fr 1.5fr 1.5fr 1.5fr 1fr 1fr 0.5fr;

    strong:last-child {
      text-align: right;
    }

    strong {
      text-align: 16px;
      color: #444;
    }

    margin-bottom: 15px;
  }

  > div + div {
    margin-top: 20px;
  }
`;

export const StatusIcon = styled.div`
  padding: 3px 0px 3px 22px;
  /* width: 99px; */
  /* height: 25px; */
  background: #dff0df;
  border-radius: 12px;
  color: #2ca42b;
  font-size: 14px;
  font-weight: bold;
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
