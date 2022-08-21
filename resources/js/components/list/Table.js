import { offset } from '@popperjs/core';
import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow';
import ViewModal from '../Modals/ViewModal';
import ListCollegeModal from '../Modals/ListCollegeModal';
import ListProgramModal from '../Modals/ListProgramModal';
import ListCourseModal from '../Modals/ListCourseModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from '../Modals/CreateModal';


class Table extends Component{

    constructor(props){
        super(props);

        this.state = {
            student: [],
            colleges: [],
            programs: [],
            collegeList: [],
           
        }
    }
    
    componentDidMount(){
        this.getStudentList();
        this.getColleges();
        this.getPrograms();
    }


    getStudentList = () => {
        let self = this;

        axios.get('/get/student').then(function(response){

            // console.log(response.data.student)
            
            self.setState({
                student: response.data.student
            });
           
        });
    }
    
    getColleges = () => {
        let self = this;

        axios.get('/colleges').then(function(response){

            // console.log(response.data.student)
            
            self.setState({
                colleges: response.data.student
            });
           
        });
    }
    
    getPrograms = () => {
        let self = this;

        axios.get('/programs').then(function(response){

            // console.log(response.data.student)
            
            self.setState({
                programs: response.data.student
            });
           
        });
    }
    
    getCollegeList = () => {
        let self = this;

        axios.get('/college-list').then(function(response){

            // console.log(response.data)
            
            self.setState({
                collegeList: response.data.student
            });
           
        });
    }
    
    getProgramList = () => {
        let self = this;

        axios.get('/program-list').then(function(response){

            // console.log(response.data)
            
            self.setState({
                collegeList: response.data.student
            });
           
        });
    }
    
    getCourseList = () => {
        let self = this;

        axios.get('/course-list').then(function(response){

            // console.log(response.data)
            
            self.setState({
                collegeList: response.data.student
            });
           
        });
    }

    render(){
        
        const mystyle = {
            margin: "2px",
       
        };
        
        const mystyle2 = {
            float: "right",
       
        };

        return (
            <div className="container">
                <ToastContainer/>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="row mb-2">
                            <div className="col-md-6 d-flex">

                                <button type="button" className="btn btn-secondary btn-sm " style={mystyle}
                                    // className="btn btn-primary"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#listCollge"
                                    onClick={ () => { this.getCollegeList()}}
                                >List of Colleges
                                </button>
                                <ListCollegeModal data={this.state.collegeList}/>
                                <button type="button" className="btn btn-secondary btn-sm  " style={mystyle} 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#listPrograms"
                                        onClick={ () => { this.getProgramList()}}
                                >
                                    List of Programs
                                
                                </button>

                                <ListProgramModal data={this.state.collegeList}/>
                                <button type="button" className="btn btn-secondary btn-sm " style={mystyle}
                                        data-bs-toggle="modal" 
                                        data-bs-target="#listCourse"
                                        onClick={ () => { this.getCourseList()}}
                                >
                                    
                                    List of Courses
                                
                                </button>

                                <ListCourseModal data={this.state.collegeList} />

                            </div>

                            <div className='col-md-6 '>
                                <button className='btn float-right btn-success' style={mystyle2}
                                        data-bs-toggle="modal" 
                                        data-bs-target='#createMymodal'
                                      
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus mb-1" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
                                     Add New Student</button>
                               
                                 
                            </div>
                                    <CreateModal />
                        </div>
                        <div className="card">
                        <table className="table table-striped table-hover">
                                <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">STUDENT #</th>
                                <th scope="col">NAME</th>
                                <th scope="col">COLLEGE</th>
                                <th scope="col">PROGRAM </th>
                                <th scope="col">COURSE CODE</th>
                                <th scope="col">COURSE NAME</th>
                          
                                <th scope="col">DATE ENROLLED</th>
                                <th scope="col" className="text-align-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.student.map(function(x,i){
                                        // console.log(i)
                                        let syllabus  = [];
                                        
                                    let check = false;
                                    let check2 = false;
                                    let collegeName = '';
                                    let programName = '';
                                    let courseName = '';
                                    // console.log(x.program_code);
                                       {
                                        this.state.programs.map(function(a,b){
                                            
                                            if(check != true){
                                                if(x.course_code == a.course_code){
                                              
                                                    check= true;
                                                    programName = a.program;
                                                    courseName = a.course_name;
                                                }
                                            }
                                            
                                            // console.log(a.program_code);

                                            
                                        })
                                       }
                                        
                                       if(check && check2 ==false){
                                        {                                          
                                            this.state.colleges.map(function(c,d){
                                                
                                                if(check2 == false){
                                                    if(programName == c.program ){
                                                        collegeName = c.college_code;
                                                        syllabus .push({id: i, college: collegeName, program: programName, course: courseName});
                                                    }
                                                }                                         
                                            })
                                        }
                                       }
                                    
                                    // console.log(syllabus);
                                        

                                        return <TableRow key={i} data={x} syllabus={syllabus } />
                                        
                                        
                                    }.bind(this))
                                }
                                 
                            </tbody>
    
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 


export default Table;