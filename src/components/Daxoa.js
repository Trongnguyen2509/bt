import React from 'react';
import styled from "styled-components";
import { FaTrash, FaCheck } from "react-icons/fa";
export default class Daxoa extends React.Component {
  render(){
    return (
        <>
        <div className="contentxoa">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Đơn đã xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Vòng tay</td>
                    <td>1</td>
                    <td>308 sư vạn hạnh</td>
                    <td>30/4/2020</td>
                    <td>500$</td>
                    <td>
                      <FaTrash /> <FaCheck />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Lắc tay</td>
                    <td>4</td>
                    <td>206 Lạc long quân</td>
                    <td>3/5/2020</td>
                    <td>1000$</td>
                    <td>
                      <FaTrash /> <FaCheck />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>nhẫn</td>
                    <td>10</td>
                    <td>hẻm 302 Hà huy tập</td>
                    <td>21/5/2020</td>
                    <td>800$</td>
                    <td>
                      <FaTrash /> <FaCheck />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
      </>
    )
  }
}