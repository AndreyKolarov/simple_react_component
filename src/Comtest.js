import React,{Component} from 'react';
import './App.css';

class ImplementData extends Component{
    render(){
        return (
            <tr>
                <td>{this.props.No}</td>
                <td>{this.props.Name}</td>
                <td>{this.props.Skill}</td>
            </tr>
        );
    }
}

class Comtest extends Component {
    
    render(){

        const dataList = {
            "profileList":[
                {
                    "No": 1,
                    "Name" :"Andrey",
                    "Skill" : "Front-end Developer"
                },
                {
                    "No": 2,
                    "Name" :"Sergey",
                    "Skill" : "Back-end Developer"
                },
                {
                    "No": 3,
                    "Name" :"Ivan",
                    "Skill" : "Graphic Designer"
                }
            ]
                
        };

        const implementDataList = dataList.profileList.map(implementDataObject => {
            return (
                <ImplementData {...implementDataObject} />
            )
        });
        return (
            <div className="Comtest">
                <h1>COMPONENT TEST</h1> <br />
               
                <table class="profileTable">
                    <thead>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Skill</th>
                    </thead>
                    <tbody>
                        {implementDataList}
                    </tbody>
                </table>
            </div>
          );
    }
  
}

export default Comtest;
