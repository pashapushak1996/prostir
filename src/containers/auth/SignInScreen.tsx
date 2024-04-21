import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Box from '@app/components/Box';
import AppText from '@app/components/AppText';
import AppButton from '@app/components/AppButton';
import AppTextInput from '@app/components/AppTextInput.tsx';
import {AppleIcon, FacebookIcon, GoogleIcon} from '@assets/icons';

const SignInScreen = () => {
  const icons = useMemo(
    () => [{Icon: GoogleIcon}, {Icon: FacebookIcon}, {Icon: AppleIcon}],
    [],
  );

  return (
    <Box
      backgroundColor={'mainBackground'}
      flex={1}
      paddingTop={'xxl'}
      paddingHorizontal={'l'}>
      <SafeAreaView style={styles.flex}>
        <AppText
          variant={'pageHeader'}
          textAlign={'center'}
          marginBottom={'xxl'}>
          Sign in
        </AppText>
        <Box marginBottom={'xl'}>
          <AppText variant={'inputLabel'} marginBottom={'xs'}>
            Email
          </AppText>
          <Box>
            <AppTextInput placeholder={'Email'} />
          </Box>
        </Box>
        <Box marginBottom={'xl'}>
          <AppText variant={'inputLabel'} marginBottom={'xs'}>
            Password
          </AppText>
          <AppTextInput placeholder={'Email'} marginBottom={'xs'} />
          <Box alignSelf={'flex-end'}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                console.log('Navigate to forgot password');
              }}>
              <AppText variant={'inputLabel'} color={'primary'}>
                Forgot password?
              </AppText>
            </TouchableOpacity>
          </Box>
        </Box>
        <AppButton onPress={() => {}} title={'Sign in'} marginBottom={'xxl'} />
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          marginBottom={'l'}>
          <Box backgroundColor={'secondary'} height={1} flex={1} />
          <Box alignItems={'center'} paddingHorizontal={'m'}>
            <AppText variant={'mainLabel'}>or</AppText>
          </Box>
          <Box backgroundColor={'secondary'} height={1} flex={1} />
        </Box>
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'ml'}
          marginBottom={'xl'}>
          {icons.map((icon, i) => (
            <Box
              key={i}
              width={48}
              height={48}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'inf'}
              borderColor={'primary'}
              borderWidth={1}>
              <icon.Icon />
            </Box>
          ))}
        </Box>
        <Box flexDirection={'row'} gap={'xs'} alignSelf={'center'}>
          <AppText variant={'mainLabelSmaller'} fontWeight={'500'}>
            Doesn't have an account?
          </AppText>
          <AppText
            variant={'mainLabelSmaller'}
            color={'primary'}
            textDecorationLine={'underline'}>
            Sign up
          </AppText>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default SignInScreen;
