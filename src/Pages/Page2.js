import React from 'react';
import {useLocation} from "react-router-dom";
import './Page2.css' ;
import {BsFillTaxiFrontFill,BsFillPeopleFill,BsCarFrontFill,BsBusFrontFill,BsFillTrainFreightFrontFill,BsBicycle} from "react-icons/bs";
import {MdOutlineAirlineSeatReclineExtra} from "react-icons/md";
import d1 from "../Data/sample_db_0km.json";
import d2 from "../Data/sample_db_5km.json";
import d3 from "../Data/sample_db_10km.json";
import d4 from "../Data/sample_db_15km.json";
import d5 from "../Data/sample_db_20km.json";
import d6 from "../Data/sample_db_25km.json";

const Page2 =(props) => {
    const location = useLocation();
    console.log(location,"useLocation Hook");
    const means = location.state?.means;
    const dist = location.state?.dist;
    let data;
    if(dist === "< 5 km"){
        data = d1;
    }
    else if(dist === "5 - 10 km"){
        data = d2;
    }
    else if(dist === "10- 15 km"){
        data = d3;
    }
    else if(dist === "15- 20 km"){
        data = d4;
    }
    else if(dist === "20- 25 km"){
        data = d5;
    }
    else if(dist === "> 25 km"){
        data = d6;
    }
    let col4;
    if(means === "Own Car"){
        col4 = data.Data[0].mode_8;
    }
    else{
        col4 = data.Data[0].mode_9;
    }
    let col5;
    if(means === "Auto"){
        col5 = data.Data[0].mode_7;
    }
    else{
        col5 = data.Data[0].mode_5;
    }
    const crowd_json=["","Many seats available","Some seats available","All seats occupied; standing space available","Fully crowded or packed"];
    const servtype_json=["","Ordinary","Express Non-AC","Express AC"];
   
    let item;
    if (data.Data[0].mode_4.mode === "Walk / Bicycle") {
        item = (
            <BsBicycle/>
        );
    }else{
        item = (
            <BsFillTrainFreightFrontFill/>
        );
    }
    let item2;
    if(data.Data[0].mode_1.trans === 1){
        item2 =(
           <div><BsBusFrontFill/>{" > "}<BsBusFrontFill/></div> 
        );
    }else{
        item2 = (
            <BsBusFrontFill/>
        );
    }
    let item3;
    if(data.Data[0].mode_1.trans === 1){
        item3 =(
           <div>{"transfer 1"}</div>
        );
    }else{
        item3 = (
           <div> {""}</div>
        );
    }
    return(
        <>
            <div className='app-container'>
               <table>
                  <thead>
                    <tr>
                        <th> </th>
                        <th><input type='radio' name="modes"/>{data.Data[0].mode_1.mode}</th>
                        <th><input type='radio' name="modes"/>{data.Data[0].mode_2.mode}</th>
                        <th><input type='radio' name="modes"/>{data.Data[0].mode_4.mode}</th>
                        <th><input type='radio' name="modes"/>{col4.mode}</th>
                        <th><input type='radio' name="modes"/>{col5.mode}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td className='h1'>Total travel time spent while inside the vehicle(s)</td>
                        <td ><div className='h3'>{item3}<div className='h2'>{item2} {"  "}{data.Data[0].mode_1.ivtt} min</div></div></td>
                        <td ><div className='h2'><BsBusFrontFill/>{" "} {data.Data[0].mode_2.ivtt} min</div></td>
                        <td ><div className='h2'>{item} {" "}{data.Data[0].mode_4.ivtt} min</div></td>
                        <td ><div className='h2'><BsCarFrontFill/>{" "} {col4.ivtt} min</div></td>
                        <td ><div className='h2'><BsFillTaxiFrontFill/>{" "} {col5.ivtt} min</div></td> 
                    </tr>
                    <tr>
                        <td className='h1'>Total travel time spent outside vehicle(s)</td>
                        <td>{data.Data[0].mode_1.walktime+data.Data[0].mode_1.waittime} min</td>
                        <td>{data.Data[0].mode_2.walktime+data.Data[0].mode_2.waittime} min</td>
                        <td>{data.Data[0].mode_4.walktime+data.Data[0].mode_4.waittime} min</td>
                        <td>{col4.walktime+col4.waittime} min</td>
                        <td>{col5.walktime+col5.waittime} min</td> 
                    </tr>
                    <tr>
                        <td className='h1'>Possible delay due to traffic congestion or other uncertainties</td>
                        <td>...upto {data.Data[0].mode_1.tvariab} min or more</td>
                        <td>...upto {data.Data[0].mode_2.tvariab} min or more</td>
                        <td>...upto {data.Data[0].mode_4.tvariab} min or more</td>
                        <td>...upto {col4.tvariab} min or more</td>
                        <td>...upto {col5.tvariab} min or more</td> 
                    </tr>
                    <tr>
                        <td className='h1'>Total one-way cost of travel</td>
                        <td>Rs.{data.Data[0].mode_1.tcost}</td>
                        <td>Rs.{data.Data[0].mode_2.tcost}</td>
                        <td>Rs.{data.Data[0].mode_4.tcost}</td>
                        <td>Rs.{col4.tcost}</td>
                        <td>Rs.{col5.tcost}</td> 
                    </tr>
                    <tr>
                        <td className='h1'>Extent of crowding in the vehicle</td>
                        <td>{crowd_json[data.Data[0].mode_1.crowd]===""?"":<BsFillPeopleFill/>}{" "}{crowd_json[data.Data[0].mode_1.crowd]}</td>
                        <td>{crowd_json[data.Data[0].mode_2.crowd]===""?"":<BsFillPeopleFill/>}{" "}{crowd_json[data.Data[0].mode_2.crowd]}</td>
                        <td>{crowd_json[data.Data[0].mode_4.crowd]===""?"":<BsFillPeopleFill/>}{" "}{crowd_json[data.Data[0].mode_4.crowd]}</td>
                        <td>{crowd_json[col4.crowd]===""?"":<BsFillPeopleFill/>}{" "}{crowd_json[col4.crowd]}</td>
                        <td>{crowd_json[col5.crowd]===""?"":<BsFillPeopleFill/>}{" "}{crowd_json[col5.crowd]}</td> 
                    </tr>
                    <tr>
                        <td className='h1'>Service type</td>
                        <td>{servtype_json[data.Data[0].mode_1.serv]===""?"":< MdOutlineAirlineSeatReclineExtra/>}{" "}{servtype_json[data.Data[0].mode_1.serv]}</td>
                        <td>{servtype_json[data.Data[0].mode_2.serv]===""?"":< MdOutlineAirlineSeatReclineExtra/>}{" "}{servtype_json[data.Data[0].mode_2.serv]}</td>
                        <td>{servtype_json[data.Data[0].mode_4.serv]===""?"":< MdOutlineAirlineSeatReclineExtra/>}{" "}{servtype_json[data.Data[0].mode_4.serv]}</td>
                        <td>{servtype_json[col4.serv]===""?"":< MdOutlineAirlineSeatReclineExtra/>}{" "}{servtype_json[col4.serv]}</td>
                        <td>{servtype_json[col5.serv]===""?"":< MdOutlineAirlineSeatReclineExtra/>}{" "}{servtype_json[col5.serv]}</td> 
                    </tr>
                  </tbody>
               </table>
            </div>
        </>
    );
}

export default Page2;