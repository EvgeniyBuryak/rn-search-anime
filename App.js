import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/home-screens/home-screen.view';
import ResultsShowScreen from './src/screens/results-show-screen/results-show-screen.view';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Test Anime'
    }
  }
);

export default createAppContainer(navigator);