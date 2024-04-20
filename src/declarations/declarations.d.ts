declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';

declare module 'react-native-config' {
  export type NativeConfig = {
    HOST_URL: string;
    LOG_ENABLED: string;
    LOG_SEVERITY: string;
  };
  export const Config: NativeConfig;
  export default Config;
}
