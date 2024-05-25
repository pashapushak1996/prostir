import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ChatIcon = (props: SvgProps) => (
  <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
    <Path
      d="M24.4167 0.666992H3.08341C1.61675 0.666992 0.416748 1.86699 0.416748 3.33366V27.3337L5.75008 22.0003H24.4167C25.8834 22.0003 27.0834 20.8003 27.0834 19.3337V3.33366C27.0834 1.86699 25.8834 0.666992 24.4167 0.666992ZM24.4167 19.3337H4.68341L3.08341 20.9337V3.33366H24.4167V19.3337Z"
      fill={props.color || '#B3B8B4'}
    />
  </Svg>
);
