import { makeStyles } from '@material-ui/core'
import Header from 'components/Header'
import SideDrawer from 'components/SideDrawer/SideDrawer'
import { useSelector } from 'react-redux'

const Dashboard = (props) => {
  const { sideDrawerOpen } = useSelector((state) => state.generalState)
  const classes = useStyles({ sideDrawerOpen: sideDrawerOpen })
  return (
    <div>
      <Header />
      <div className={classes.bodyContainer}>
        <SideDrawer />
        <div className={classes.mainSectionContainer}>{props.children}</div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: `calc(100vh - ${theme.custom.header.height}px )`,
    backgroundColor: 'rgb(244, 245, 247)'
  },
  mainSectionContainer: {
    width: ({ sideDrawerOpen }) =>
      `calc(100vh - ${
        sideDrawerOpen
          ? theme.custom.sideDrawer.width.open
          : theme.custom.sideDrawer.width.closed
      }px)`,
    transition: theme.transitions.create(['width'], {
      duration: theme.transitions.duration.leavingScreen
    }),
    flexGrow: 1,
    flexShrink: 1
  }
}))

export default Dashboard
