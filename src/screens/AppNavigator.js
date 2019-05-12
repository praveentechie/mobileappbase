import { createAppContainer, createStackNavigator } from 'react-navigation';
import WelcomeScreen from './onboarding/WelcomeScreen';
import UserInfoScreen from './onboarding/UserInfoScreen';

const routeConfig = {
  WelcomeScreen: { screen: WelcomeScreen },
  UserInfoScreen: {
    screen: UserInfoScreen,
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: 'user/:name',
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile`
    })
  }
};

const navigatorConfig = {
  /**
  // initial page options
  initialRouteName: 'UserInfoScreen',
  initialRouteParams: {name: 'FirstScreen'},
  */
  navigationOptions: {
    header: null
  }
};

const AppNavigator = createStackNavigator(routeConfig, navigatorConfig);

export default createAppContainer(AppNavigator);
