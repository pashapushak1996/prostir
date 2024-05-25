import React from 'react';
import {SvgProps} from 'react-native-svg';

import Box from '@app/components/Box.tsx';
import AppText from '@app/components/AppText.tsx';
import {ChevronRightIcon} from '@assets/icons';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  label: string;
  Icon: React.FC<SvgProps>;
  onPress: () => void;
  withArrow?: boolean;
}

const ProfileScreenTab: React.FC<Props> = props => {
  const {Icon, withArrow = true} = props;

  return (
    <Box borderBottomColor={'secondaryLighter'} borderBottomWidth={1} py={'ml'}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
        activeOpacity={0.6}>
        <Box flex={1} flexDirection={'row'} alignItems={'center'} gap={'s'}>
          <Icon />
          <AppText>{props.label}</AppText>
        </Box>
        {withArrow && <ChevronRightIcon />}
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfileScreenTab;
