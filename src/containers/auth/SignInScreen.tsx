import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

import Box from '@app/components/Box';
import AppText from '@app/components/AppText';
import AppButton from '@app/components/AppButton';

const SignInScreen = () => {
  return (
    <Box backgroundColor={'mainBackground'} flex={1}>
      <SafeAreaView style={styles.flex}>
        <AppText>Sign in screen</AppText>
        <AppButton onPress={() => {}} title={'Sign in'} />
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default SignInScreen;
