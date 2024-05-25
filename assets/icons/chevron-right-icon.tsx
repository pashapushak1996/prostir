import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ChevronRightIcon = (props: SvgProps) => (
  <Svg width={8} height={12} viewBox="0 0 8 12" fill="none" {...props}>
    <Path
      d="M0.589844 10.58L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.58Z"
      fill={props.color || '#001306'}
    />
  </Svg>
);
