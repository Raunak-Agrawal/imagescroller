import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import BackgroundCarousel from './screens/BackgroundCarousel';
import AddImage from './screens/AddImage';

const AppStack = createStackNavigator(
  {
    AddImage: {
      screen: AddImage,
      navigationOptions: {
        title: 'Upload Image',
      },
    },
    BackgroundCarousel: {
      screen: BackgroundCarousel,
      navigationOptions: {
        title: 'Image Scroller',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#F6F7FF',
        shadowColor: 'transparent',
        elevation: 0,
      },
    },
    headerLayoutPreset: 'center',
  },
);

export default createAppContainer(AppStack);
