import React, { Component } from 'react';



class ListCourseModal extends Component{

    constructor(props){
        super(props);
        
        // console.log(this.props)
        
    }

    
    render(){
        
        
       
        return (
            <div className="modal fade" id="listCourse" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">List of Courses</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body mh-100 ">

                    <table className="table ">
                        <thead>
                            <tr> 
                                <th scope="col">COURSE CODE</th>
                                <th scope="col">COURSE NAME</th>
                            </tr>
                        </thead>
                    <tbody>
                        
                        { this.props.data.map(a => 
                            <tr key={a.code}>
                                <td  >{a.code}</td>
                                <td  >{a.name}</td>
                        
                            </tr>
                        ) }
                           
                 
                        
                       
                    </tbody>

                    </table>
 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            
                    </div>
                    </div>
                </div>
            </div> 
            
           
        )
    }
}

export default ListCourseModal;