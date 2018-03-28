import React from "react";
import { Grid } from "material-ui";
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as riderActions from 'actions/riderActions';


import {
  ProfileCard,
  RegularCard,
  CustomInput,
  ItemGrid,
  Button,
  Snackbar
} from "components";

import { Fingerprint } from "material-ui-icons";

import avatar from "assets/img/faces/marc.jpg";

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details: {regNo: '', phoneNo: ''},
      successValidation: true
    }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const details = this.state.details;
    details[field] = event.target.value;    
    return this.setState({details: details});
  }

  onSave(event) {
    if(this.isValid()){
      event.preventDefault();
      this.props.actions.addRider(this.state.details);
    }else{
      this.setState({successValidation: false});
    }        
  }

  isValid = () =>{
    const {details} = this.state;
    if(details.regNo === '' && details.phoneNo === ''){
      return false;
    }
    return true;
  }

  render(){
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
              <RegularCard
                cardTitle="Add new rider"
                cardSubtitle="Enter rider details"
                content={
                  <div>
                    <Grid container>
                      <ItemGrid md={12}>
                        <CustomInput
                          labelText="Registration Number"
                          error={!this.state.successValidation}   
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            name: "regNo",
                            value: this.state.details.regNo,
                            onChange: this.onChange
                          }}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid md={12}>
                        <CustomInput
                          labelText="Phone number"
                          error={!this.state.successValidation}          
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            name: "phoneNo",
                            value: this.state.details.phoneNo,
                            onChange: this.onChange,
                            type: "phoneNo"
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
                          Add
                        </Button>
                      </ItemGrid>
                    </Grid>
                  </div>
                }
              />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ProfileCard
              avatar={avatar}
              subtitle="CEO / CO-FOUNDER"
              title="Alec Thompson"
              description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
              
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
    actions: bindActionCreators(riderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
