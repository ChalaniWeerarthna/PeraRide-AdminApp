import React from "react";
import { Grid } from "material-ui";
import * as dockActions from '../../actions/dockActions';
import * as notificationActions from '../../actions/notificationActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { RegularCard, Table, ItemGrid, CustomInput, Button ,Snackbar} from "../../components";

  class Docks extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        details: {stationID1: '', lockID1: '',stationID2: '', lockID2: '', lat: '', lon: '', dockName: ''},
        successValidation1: true,
        successValidation2: true
      }
      this.onChange = this.onChange.bind(this);
      this.onSave = this.onSave.bind(this);
    }

    componentWillMount() {
      this.props.dockActions.Docks();
    }


    onChange(event) {
      const field = event.target.name;
      const details = this.state.details;
      details[field] = event.target.value;
      return this.setState({details: details});
    }

    onSave(event) {
      if(this.isValid(event)){
        event.preventDefault();
        if(event.target.name === "addDock"){
          this.props.dockActions.addStation({stationID:this.state.details.stationID1,lockID:this.state.details.lockID1,
          lat:this.state.details.lat ,lon:this.state.details.lon ,dockName:this.state.details.dockName });
        } else if(event.target.name === "addLock"){
          this.props.dockActions.addLock({stationID:this.state.details.stationID2,lockID:this.state.details.lockID2 });
        }

        this.setState({stationID1: '', lockID1: '',stationID2: '', lockID2: '', lat: '', lon: '', dockName: '' })
        setTimeout(
          function() {
            this.props.notificationActions.clearAlertNotification()
          }.bind(this),
          6000
        );
      }
    }

    isValid = (event) =>{
      if(event.target.name === "addDock"){
        const {stationID1,lockID1,lat,lon,dockName} = this.state.details;
        if(stationID1 === '' || lockID1 === '' ||  lat === '' || lon === '' || dockName === ''){
          this.setState({successValidation1: false});
          return false;
        }
        return true;
      }else if(event.target.name === "addLock"){
        const {stationID2,lockID2} = this.state.details;
        if(stationID2 === '' || lockID2 === ''){
          this.setState({successValidation2: false});
          return false;
        }
        return true;
      }

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
           <ItemGrid xs={12} sm={12} md={6}>
                  <RegularCard
                    cardTitle="Add new Dock Station"
                    cardSubtitle="Enter Dock Station details"
                    content={
                      <div>
                        <Grid container>
                          <ItemGrid md={6}>
                            <CustomInput
                              labelText="Dock station ID"
                              error={!this.state.successValidation1}
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "stationID1",
                                value: this.state.details.stationID1,
                                onChange: this.onChange
                              }}
                            />
                          </ItemGrid>
                          <ItemGrid md={6}>
                            <CustomInput
                              labelText="Lock ID"
                              error={!this.state.successValidation1}
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "lockID1",
                                value: this.state.details.lockID1,
                                onChange: this.onChange
                              }}
                            />
                          </ItemGrid>
                        </Grid>
                        <Grid container>
                          <ItemGrid md={12}>
                            <CustomInput
                              labelText="Dock Name"
                              error={!this.state.successValidation1}
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "dockName",
                                value: this.state.details.dockName,
                                onChange: this.onChange
                              }}
                            />
                          </ItemGrid>
                        </Grid>
                        <Grid container>
                          <ItemGrid md={6}>
                            <CustomInput
                              labelText="Latitude"
                              error={!this.state.successValidation1}
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "lat",
                                value: this.state.details.lat,
                                onChange: this.onChange
                              }}
                            />
                          </ItemGrid>
                          <ItemGrid md={6}>
                            <CustomInput
                              labelText="Longitude"
                              error={!this.state.successValidation1}
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "lon",
                                value: this.state.details.lon,
                                onChange: this.onChange
                              }}
                            />
                          </ItemGrid>
                          </Grid>
                        <Grid container justify='center'>
                          <ItemGrid md={6}>
                            <Button
                              fullWidth
                              color="primary"
                              name="addDock"
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
              <ItemGrid xs={12} sm={12} md={6}>
                  <RegularCard
                    cardTitle="Add new Lock"
                    cardSubtitle="Enter lock details"
                    content={
                      <div>
                        <Grid container>
                          <ItemGrid md={6}>
                            <CustomInput
                              labelText="Dock station ID"
                              error={!this.state.successValidation2}
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "stationID2",
                                value: this.state.details.stationID2,
                                onChange: this.onChange
                              }}
                            />
                          </ItemGrid>
                          <ItemGrid md={6}>
                            <CustomInput
                              labelText="Lock ID"
                              error={!this.state.successValidation2}
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                name: "lockID2",
                                value: this.state.details.lockID2,
                                onChange: this.onChange
                              }}
                            />
                          </ItemGrid>
                        </Grid>
                        <Grid container justify='center'>
                          <ItemGrid md={6}>
                          <Button
                              fullWidth
                              color="primary"
                              name="addLock"
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
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Bicycle Docks"
              cardSubtitle="Summary of Bicycle Docks"
              content={
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Dock Name","Latitude" , "Longitude", "No. of available bikes", "No. of empty locks"]}
                  tableData={this.props.dock.docks}
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
      dock: state.dock,
      notification: state.notification
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    dockActions: bindActionCreators(dockActions, dispatch),
    notificationActions: bindActionCreators(notificationActions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Docks);
