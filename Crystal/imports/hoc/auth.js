import React from 'react';
import { withRouter } from 'react-router-dom';

const auth = (WrappedComponent) => {
  class Auth extends React.Component {

    componentWillMount() {
      this.checkAuthentication(this.props);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
          this.checkAuthentication(nextProps);
      }
  }

  checkAuthentication(params) {
    const { history } = params;
   // checkCredentials()
     //   .catch(e => history.replace({ pathname: '/login' }));

console.log(Meteor.userId());
     if(Meteor.userId()){
      return;      
     }
     
     //if not logged in go here 
     history.replace({pathname: '/'});
 }

    render() {
       
      return (
        <WrappedComponent  {...this.props} 
        />
      );
    }
  }
    
  return Auth;
};

export default auth;