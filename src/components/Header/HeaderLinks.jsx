import React from "react";
import classNames from "classnames";
import {bindActionCreators} from 'redux';  
import { Manager, Target, Popper } from "react-popper";
import {connect} from 'react-redux';  
import  * as sessionActions from 'actions/sessionActions';
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from "material-ui";
import { Person, Dashboard, Search } from "material-ui-icons";

import { CustomInput, IconButton as SearchButton } from "components";

import headerLinksStyle from "variables/styles/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    openLogout: false
  };

  onClick = () =>{
    this.props.sessionActions.logoutUser();
  }

  handleLogoutClick = () => {
    this.setState({ openLogout: !this.state.openLogout });
  };

  handleLogoutClose = () => {
    this.setState({ openLogout: false });
  };

  render() {
    const { classes } = this.props;
    const { openLogout } = this.state;
    return (
      <div>
        <CustomInput
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <SearchButton
          color="white"
          aria-label="edit"
          customClass={classes.top + " " + classes.searchButton}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>
        <IconButton
          color="inherit"
          aria-label="Dashboard"
          className={classes.buttonLink}
        >
          <Dashboard className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Dashboard</p>
          </Hidden>
        </IconButton>
        <Manager style={{ display: "inline-block" }}>
        <Target>
        <IconButton
          color="inherit"
          aria-label="Person"
          aria-haspopup="true" 
          onClick={this.handleLogoutClick}          
          aria-owns={openLogout ? "logout" : null}                   
          className={classes.buttonLink}
        >
          <Person className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
        </Target>        
        <Popper
            placement="bottom-start"
            eventsEnabled={openLogout}
            className={
              classNames({ [classes.popperClose]: !openLogout }) +
              " " +
              classes.pooperResponsive
            }
          >
            <ClickAwayListener onClickAway={this.handleLogoutClose}>
              <Grow
                in={openLogout}
                id="logout"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.onClick}
                      className={classes.dropdownItem}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
          </Manager>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {  
  return {
    sessionActions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(withStyles(headerLinksStyle)(HeaderLinks));
