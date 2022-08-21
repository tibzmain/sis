import axios from 'axios';
import React, { Component } from 'react';
import ViewModal from '../Modals/ViewModal';
import UpdateModal from '../Modals/UpdateModal';
import DeleteModal from '../Modals/DeleteModal';


class TableActionButton extends Component{

    constructor(props){
        super(props);
        
        // console.log(this.props)
        
        this.state = {
            currentStudentName: null,
            dataHandler: [],
            currentStudentNumber: null,
            currentStudentCourse: null,
        }
    }

    studentDetails = (id) => {

        axios.post('/individuals-student-details', {studentId: id}).then( (response) => {

            this.setState({
                currentStudentName: response.data.student.name,
                currentStudentNumber: response.data.student.student_number,
                currentStudentCourse: response.data.student.course_code,
                dataHandler: response.data.student
            });
            // console.log(this.state.dataHandler);
            // console.log(this.props.eachRowId);
        });

    }

    
    render(){
        
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
              
                
                <button type="button" className="btn btn-info"
                        data-bs-toggle="modal" 
                        data-bs-target={'#updateModal'+this.props.eachRowId}
                        onClick={ () => { this.studentDetails(this.props.eachRowId)}}
                >
                    Edit
                </button>

                <UpdateModal modalId={this.props.eachRowId}  studentData = {this.state}/>
                <button type="button" className="btn btn-danger"
                        data-bs-toggle="modal" 
                        data-bs-target={'#deleteModal'+this.props.eachRowId}
                        onClick={ () => { this.studentDetails(this.props.eachRowId)}}
                >Delete</button>

                <DeleteModal modalId={this.props.eachRowId}/>
            </div>
        )
    }
}

export default TableActionButton;

