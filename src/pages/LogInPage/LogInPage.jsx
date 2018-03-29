import React from 'react';  
import {bindActionCreators} from 'redux';  
import {connect} from 'react-redux';  
import * as sessionActions from 'actions/sessionActions';
import { Grid } from "material-ui";
import {
  RegularCard,
  CustomInput,
  ItemGrid,
  Button,
  Snackbar
} from "components";
import { Fingerprint } from "material-ui-icons";



class LogInPage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      credentials: {email: '', password: ''},
      successValidation: true
    }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;    
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    if(this.isValid()){
      event.preventDefault();
      this.props.actions.logInUser(this.state.credentials);
    }else{
      this.setState({successValidation: false});
    }        
  }

  isValid = () =>{
    const {credentials} = this.state;
    if(credentials.email === '' && credentials.password === ''){
      return false;
    }
    return true;
  }

  render() {
    return (
      < div >
      
        <Grid 
          container 
          justify='center'
          alignItems='center'
          style={{height: 600}}>
          <ItemGrid >
            <Snackbar
               place="tc"
               color="danger"
               icon = {Fingerprint}
               message={this.props.session.message}
               open={this.props.session.failNotification}
               closeNotification={() => this.props.actions.clearAlertNotification()}
               close
                    />
            <RegularCard
              cardTitle="Admin Login"
              cardSubtitle="Enter your username and password"
              content={
                <div>
                  <Grid container>
                    <ItemGrid md={12}>
                      <CustomInput
                        labelText="Username"
                        error={!this.state.successValidation}   
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "email",
                          value: this.state.credentials.email,
                          onChange: this.onChange
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid md={12}>
                      <CustomInput
                        labelText="Password"
                        error={!this.state.successValidation}          
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "password",
                          value: this.state.credentials.password,
                          onChange: this.onChange,
                          type: "password"
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container justify='center'>
                    <ItemGrid md={6}>
                      <Button
                        fullWidth
                        color="primary"
                        onClick={this.onSave}
                      >
                        Login
                      </Button>
                    </ItemGrid>
                  </Grid>
                </div>
              }
            />
          </ItemGrid>
        </Grid>
      </div>
  );
  }
}

const mapStateToProps = (state) =>
  {
    return{
      session: state.session
    }
  }

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);