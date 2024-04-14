import React from 'react';
import {BoxProps, TextProps} from '@shopify/restyle';
import {ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';

import {Theme} from '@app/theme';
import Box from './Box';
import AppText from './AppText';

type ButtonProps = {
  onPress: () => void;
  isLoading?: boolean;
  isEnabled?: boolean;
  textProps?: TextProps<Theme>;
  title?: string;
} & Partial<BoxProps<Theme>>;

const AppButton: React.FC<React.PropsWithChildren<ButtonProps>> = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={props.onPress} disabled={props.isEnabled === false}>
      <Box
        py="ml"
        px="l"
        alignItems="center"
        backgroundColor={props.isEnabled === false ? 'primaryDarker' : 'primary'}
        borderRadius="xl"
        shadowOffset={{height: 2, width: 0}}
        shadowRadius={5}
        shadowOpacity={0.2}
        {...props}>
        {props.isLoading && <ActivityIndicator color="textSecondary" style={styles.loader} testID="buttonLoading" />}
        <Box opacity={props.isLoading ? 0 : 100}>
          {props.children ? (
            props.children
          ) : (
            <AppText variant="buttonLabel" {...props.textProps}>
              {props.title}
            </AppText>
          )}
        </Box>
      </Box>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  loader: {
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default AppButton;
