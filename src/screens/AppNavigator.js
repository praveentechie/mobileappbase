import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from './onboarding/WelcomeScreen';

const AppNavigator = createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
});

export default AppNavigator;
