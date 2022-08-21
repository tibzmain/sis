import React, { Component } from 'react';
import TableActionButton from '../list/TableActionButton';


class TableRow extends Component{

    constructor(props){
        super(props);
        
        // console.log(this.props)
        
    }

    
    render(){
        
        let newDate = new Date(this.props.data.created_at);
        let date = newDate.getDate().toLocaleString("UTC");
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hour = newDate.getHours().toLocaleString("UTC");
        let minute = newDate.getMinutes();
        let second = newDate.getSeconds();

        let dateFormat = year+"-"+month+"-"+date+"  "+hour+"-"+minute+"-"+second;
        return (
            <tr>
                
                <td>{this.props.data.id}</td>
                <td>{this.props.data.student_number}</td>
                <td>{this.props.data.name}</td>
                {this.props.syllabus.map(a => <td key={a.id} >{a.college}</td>)}
                {this.props.syllabus.map(a => <td key={a.id} >{a.program}</td>)}
                <td>{this.props.data.course_code}</td>
                {this.props.syllabus.map(a => <td key={a.id} >{a.course}</td>)}
                <td>{dateFormat}</td>
                <td><TableActionButton eachRowId={this.props.data.id}/></td>
            </tr>  
        )
    }
}

export default TableRow;