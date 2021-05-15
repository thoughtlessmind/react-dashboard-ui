import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

const SIdeDrawer = () => {
  const { sideDrawerOpen } = useSelector((state) => state.generalState)
  const classes = useStyles({ sideDrawerOpen: sideDrawerOpen })

  return <div className={classes.sideDrawerContainer}>Side drawer</div>
}

const useStyles = makeStyles((theme) => ({
  sideDrawerContainer: {
    width: ({ sideDrawerOpen }) => (sideDrawerOpen ? theme.custom.sideDrawer.width.open : theme.custom.sideDrawer.width.closed),
    backgroundColor: ({ sideDrawerOpen }) => (sideDrawerOpen ? '#fff' : '#f55'),
    transition: theme.transitions.create(['width'], {
      duration: theme.transitions.duration.leavingScreen
    }),
  }
}))

export default SIdeDrawer
