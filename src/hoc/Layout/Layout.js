import React, { Component } from 'react';
import Auxx from '../Auxx/Auxx';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });

  }
  sideDrawrToggleHander = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
      // so instead use the function form, expect the previus state input and in there 
      // simply return the object you want to set as a new state or you want to merge into the state 
      //  i shoud say. and of course therefore in there, you don't
      //  access this.state but you use the previus state you get passed into this 
      //  funtion automatically. This is the clean way of setting the state when it dpends 
      //  on the old state, now we have a secure way of togglin that and changing 
      //  showSideDrawer (el menu lateral) 
    });
  }
  render() {
    return (
      <Auxx>
        <Toolbar drawerTogglecliked={this.sideDrawrToggleHander} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxx>
    )

  }

}


export default Layout;