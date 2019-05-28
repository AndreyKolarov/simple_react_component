import React, {Component} from 'react';
import './App.css';

class Todos extends Component {
    constructor(){
        super();
        this.state = {
            nameList: [],
            currentName: ""
        };
    }
    onAddBtn = () =>{
        let dataList = this.state.nameList.slice();
        dataList.push(this.state.currentName);
        this.setState({nameList: dataList});
        
    }
    onEnterName = e => {
        this.setState({currentName: e.target.value});
    }
    onDeleteName = i =>{
        let dataList = this.state.nameList.slice();
        dataList.splice(i, 1);
        this.setState({nameList: dataList});
    }
    render(){
        let implementData = this.state.nameList.map((e, i) =>{
            return (
                <li>{e}<button onClick={() => this.onDeleteName(i)}>DELETE</button></li>
            );
        });
        return (
        <div className="Todos">
            <h1>ToDO LISTs</h1>
            Name: <input type="text" value={this.state.currentName} onChange={this.onEnterName}/> 
            <button onClick={this.onAddBtn}>ADD</button>
            <br/>
            Name List: {this.state.nameList.length === 0 ? "No data..." : <ul>{implementData}</ul>}
            <br />
        </div>
        );
    }
  
}

export default Todos;
