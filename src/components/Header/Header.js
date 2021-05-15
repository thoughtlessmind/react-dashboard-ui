import { Avatar, IconButton, makeStyles } from '@material-ui/core'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { Link } from 'react-router-dom'
import { FullscreenRounded, SettingsOutlined } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { toggleSideDrawer } from 'thunks/genral/actions'

const companyLogo =
  'https://demo.jsnorm.com/react/strikingdash/static/media/Logo_Dark.9ef25a33.svg'

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const handleToggleSideDrawer = () =>{
    dispatch(toggleSideDrawer())
  }

  return (
    <div className={classes.haderContainer}>
      <div className="flex items-center gap-1 ml-2">
        <IconButton onClick={handleToggleSideDrawer}>
          <MenuRoundedIcon />
        </IconButton>
        <Link className="w-32 flex items-center justify-center">
          <img src={companyLogo} alt="Logo" className="w-28 h-auto" />
        </Link>
      </div>
      <div className="flex items-center gap-2 mr-6">
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <FullscreenRounded />
        </IconButton>
        <Avatar classes={{ root: classes.avatarRoot }} />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  haderContainer: {
    width: '100vw',
    height: theme.custom.header.height,
    display: 'flex',
    padding: theme.spacing(0, 2),
    boxShadow: 'rgb(146 153 184 / 6%) 0px 2px 30px',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatarRoot: {
    width: 32,
    height: 32,
    cursor: 'pointer'
  }
}))

export default Header
