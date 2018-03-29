import React from "react";
import { Grid } from "material-ui";
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as riderActions from 'actions/riderActions';
import * as notificationActions from 'actions/notificationActions';


import {
  RegularCard,
  CustomInput,
  ItemGrid,
  Button,
  Snackbar,
  Table
} from "components";


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
      this.props.riderActions.addRider(this.state.details);
      this.setState({details: {regNo:'', phoneNo:''}})
      setTimeout(
        function() {
          this.props.notificationActions.clearAlertNotification()
        }.bind(this),
        6000
      );
    }else{
      this.setState({successValidation: false});
    }        
  }

  componentWillMount() {
    this.props.riderActions.getRiders();
  }

  isValid = () =>{
    const {details} = this.state;
    if(details.regNo === '' || details.phoneNo === ''){
      return false;
    }
    return true;
  }

  render(){
    return (
      <div>
        <Snackbar
               place="tc"
               color={this.props.notification.color}
               icon = {this.props.notification.icon}
               message={this.props.notification.message}
               open={this.props.notification.isNotify}
               closeNotification={() => this.props.notificationActions.clearAlertNotification()}
               close
                    />
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
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
          <ItemGrid xs={12} sm={12} md={8}>
        <RegularCard
          cardTitle="Users"
          cardSubtitle="User Details"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["Registration number", "Phone number"]}
              tableData={this.props.rider.riders}
            />
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
      rider: state.rider,
      notification: state.notification
    }
  }

function mapDispatchToProps(dispatch) {  
  return {
    riderActions: bindActionCreators(riderActions, dispatch),
    notificationActions: bindActionCreators(notificationActions, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
