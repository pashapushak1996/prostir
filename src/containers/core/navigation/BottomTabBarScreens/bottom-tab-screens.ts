import SCREENS from '@app/constants/screens.ts';
import {
  ChatIcon,
  HeartIcon,
  HomeIcon,
  ProfileRoundedIcon,
  SearchIcon,
} from '@assets/icons';
import ProfileScreen from '@app/containers/profile-screen/ProfileScreen.tsx';

export const bottomTabScreens = [
  {
    name: SCREENS.SEARCH_SCREEN,
    component: ProfileScreen,
    icon: SearchIcon,
    label: 'Search',
  },
  {
    name: SCREENS.CHATS_SCREEN,
    component: ProfileScreen,
    icon: ChatIcon,
    label: 'Chats',
  },
  {
    name: SCREENS.BOOKINGS_SCREEN,
    component: ProfileScreen,
    icon: HomeIcon,
    label: 'Bookings',
  },
  {
    name: SCREENS.SAVED_SCREEN,
    component: ProfileScreen,
    icon: HeartIcon,
    label: 'Saved',
  },
  {
    name: SCREENS.PROFILE_SCREEN,
    component: ProfileScreen,
    icon: ProfileRoundedIcon,
    label: 'Profile',
  },
];
