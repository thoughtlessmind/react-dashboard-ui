const { createMuiTheme } = require('@material-ui/core')

const theme = createMuiTheme({
  typography:{
    fontFamily:`'Inter', sans-serif`
  },
  props: {
    MuiButton: {
      disableElevation: true
    }
  },
  custom: {
    header: {
      height: 64
    },
    sideDrawer: {
      width: { open: 250, closed: 80 }
    }
  }
})

export default theme
