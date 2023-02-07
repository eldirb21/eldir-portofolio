import React from 'react'
import { connect } from 'react-redux'

export const Splash = (props) => {
  return (
    <div>Splash</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)