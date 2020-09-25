import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList110423Navigator from '../features/NotificationList110423/navigator';
import Settings110422Navigator from '../features/Settings110422/navigator';
import Settings110414Navigator from '../features/Settings110414/navigator';
import UserProfile110412Navigator from '../features/UserProfile110412/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
