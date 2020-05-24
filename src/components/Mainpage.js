import React from "react";
import styled from "styled-components";
class Mainpage extends React.Component {
  render() {
    return (
      <>
        <Nhap>
          <input type="text" placeholder="Nhập các đơn hàng ...... " />
          <input type="button" value="Tìm kiếm" />
        </Nhap>
      </>
    );
  }
}
export default Mainpage;
const Nhap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  margin-right:-50%;
`;
