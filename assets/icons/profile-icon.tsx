import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ProfileIcon = (props: SvgProps) => (
  <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
    <Path
      d="M14.0001 0.666992C12.2491 0.666992 10.5153 1.01187 8.89764 1.68193C7.27996 2.35199 5.81011 3.33412 4.57199 4.57224C2.07151 7.07272 0.666748 10.4641 0.666748 14.0003C0.666748 17.5365 2.07151 20.9279 4.57199 23.4284C5.81011 24.6665 7.27996 25.6487 8.89764 26.3187C10.5153 26.9888 12.2491 27.3337 14.0001 27.3337C17.5363 27.3337 20.9277 25.9289 23.4282 23.4284C25.9287 20.9279 27.3334 17.5365 27.3334 14.0003C27.3334 12.2494 26.9885 10.5156 26.3185 8.89788C25.6484 7.2802 24.6663 5.81035 23.4282 4.57224C22.1901 3.33412 20.7202 2.35199 19.1025 1.68193C17.4849 1.01187 15.751 0.666992 14.0001 0.666992ZM7.42675 22.3737C8.00008 21.1737 11.4934 20.0003 14.0001 20.0003C16.5067 20.0003 20.0001 21.1737 20.5734 22.3737C18.7059 23.8617 16.3879 24.6704 14.0001 24.667C11.5201 24.667 9.24008 23.8137 7.42675 22.3737ZM22.4801 20.4403C20.5734 18.1203 15.9467 17.3337 14.0001 17.3337C12.0534 17.3337 7.42675 18.1203 5.52008 20.4403C4.10166 18.5932 3.33297 16.3293 3.33341 14.0003C3.33341 8.12033 8.12008 3.33366 14.0001 3.33366C19.8801 3.33366 24.6667 8.12033 24.6667 14.0003C24.6667 16.427 23.8401 18.667 22.4801 20.4403ZM14.0001 6.00033C11.4134 6.00033 9.33342 8.08033 9.33342 10.667C9.33342 13.2537 11.4134 15.3337 14.0001 15.3337C16.5867 15.3337 18.6667 13.2537 18.6667 10.667C18.6667 8.08033 16.5867 6.00033 14.0001 6.00033ZM14.0001 12.667C13.4696 12.667 12.9609 12.4563 12.5859 12.0812C12.2108 11.7061 12.0001 11.1974 12.0001 10.667C12.0001 10.1366 12.2108 9.62785 12.5859 9.25278C12.9609 8.87771 13.4696 8.66699 14.0001 8.66699C14.5305 8.66699 15.0392 8.87771 15.4143 9.25278C15.7894 9.62785 16.0001 10.1366 16.0001 10.667C16.0001 11.1974 15.7894 11.7061 15.4143 12.0812C15.0392 12.4563 14.5305 12.667 14.0001 12.667Z"
      fill={props.color || '#57CC99'}
    />
  </Svg>
);