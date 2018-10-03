import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Building from './Building';


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
  this.subtitle.style.color = '#f00';
}

closeModal() {
  this.setState({modalIsOpen: false});
}

 buildingClick(buildingId){
       this.openModal();
       this.setState({selectedBuilding: buildingId});
}

displayBuilding(buildingId)
{
    var b= this.props.buildings.find(x=>x._id==buildingId);


    return b;
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

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>{this.state.selectedBuilding}
          
          {      
           this.displayBuilding(this.state.selectedBuilding)   
          };
          
          
          </div>
        </Modal>
        </div>
        );
    }
}

export default BuildingList;