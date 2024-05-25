import {Image} from 'react-native';
import {createBox} from '@shopify/restyle';

import {Theme} from '@app/theme';

const AppImage = createBox<Theme, React.ComponentProps<typeof Image>>(Image);

export default AppImage;
