import React, { Component } from 'react';



class ListProgramModal extends Component{

    constructor(props){
        super(props);
        
        // console.log(this.props)
        
    }

    
    render(){
        
       
        return (
            <div className="modal fade" id="listPrograms" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Programs</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       { this.props.data.map(a => <p key={a.code} >{a.name+" "+"( "+a.code+" )"}</p>) }

                       {/* console.log({this.props.data}) */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                    </div>
                </div>
            </div> 
            
           
        )
    }
}

export default ListProgramModal;