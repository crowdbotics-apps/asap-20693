import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings110629Navigator from '../features/Settings110629/navigator';
import Settings110621Navigator from '../features/Settings110621/navigator';
import UserProfile110619Navigator from '../features/UserProfile110619/navigator';
import UserProfile110523Navigator from '../features/UserProfile110523/navigator';
import Tutorial110522Navigator from '../features/Tutorial110522/navigator';
import NotificationList110494Navigator from '../features/NotificationList110494/navigator';
import Settings110493Navigator from '../features/Settings110493/navigator';
import Settings110485Navigator from '../features/Settings110485/navigator';
import UserProfile110483Navigator from '../features/UserProfile110483/navigator';
import UserProfile110452Navigator from '../features/UserProfile110452/navigator';
import Tutorial110451Navigator from '../features/Tutorial110451/navigator';
import NotificationList110423Navigator from '../features/NotificationList110423/navigator';
import Settings110422Navigator from '../features/Settings110422/navigator';
import Settings110414Navigator from '../features/Settings110414/navigator';
import UserProfile110412Navigator from '../features/UserProfile110412/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings110629: { screen: Settings110629Navigator },
Settings110621: { screen: Settings110621Navigator },
UserProfile110619: { screen: UserProfile110619Navigator },
UserProfile110523: { screen: UserProfile110523Navigator },
Tutorial110522: { screen: Tutorial110522Navigator },
NotificationList110494: { screen: NotificationList110494Navigator },
Settings110493: { screen: Settings110493Navigator },
Settings110485: { screen: Settings110485Navigator },
UserProfile110483: { screen: UserProfile110483Navigator },
UserProfile110452: { screen: UserProfile110452Navigator },
Tutorial110451: { screen: Tutorial110451Navigator },
NotificationList110423: { screen: NotificationList110423Navigator },
Settings110422: { screen: Settings110422Navigator },
Settings110414: { screen: Settings110414Navigator },
UserProfile110412: { screen: UserProfile110412Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
