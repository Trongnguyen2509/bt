import React from 'react';
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";
import Container from "./Container";
import Themsp from "./Themsp";

const data = [{id:1,ten:'Vòng tay',soluong:1, giaohangden:'gia lai',ngay:'02/02/2019',tongtien:300,isComplete:false},{id:2,ten:'lắc tay',soluong:1, giaohangden:'gia lai',ngay:'02/02/2019',tongtien:300,isComplete:true}]

export default class Home extends React.Component {
  state ={
    data:data,
  }
  add =(ten,soluong,giaohangden,ngay,tongtien)=>{
    let newData={
      id:data.indexOf(this.state.data.id)+1,
      ten:ten,
      soluong:soluong,
      giaohangden:giaohangden,
      ngay:ngay,
      tongtien:tongtien,
      isComplete:false,
    }
    this.state.data.push(newData);
    this.setState(this.state.data);
    console.log(new Date().getSeconds());
  }
  setComplete=(id)=>{
    var list =  this.state.data.find(i=>i.id===id);
    var ListComplete=this.state.data.filter(i=>i.id!==id)
    var edit = {
      id:list.id,
      ten:list.ten,
      soluong:list.soluong,
      giaohangden:list.giaohangden,
      ngay:list.ngay,
      tongtien:list.tongtien,
      isComplete:!list.isComplete,
    };
    this.setComplete({data:[...ListComplete,edit]});
    console.log("id",edit)
  }
  render(){
    return (
        <>
          <Navbar />
          <Mainpage />
          <Themsp add={this.add}/>
          <Container data={this.state.data} complete={this.setComplete}/>
      </>
    )
  }
}