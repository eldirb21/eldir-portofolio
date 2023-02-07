import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, HashRouter } from "react-router-dom";
import { settings } from '../portfolio';

export const Main = (props) => {
    if (settings.isSplash) {
        return (
            <div>Main</div>
          )
    }else{
        return (
            <div>Main</div>
          )
    }
 
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Main)