import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Building from './Building';
import RoomList from './RoomList';

const customStyles = {
    content : {
      top                   : '10%',
      left                  : '10%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-10%',
      transform             : 'translate(-10%, -10%)',
      height                : '80%',
      width                 : '80%',

    }
  };
  


class BuildingList extends Component{
    
constructor(props){
    super(props);

    this.state = {
        modalIsOpen: false,
        selectedBuilding: null
      };

    this.buildingClick = this.buildingClick.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}

openModal() {
  this.setState({modalIsOpen: true});
}

afterOpenModal() {
  // references are now sync'd and can be accessed.
  //console.log("test")
  if(typeof this.state.selectedBuilding.name !== 'undefined'){
    
  this.buildingName.innerText=this.state.selectedBuilding.name;
  }
  if(typeof this.state.selectedBuilding.address1 !== 'undefined'){
    
  this.buildingAddress1.innerText=this.state.selectedBuilding.address1
  }
  if(typeof this.state.selectedBuilding.address2 !== 'undefined'){
    
  this.buildingAddress2.innerText=this.state.selectedBuilding.address2
  }
  if(typeof this.state.selectedBuilding.address3 !== 'undefined'){
    
  this.buildingAddress3.innerText=this.state.selectedBuilding.address3
  }
  if(typeof this.state.selectedBuilding.county !== 'undefined'){
  
  this.buildingCounty.innerText=this.state.selectedBuilding.county
  }
  if(typeof this.state.selectedBuilding.postcode !== 'undefined'){
   
  this.buildingPostCode.innerText=this.state.selectedBuilding.postcode
  }
  if(typeof this.state.selectedBuilding.maxoccupancy !== 'undefined'){
   
  this.buildingMaxOccupancy.innerText=this.state.selectedBuilding.maxoccupancy
  }

  this.buildingId=this.state.selectedBuilding._id
  
  //ReactDOM
  ReactDOM.render(<RoomList buildingId={this.state.selectedBuilding._id}/> , document.getElementById('roomContainer'))
}

closeModal() {
  this.setState({modalIsOpen: false});
}

 buildingClick(buildingId){
      var b= this.props.buildings.find(x=>x._id==buildingId);
       this.openModal();
       this.setState({selectedBuilding: b});
}


  
    render()
    {
        return (
            <div className="row">
            {this.props.buildings.map((building)=>(
                <Building 
                onClick={()=>this.buildingClick(building._id)}
                buildingId={building._id}
                buildingName={building.name}
                buildingAddress1={building.address1}
                buildingAddress2={building.address2}
                buildingAddress3={building.address3}
                buildingOccupancy={building.maxoccupancy}
                buildingCounty={building.county}
                buildingPostCode={building.postcode}
                />
          
            ))}

            <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <span>Name: </span>
          <h4 ref={buildingName => this.buildingName = buildingName}></h4>
          <span>Address1</span>
          <h4 ref={buildingAddress1 => this.buildingAddress1 = buildingAddress1}></h4>
          <span>Address2</span>
          <h4 ref={buildingAddress2 => this.buildingAddress2 = buildingAddress2}></h4>
          <span>Address3</span>
          <h4 ref={buildingAddress3=> this.buildingAddress3 = buildingAddress3}></h4>
          <span>County</span>
          <h4 ref={buildingCounty => this.buildingCounty = buildingCounty}></h4>
          <span>Max Occupancy</span>
          <h4 ref={buildingMaxOccupancy => this.buildingMaxOccupancy = buildingMaxOccupancy}></h4>
          <span>Postcode:</span>
          <h4 ref={buildingPostCode => this.buildingPostCode = buildingPostCode}></h4>
         <div id="roomContainer"></div>

          <button onClick={this.closeModal}>close</button>
          <div>
          
        
          
          
          </div>
        </Modal>
        </div>
        );
    }
}

export default BuildingList;