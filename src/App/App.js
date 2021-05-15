import { MuiThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import Routes from 'routes/Routes'
import theme from 'theme/theme'
import configureStore from 'store/store'

const store = configureStore()

const App = () =>{
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
          <Routes/>
        </div>
      </Provider>
    </MuiThemeProvider>
  )
}


export default App