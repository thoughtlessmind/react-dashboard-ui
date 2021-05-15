const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  props:{
    MuiButton:{
      disableElevation:true,
    }
  },
  custom:{
    header:{
      height:64
    },
    sideDrawer:{
      width: 250
    }
  }
})

export default theme