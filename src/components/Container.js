import React from "react";
import styled from "styled-components";
import { FaTrash, FaCheck } from "react-icons/fa";

class Container extends React.Component {
  render() {
    const {data}=this.props;
    const chuaGiao =data.filter(item=>item.isComplete===false);
    const Dagiao =data.filter(item=>item.isComplete===true);
    return (
      <>
        <Table>
          <div className="grid-container">
            <div className="content">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giao hàng đến</th>
                    <th scope="col">Ngày tạo đơn</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col">Các thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {chuaGiao.map(item=>(<tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.ten}</td>
                  <td>{item.soluong}</td>
                    <td>{item.giaohangden}</td>
                    <td>{item.ngay}</td>
                    <td>{item.tongtien}</td>
                    <td>
                    <button><FaTrash /></button>
                      <button onClick={()=>this.props.complete(item.id)}><FaCheck /></button>
                    </td>
                    </tr>))}
                </tbody>
              </table>
            </div>
            <div className="content">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Đơn hàng đã giao</th>
                  </tr>
                </thead>
                <tbody>
                {Dagiao.map(item=>(<tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.ten}</td>
                  <td>{item.soluong}</td>
                    <td>{item.giaohangden}</td>
                    <td>{item.ngay}</td>
                    <td>{item.tongtien}</td>
                    <td>
                      <button><FaTrash /></button>
                      <button><FaCheck /></button>
                       
                    </td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </Table>
      </>
    );
  }
}
export default Container;
const Table = styled.div`
  width: 100%;
  margin-top: 50px;
  .grid-container {
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-column-gap: 30px;
  }
`;
