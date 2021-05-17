import {
  Fade,
  List,
  ListItem,
  makeStyles,
  Paper,
  Popover,
  Popper,
  Typography
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import sideDrawerOptions from './sideDrawerOptions'

const SideDrawer = () => {
  const { sideDrawerOpen } = useSelector((state) => state.generalState)
  const classes = useStyles({ sideDrawerOpen: sideDrawerOpen })

  return (
    <div className={classes.sideDrawerContainer}>
      {sideDrawerOpen ? (
        <>
          <p
            className={clsx('text-xs px-4 font-medium text-gray-400', {
              hidden: !sideDrawerOpen
            })}
          >
            MAIN MENU
          </p>
          {sideDrawerOptions.mainMenu.map((option) => (
            <div>
              <CustomAccordion
                Icon={option.icon}
                name={option.name}
                subOptions={option.subOptions}
              />
            </div>
          ))}
        </>
      ) : (
        <IconsSideBar />
      )}
    </div>
  )
}

const Accordion = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion)

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    minHeight: 44,
    borderRadius: theme.shape.borderRadius,
    fontSize: 14,
    padding: theme.spacing(0, 2.5),
    marginBottom: theme.spacing(1),
    // backgroundColor:'#f0f3ff',
    '&$expanded': {
      minHeight: 44
    },
    '&:active': {
      backgroundColor: '#f0f3ff'
    }
  },
  content: {
    display: 'felx',
    alignItems: 'center',
    gap: theme.spacing(2.5),
    '&>svg': {
      color: 'rgb(173, 180, 210)',
      width: 16,
      height: 16
    },
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {},
  expandIcon: {
    transform: 'rotate(275deg)',
    '&$expanded': {
      transform: 'rotate(360deg)'
    }
  }
}))(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: 0,
    marginBottom: theme.spacing(1),
    '&>a': {
      paddingLeft: theme.spacing(6),
      height: theme.spacing(5),
      // backgroundColor:'gray',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      color: '#272b41',
      fontSize: 14,
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        color: '#5f63f2',
        cursor: 'pointer'
      },
      '&:active, &.active': {
        color: '#5f63f2',
        backgroundColor: '#f0f3ff'
      }
    }
  }
}))(MuiAccordionDetails)

const CustomAccordion = (props) => {
  const { name, Icon, subOptions } = props
  const classes = useCustomAccordionStyles()
  return (
    <Accordion>
      <AccordionSummary
        className={classes.accordionSummary}
        expandIcon={<ExpandMore />}
      >
        <Icon />
        <p>{name}</p>
      </AccordionSummary>
      {subOptions.map((item) => (
        <AccordionDetails>
          <Typography component={NavLink} to={item.to}>
            {item.name}
          </Typography>
          {/* <Link to={item.to}>{item.name}</Link> */}
        </AccordionDetails>
      ))}
    </Accordion>
  )
}

const useCustomAccordionStyles = makeStyles((theme) => ({
  accordionSummary: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2.5)
  }
}))

const IconsSideBar = () => {
  const classes = useIconsSidebarStyles()
  const [popverData, setPopverData] = useState({
    open: false,
    anchorEl: null,
    subOptions: []
  })

  const handleOpenPopver = (e, subOptions) => {
    console.log(e.currentTarget)
    setPopverData({
      open: true,
      anchorEl: e.currentTarget,
      subOptions: subOptions
    })
  }

  const handleClosePopver = () => {
    setPopverData({
      open: false,
      anchorEl: null,
      subOptions: []
    })
  }

  return (
    <div className={classes.iconsSideBarContainer}>
      <div className={classes.iconsContainer}>
        {sideDrawerOptions.mainMenu.map((option) => (
          <div
            // onMouseLeave={handleClosePopver}
            onMouseEnter={(e) => handleOpenPopver(e, option.subOptions)}
            className={classes.iconButton}
          >
            <option.icon />
          </div>
        ))}
      </div>
      {/* <Popper
        onClose={handleClosePopver}
        open={popverData.open}
        anchorEl={popverData.anchorEl}
        placement="right-start"
        onMouseLeave={handleClosePopver}
      >
        <List>
          <ListItem>Test</ListItem>
        </List>
      </Popper> */}
      <Popper
        open={popverData.open}
        onMouseLeave={handleClosePopver}
        anchorEl={popverData.anchorEl}
        placement={'right-start'}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.popverContainer}>
              {popverData.subOptions.map((i) => (
                <NavLink to={i.to}>{i.name}</NavLink>
              ))}
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  )
}

const useIconsSidebarStyles = makeStyles((theme) => ({
  iconsSideBarContainer: {
    width: theme.custom.sideDrawer.width.closed,
    height: '100%'
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '&>div, &>a': {
      height: 40,
      width: '100%',
      padding: theme.spacing(0, 2.5),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      '&>svg': {
        color: 'rgb(173, 180, 210)',
        width: 16,
        height: 16
      }
    }
  },
  popverContainer: {
    backgroundColor: '#fff',
    padding: theme.spacing(1, 0),
    borderRadius: theme.shape.borderRadius,
    width: 160,
    minWidth: 160,
    maxHeight: `calc(100vh - 100px)`,
    maxWidth: 180,
    boxShadow: '0 2px 8px rgb(0 0 0 / 5%)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '&>a': {
      color: '#5a5f7d',
      cursor: 'pointer',
      fontSize: 14,
      height: theme.spacing(5),
      padding: theme.spacing(0, 2),
      display: 'flex',
      alignItems: 'center',
      '&:hover, &:active, &.active': {
        backgroundColor: '#f0f3ff'
      }
    }
  }
}))

const useStyles = makeStyles((theme) => ({
  sideDrawerContainer: {
    padding: ({ sideDrawerOpen }) => (sideDrawerOpen ? theme.spacing(2) : 0),
    paddingBottom: theme.spacing(7),
    overflowX: 'hidden',
    width: ({ sideDrawerOpen }) =>
      sideDrawerOpen
        ? theme.custom.sideDrawer.width.open
        : theme.custom.sideDrawer.width.closed,
    backgroundColor: '#fff',
    transition: theme.transitions.create(['width', 'background-color'], {
      duration: theme.transitions.duration.leavingScreen
    })
  }
}))

export default SideDrawer
