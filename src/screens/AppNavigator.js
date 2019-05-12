import { createAppContainer, createStackNavigator } from 'react-navigation';
import WelcomeScreen from './onboarding/WelcomeScreen';
import UserInfoScreen from './onboarding/UserInfoScreen';

const AppNavigator = createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  UserInfoScreen: { screen: UserInfoScreen }
});

export default createAppContainer(AppNavigator);
