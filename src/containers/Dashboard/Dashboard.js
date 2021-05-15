import { makeStyles } from '@material-ui/core'
import Header from 'components/Header'
import SideDrawer from 'components/SideDrawer/SideDrawer'

const Dashboard = (props) => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <div className={classes.bodyContainer}>
        <SideDrawer />
        <div className={classes.mainSectionContainer}>
        {props.children}
        </div>
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
    backgroundColor:'rgb(244, 245, 247)'
  },
  mainSectionContainer:{
    width:`calc(100vh - ${theme.custom.sideDrawer.width}px)`,
    flexGrow:1,
    flexShrink:1
  }
}))

export default Dashboard
