import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'


// MAIN PAGES LOCATION
import HomeScreen from './components/home/HomeScreen.js';
import SettingScreen from './components/setting-screen/SettingScreen.js';

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