import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Box from '@app/components/Box';
import AppText from '@app/components/AppText';
import AppButton from '@app/components/AppButton';
import AppTextInput from '@app/components/AppTextInput.tsx';
import {AppleIcon, FacebookIcon, GoogleIcon} from '@assets/icons';
import {NavigationProps} from '@app/types/navigation.ts';
import SCREENS from '@app/constants/screens.ts';
import {authManager} from '@app/services/authManager.ts';

// TODO Add error handler (Confirm password)

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChangeTextInput = (type: string) => (text: string) => {
    setAuthData(prevData => ({...prevData, [type]: text}));
  };

  const handleClickSignUp = async () => {
    setIsLoading(true);

    try {
      await authManager.signUp({
        email: authData.email,
        password: authData.password,
      });
    } catch (e) {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const handleClickSignIn = () => {
    navigation.navigate(SCREENS.SIGN_IN);
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
          Sign up
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
        </Box>
        <Box marginBottom={'xl'}>
          <AppText variant={'inputLabel'} marginBottom={'xs'}>
            Confirm password
          </AppText>
          <AppTextInput
            value={authData.confirmPassword}
            onChangeText={handleChangeTextInput('confirmPassword')}
            placeholder={'Confirm password'}
            marginBottom={'xs'}
          />
        </Box>
        <AppButton
          isLoading={isLoading}
          onPress={handleClickSignUp}
          title={'Sign up'}
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
          <AppText fontWeight={'500'}>Have an account?</AppText>
          <AppText
            onPress={handleClickSignIn}
            fontWeight={'600'}
            color={'primary'}
            textDecorationLine={'underline'}>
            Sign In
          </AppText>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default SignUpScreen;
