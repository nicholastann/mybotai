import LoginPage from './components/LoginPage.js'
import DiscoverPage from './components/DiscoverPage.js'
import NavigationBar from './components/NavigationBar.js'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import "./App.css"; // Import CSS file with custom style


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
    background: {
      default: "#101015",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  let isLogedIn = true

  if (isLogedIn) return (<>
      <ThemeProvider theme={theme}>
        <div className="app-wrapper">
          <NavigationBar/>
          <DiscoverPage/>
        </div>
      </ThemeProvider>
  </>)
  else return (<LoginPage/>)
}

export default App;
