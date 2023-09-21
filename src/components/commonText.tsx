//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextProps} from 'react-native';
import {colors} from '../utils/colors';
import {fontFamily} from '../utils/fontFamily';
import styled from 'styled-components';

// define your styles
const styles = StyleSheet.create({
  black: {
    color: colors.black,
  },
  white: {
    color: colors.white,
  },
  darkblack: {
    color: colors.darkblack,
  },
  secondaryBlack: {
    color: colors.secondaryBlack,
  },
  green: {
    color: colors.green,
  },
  red: {
    color: colors.red,
  },
  dark: {
    color: colors.dark,
  },
  placeholderTextColor: {
    color: colors.placeholderTextColor,
  },
  gray: {
    color: colors.gray,
  },
  lightGray: {
    color: colors.lightGray,
  },
  yellow: {
    color: colors.yellow,
  },
  lightBlue: {
    color: colors.ligtBlue,
  },
  darkRed: {
    color: colors.darkRed,
  },
  textLight: {
    color: colors.textLight,
  },
  lightBlack: {
    color: colors.lightBlack,
  },
  grayText: {
    color: colors.grayText,
  },
  ratingGray: {
    color: colors.ratingGray,
  },
  imageGray: {
    color: colors.imageGray,
  },
  h1: {
    fontSize: 48,
  },
  h2: {
    fontSize: 36,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 21,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 18,
  },
  h7: {
    fontSize: 16,
  },
  h8: {
    fontSize: 14,
  },
  h9: {
    fontSize: 12,
  },

  h10: {
    fontSize: 10,
  },
  h11: {
    fontSize: 8,
  },
  h13: {
    fontSize: 9,
  },
  h12: {
    fontSize: 36,
  },
  h14: {
    fontSize: 13,
  },
  h15: {
    fontSize: 15,
  },
  h16: {
    fontSize: 16,
  },
  h18: {
    fontSize: 18,
  },
  h30: {
    fontSize: 11,
  },
  h23: {
    fontSize: 23,
  },
  h22: {
    fontSize: 22,
  },
  fontBold: {
    fontFamily: fontFamily.fontBold,
  },
  fontRegular: {
    fontFamily: fontFamily.fontRegular,
  },
  fontMedium: {
    fontFamily: fontFamily.fontMedium,
  },
});

const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
  h11,
  h12,
  h13,
  h14,
  h15,
  h23,
  h16,
  h22,
  h30,
  h18
} = styles;
const {
  black,
  dark,
  secondaryBlack,
  green,
  red,
  placeholderTextColor,
  white,
  gray,
  darkRed,
  lightGray,
  yellow,
  lightBlue,
  textLight,
  lightBlack,
  grayText,
  ratingGray,
  imageGray,
} = styles;
const {fontBold, fontRegular, fontMedium} = styles;

export const H6fontRegularBlack = styled(Text)`
  ${h6};
  ${fontRegular};
  ${black};
`;
export const H10fontRegularBlack = styled(Text)`
  ${h10};
  ${fontRegular};
  ${black};
`;
export const H10fontRegularLight = styled(Text)`
  ${h10};
  ${fontRegular};
  ${textLight};
`;
export const H10fontRegularWhite = styled(Text)`
  ${h10};
  ${fontRegular};
  ${white};
`;
export const H10fontRegularGreen = styled(Text)`
  ${h10};
  ${fontRegular};
  ${green};
`;
export const H10fontRegularRed = styled(Text)`
  ${h10};
  ${fontRegular};
  ${darkRed};
`;
export const H8fontRegularBlack = styled(Text)`
  ${h8};
  ${fontRegular};
  ${black};
`;

export const H8fontRegularSecondaryBlack = styled(Text)`
  ${h8};
  ${fontRegular};
  ${secondaryBlack};
`;

export const H8fontRegularWhite = styled(Text)`
  ${h8};
  ${fontRegular};
  ${white};
`;
export const H6fontRegularWhite = styled(Text)`
  ${h6};
  ${fontRegular};
  ${white};
`;

export const H6fontMediumWhite = styled(Text)`
  ${h6};
  ${fontMedium};
  ${white};
`;

export const H22fontMediumBlack = styled(Text)`
  ${h22};
  ${fontMedium};
  ${black};
`;

