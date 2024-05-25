import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => (
  <Svg width={27} height={23} viewBox="0 0 27 23" fill="none" {...props}>
    <Path
      d="M13.5001 3.58667L20.1667 9.58667V20H17.5001V12H9.50008V20H6.83342V9.58667L13.5001 3.58667ZM13.5001 0L0.166748 12H4.16675V22.6667H12.1667V14.6667H14.8334V22.6667H22.8334V12H26.8334"
      fill={props.color || '#B3B8B4'}
    />
  </Svg>
);
