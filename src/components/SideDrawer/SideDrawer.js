import { makeStyles } from '@material-ui/core'
import React from 'react'

const SIdeDrawer = () => {
  const classes = useStyles()
  return (
    <div className={classes.sideDrawerContainer}>
      Side drawer
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  sideDrawerContainer:{
    width :theme.custom.sideDrawer.width,
    backgroundColor:'#fff'
  }
}))

export default SIdeDrawer
