import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Heroes from './Heroes';

//pushed screen
/*import HeroAdd from './HeroAdd';
import HeroView from './HeroView';*/

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Heroes', () => Heroes);
}