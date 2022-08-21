import axios from 'axios';
import React, { Component } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableActionButton from '../list/TableActionButton';


class CreateModal extends Component{

    constructor(props){
        super(props);
        
        // console.log(this.props)
        this.state = {
            studentName : null, 
            studentNumber : null, 
            studentCourse: null, 
            dataHandler: [],
            show: true
        }
        
    }

    inputStudentName = (event) => {
        
        this.setState({
            studentName: event.target.value,
        });
    }
    
    inputStudentCourse = (event) => {
        
        this.setState({
            studentCourse: event.target.value,
        });
    }

    inputStudentNumber = (event) => {
        
        this.setState({
            studentNumber: event.target.value,
        });
    }

    createStudent  = () => {

        axios.post('/save-student', {

            name: this.state.studentName,
            student_number: this.state.studentNumber,
            course: this.state.studentCourse
        }).then( (reponse) => {

           

            if(reponse.data.status_code == 200){
                toast.success(reponse.data.message);

                setTimeout( () => {
                    location.reload();
                }, 2500);
            }else{
                toast.error(reponse.data.message);

               
            }
            
        });
    }
    render(){
        
       
        return (
            <div className="modal fade" id="createMymodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create New Student</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className='form'>
                            <div className='form-group mb-4'>
                            <label className="form-label">Student Number:</label>
                                <input type="text"
                                        id="studentNumber"
                                        className='form-control'
                                       placeholder="Enter Student Number"
                                        onChange={this.inputStudentNumber}
                                />
                            </div>
                            
                            <div className='form-group mb-4'>
                            <label className="form-label">Student Name:</label>
                                <input type="text"
                                        id="studentName"
                                        className='form-control'
                                        placeholder="Enter Student Name"
                                        onChange={this.inputStudentName}
                                />
                            </div>
                            
                            <div className='form-group mb-4'>
                            <label className="form-label">Student Course Code:</label>
                                <input type="text"
                                        className='form-control'
                                        id="studentCourse"
                                        placeholder="Enter Student Course Code"
                                        onChange={this.inputStudentCourse}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <input type="button"
                            className='btn btn-success'
                            
                            value="Save"
                            onClick={this.createStudent}
                        />                                                                 
                    </div>
                    </div>
                </div>
            </div> 
            
           
        )
    }
}

export default CreateModal;