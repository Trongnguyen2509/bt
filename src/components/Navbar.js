import React from "react";
import styled from "styled-components";
class Navbar extends React.Component {
  render() {
    return (
      <div className="nhay">
        <React.Fragment>
          <Logo>
            <h2>Quản lý đơn hàng</h2>
          </Logo>
        </React.Fragment>
      </div>
    );
  }
}
export default Navbar;
const Logo = styled.div`
  @-webkit-keyframes my {
    0% {
      color: rgb(219, 52, 102);
    }
    50% {
      color: #fff;
    }
    100% {
      color: rgb(18, 187, 32);
    }
  }
  @-moz-keyframes my {
    0% {
      color: rgb(219, 52, 102);
    }
    50% {
      color: #fff;
    }
    100% {
      color: rgb(18, 187, 32);
    }
  }
  @-o-keyframes my {
    0% {
      color: rgb(219, 52, 102);
    }
    50% {
      color: #fff;
    }
    100% {
      color: rgb(18, 187, 32);
    }
  }
  @keyframes my {
    0% {
      color: rgb(219, 52, 102);
    }
    50% {
      color: #fff;
    }
    100% {
      color: rgb(18, 187, 32);
    }
  }
  .div {
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    -webkit-animation: my 700ms infinite;
    -moz-animation: my 700ms infinite;
    -o-animation: my 700ms infinite;
    animation: my 700ms infinite;
  }
`;
