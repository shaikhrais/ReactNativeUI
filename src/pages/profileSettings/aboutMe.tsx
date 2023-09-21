import React from 'react';
import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import {CardSurface} from '../../components/commonViews';
import {labels} from '../../utils/labels';
import {
  H30fontRegularLightBlack2,
  H14fontRegularWhite,
  H8fontMediumBlack,
  H8fontMediumLightBlack,
} from '../../components/commonText';
import {colors} from '../../utils/colors';
import {pl10, pl15} from '../../common/commonStyles';

interface Props {}
const AboutMe: React.FC<Props> = ({}): JSX.Element => {
  return (
    <CardSurface style={styles.container}>
      <View style={styles.bodyStyle}>
        <H8fontMediumBlack>{labels.aboutMe}</H8fontMediumBlack>
        <H30fontRegularLightBlack2 style={styles.msgStyle}>
          {labels.biography}
        </H30fontRegularLightBlack2>
        <View style={styles.textBoxContainerStyle}>
          <TextInput placeholder="Within 400 characters" style={[pl15,{fontSize: 11}]} />
        </View>
      </View>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>NEXT</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default AboutMe;
const styles = StyleSheet.create({
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  textBoxContainerStyle: {
    height: 350,
    borderColor: colors.borderTextColor,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  msgStyle: {
    marginTop: 30,
  },
  bodyStyle: {paddingHorizontal: 10, paddingTop: 10},
  container: {marginHorizontal: 10},
});
