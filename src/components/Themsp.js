import React from "react";
import styled from "styled-components";
class Themsp extends React.Component {
  state={
    ten:'',
    soluong:0,
    giaohangden:'',
    ngaytaodon:'',
    tongtien:0,
  }

  addName=(event)=>{
      this.setState({ten:event.target.value})
  }
  addsoluong=(event)=>{
    this.setState({soluong:event.target.value})
  }
  addgiaohangden=(event)=>{
    this.setState({giaohangden:event.target.value})
  }
  addngaytaodon=(event)=>{
    this.setState({ngaytaodon:event.target.value})
  }
  addtongtien=(event)=>{
    this.setState({tongtien:event.target.value})
  }
  handleAdd=()=>{
    this.props.add(this.state.ten,this.state.soluong,this.state.giaohangden,this.state.ngaytaodon,this.state.tongtien);
  }
  render() {
    
    return (
      
        <div class="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Thêm Đơn hàng
            </button>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title">Tạo thông tin đơn hàng</h1>
                    </div>
                    <div class="modal-body">

                    
                    <h6>Sản phẩm: <input onChange={this.addName}></input></h6>
                    <p><h6>Số lượng: <input onChange={this.addsoluong}></input></h6></p>
                    <p><h6>Giao hàng đến: <input onChange={this.addgiaohangden}></input></h6></p>
                    <p><h6>Ngày tạo đơn: <input  type='date' onChange={this.addngaytaodon}></input></h6></p>
                    <p><h6>Tổng cộng: <input onChange={this.addtongtien}></input></h6></p>
                    </div>
                    
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={this.handleAdd}>Thêm</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
    );
  }
}
export default Themsp;

