import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'


// MAIN PAGES LOCATION
import HomeScreen from './screens/HomeScreen.js';
import SettingScreen from './screens/SettingScreen.js';

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