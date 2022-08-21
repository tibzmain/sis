import axios from 'axios';
import React, { Component, useState } from 'react';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TableActionButton from '../list/TableActionButton';


class UpdateModal extends Component{

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


    
    inputStudentNumber = (event) => {
        
        this.setState({
            studentNumber: event.target.value,
        });
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
    static getDerivedStateFromProps(props, current_state){
        let studentUpdate = {
            studentName: null,
            studentNumber: null,
        }
        
        if(current_state.studentName && (current_state.studentName != props.studentData.currentStudentName) ){
            return null;
        }
        
        if(current_state.studentNumber && (current_state.studentNumber != props.studentData.studentNumber) ){
            return null;
        }
        
        if(current_state.studentCourse && (current_state.studentCourse != props.studentData.currentStudentCourse) ){
            return null;
        }

        if(current_state.studentName !== props.studentData.currentStudentName || current_state.studentName === props.studentData.currentStudentName ){
            studentUpdate.studentName = props.studentData.currentStudentName;
        }
        
        if(current_state.studentNumber !== props.studentData.currentStudentNumber || current_state.studentNumber === props.studentData.currentStudentNumber){
            studentUpdate.studentNumber = props.studentData.currentStudentNumber;
        }
        
        if(current_state.studentCourse !== props.studentData.currentStudentCourse || current_state.studentCourse === props.studentData.currentStudentCourse){
            studentUpdate.studentCourse = props.studentData.currentStudentCourse;
        }

        return studentUpdate;
    }
    
    updateStudentData = () => {
        
        
        axios.post('/update-student', {
            id: this.props.modalId,
            studentName: this.state.studentName,
            studentNumber: this.state.studentNumber,
            studentCourse: this.state.studentCourse
        }).then((response) => {
            // location.reload();
            console.log(response.data.message);

            if(response.data.status_code == 200){
                toast.success(response.data.message);
                setTimeout(() => {
                    location.reload();
                }, 2500)
            }else{
                toast.error(response.data.message);
            }
            // useState(false);
            
            
        });
    }
    
    render(){
        
       
        // return
        return (

            
            <div className="modal fade modal-container" id={"updateModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form'>
                            <div className='form-group mb-4'>
                            <label className="form-label">Student Number:</label>
                                <input type="text"
                                        id="studentNumber"
                                        className='form-control'
                                        value={this.state.studentNumber ?? ""}
                                        onChange={this.inputStudentNumber}
                                />
                            </div>
                            
                            <div className='form-group mb-4'>
                            <label className="form-label">Student Name:</label>
                                <input type="text"
                                        id="studentName"
                                        className='form-control'
                                        value={this.state.studentName ?? ""}
                                        onChange={this.inputStudentName}
                                />
                            </div>
                            
                            <div className='form-group mb-4'>
                            <label className="form-label">Student Course Code:</label>
                                <input type="text"
                                        id="studentCourse"
                                        className='form-control'
                                        value={this.state.studentCourse ?? ""}
                                        onChange={this.inputStudentCourse}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit"
                            className='btn btn-info'
                            
                            value="Update"
                            onClick={this.updateStudentData}
                        />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div> 
            
           
        )
        // end return
    
       
    }
}

export default UpdateModal;