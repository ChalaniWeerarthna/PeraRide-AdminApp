import React from "react";
import { Grid } from "material-ui";
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import { RegularCard, Table, ItemGrid, Snackbar } from "components";
import * as riderActions from 'actions/riderActions';

class Bikes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details: { regNo: '', phoneNo: '', fName: '', lName: '', email: '' },
      successValidation: true
    }
  }

  componentWillMount() {
    this.props.riderActions.getCurrentUsers();
  }

  isValid = () => {
    const { regNo, phoneNo, fName, lName, email } = this.state.details;
    if (regNo === '' || phoneNo === '' ||
      fName === '' || lName === '' || email === '') {
      return false;
    }
    return true;
  }

  render() {
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
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              cardTitle="Active riders"
              cardSubtitle="Riders and borrowed bike details"
              content={
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Bike ID", "Date and Time", "Registration number"]}
                  tableData={this.props.rider.currentUsers}
                />
              }
            />
          </ItemGrid>
          {/* <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              cardTitle="Bikes"
              content={
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Bike ID"]}
                  tableData={[]}
                />
              }
            />
          </ItemGrid> */}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bikes);
