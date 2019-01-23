import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'


// MAIN PAGES LOCATION
import HomeScreen from './app/views/HomeScreen.js';
import SettingScreen from './app/views/SettingScreen.js';

const MyDrawerNavigator = createDrawerNavigator({

  // PAGES 
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Settings: {
    screen: SettingScreen
  }

}, {
  initialRouteName: 'Home'
});

const App = createAppContainer(MyDrawerNavigator);

export default App;