import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Heroes from './Heroes';
// import Settings from './Settings';

//pushed screen
import HeroAdd from './HeroAdd';
import HeroView from './HeroView';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Heroes', () => Heroes);
  // Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd);
  Navigation.registerComponent('push.HeroView', () => HeroView);
}