export const H9fontRegularBlack = styled(Text)`
  ${h9};
  ${fontRegular};
  ${black};
`;
export const H9fontRegularGreen = styled(Text)`
  ${h9};
  ${fontRegular};
  ${green};
`;

export const H13fontRegularGray = styled(Text)`
  ${h13};
  ${fontRegular};
  ${grayText};
`;

export const H14fontRegularBlack = styled(Text)`
  ${h14};
  ${fontRegular};
  ${red};
`;
export const H14fontRegularWhite = styled(Text)`
  ${h14};
  ${fontRegular};
  ${white};
`;
export const H14fontRegularLightBlack = styled(Text)`
  ${h14};
  ${fontRegular};
  ${lightBlack};
`;
export const H14fontRegularGray = styled(Text)`
  ${h14};
  ${fontRegular};
  ${grayText};
`;
export const H14fontRegularBlackk = styled(Text)`
  ${h14};
  ${fontRegular};
  ${black};
`;
export const H14fontRegularImage = styled(Text)`
  ${h14};
  ${fontRegular};
  ${imageGray};
`;
export const H14fontMediumBlack = styled(Text)`
  ${h14};
  ${fontMedium};
  ${black};
`;
export const H14fontRegulargray = styled(Text)`
  ${h14};
  ${fontRegular};
  ${lightGray};
`;

export const H14fontRegularRed = styled(Text)`
  ${h14};
  ${fontRegular};
  ${red};
`;
export const H14fontRegularBlue = styled(Text)`
  ${h14};
  ${fontRegular};
  ${lightBlue};
`;

export const H9fontRegularGray = styled(Text)`
  ${h9};
  ${fontRegular};
  ${lightGray};
`;

export const H23fontRegularGray = styled(Text)`
  ${h23};
  ${fontRegular};
  ${white};
`;

export const H16fontRegularGray = styled(Text)`
  ${h16};
  ${fontRegular};
  ${white};
`;

export const H16fontRegularYellow = styled(Text)`
  ${h16};
  ${fontRegular};
  ${yellow};
`;

export const H7fontMediumBlack = styled(Text)`
  ${h7};
  ${fontMedium};
  ${black};
`;
export const H7fontRegularBlack = styled(Text)`
  ${h7};
  ${fontRegular};
  ${black};
`;
export const H7fontRegularWhite = styled(Text)`
  ${h7};
  ${fontRegular};
  ${white};
`;
export const H7fontMediumWhite = styled(Text)`
  ${h7};
  ${fontMedium};
  ${white};
`;

export const H9fontMediumBlack = styled(Text)`
  ${h9};
  ${fontMedium};
  ${black};
`;

export const H9fontMediumBlue = styled(Text)`
  ${h9};
  ${fontMedium};
  ${lightBlue};
`;

export const H15fontMediumBlack = styled(Text)`
  ${h15};
  ${fontMedium};
  ${black};
`;

export const H8fontMediumBlack = styled(Text)`
  ${h8};
  ${fontMedium};
  ${black};
`;

export const H18fontMediumBlack = styled(Text)`
${h18};
${fontMedium};
${black};
`;

export const H8fontMediumWhite = styled(Text)`
  ${h8};
  ${fontMedium};
  ${white};
`;

export const H8fontMediumLightBlack = styled(Text)`
  ${h8};
  ${fontMedium};
  ${textLight};
`;

export const H9fontMediumLightBlack = styled(Text)`
  ${h9};
  ${fontMedium};
  ${textLight};
`;
export const H30fontRegularLightBlack = styled(Text)`
  ${h8};
  ${fontRegular};
  ${textLight};
`;
export const H30fontRegularLightBlack2 = styled(Text)`
  ${h30};
  ${fontRegular};
  ${textLight};
`;
export const H30fontRegularLightRed = styled(Text)`
  ${h8};
  ${fontRegular};
  ${red};
`;

export const H7fontRegularLight = styled(Text)`
  ${h7};
  ${fontRegular};
  ${textLight};
`;
export const FormErrorMessage = styled(Text)`
  margin-top: 2px;
  ${h9};
  ${fontRegular};
  ${red}
`;

export const TCMessage = styled(Text)`
  ${h14};
  ${fontMedium};
  ${lightBlue}
`;
