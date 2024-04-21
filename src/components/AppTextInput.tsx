import {
  useRestyle,
  composeRestyleFunctions,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  spacing,
  border,
  backgroundColor,
  color,
  ColorProps,
  useTheme,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {TextInput} from 'react-native';
import React, {forwardRef} from 'react';

import {Theme} from '@app/theme.ts';

const variant = createVariant<Theme, 'textInputVariants'>({
  themeKey: 'textInputVariants',
});

function getVariant(theme: Theme, variantProp?: unknown) {
  const variantKey =
    `${variantProp || 'defaults'}` as keyof typeof theme.textInputVariants;
  return theme.textInputVariants[
    variantKey
  ] as (typeof theme.textInputVariants)[typeof variantKey];
}

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  VariantProps<Theme, 'textInputVariants'> & {
    error?: string | boolean;
    placeholderTextColor?: keyof Theme['colors'];
  };

type AppTextInputProps = React.ComponentPropsWithRef<typeof TextInput> &
  RestyleProps;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  color,
  variant as never,
]);

const AppTextInput = forwardRef<TextInput, AppTextInputProps>(
  ({...rest}: AppTextInputProps, ref) => {
    const props = useRestyle(restyleFunctions as never, rest);

    const theme = useTheme<Theme>();
    const textColor =
      theme.colors[
        `${getVariant(theme, rest.variant).color}` as keyof typeof theme.colors
      ];

    const transparentColor = `${textColor}9f`;

    return (
      <TextInput ref={ref} {...props} placeholderTextColor={transparentColor} />
    );
  },
);

declare type AppTextInput = TextInput;
export default AppTextInput;
