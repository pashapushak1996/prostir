import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Box from '@app/components/Box';
import AppText from '@app/components/AppText';
import AppButton from '@app/components/AppButton';
import AppTextInput from '@app/components/AppTextInput.tsx';
import {AppleIcon, FacebookIcon, GoogleIcon} from '@assets/icons';
import {NavigationProps} from '@app/types/navigation.ts';
import SCREENS from '@app/constants/screens.ts';
import {authManager} from '@app/services/authManager.ts';

// TODO Add error handler

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const handleChangeTextInput = (type: string) => (text: string) => {
    setAuthData(prevData => ({...prevData, [type]: text}));
  };

  const handleClickSignIn = async () => {
    setIsLoading(true);

    const isFulfilledData = Object.keys(authData).every(
      authKey => authData[authKey as never],
    );

    if (isFulfilledData) {
      await authManager.signIn(authData);
    }

    setIsLoading(false);
  };

  const handleClickSignUp = () => {
    navigation.navigate(SCREENS.SIGN_UP);
  };

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
            <AppTextInput
              value={authData.email}
              onChangeText={handleChangeTextInput('email')}
              placeholder={'Email'}
            />
          </Box>
        </Box>
        <Box marginBottom={'xl'}>
          <AppText variant={'inputLabel'} marginBottom={'xs'}>
            Password
          </AppText>
          <AppTextInput
            value={authData.password}
            onChangeText={handleChangeTextInput('password')}
            placeholder={'Password'}
            marginBottom={'xs'}
          />
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
        <AppButton
          isLoading={isLoading}
          onPress={handleClickSignIn}
          title={'Sign in'}
          marginBottom={'xxl'}
        />
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
            onPress={handleClickSignUp}
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
