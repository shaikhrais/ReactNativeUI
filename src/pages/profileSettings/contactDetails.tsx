import React from 'react';
import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import {CardSurface, CommonInput} from '../../components/commonViews';
import {labels} from '../../utils/labels';
import {
  H14fontRegularWhite,
  H30fontRegularLightBlack2,
  H8fontMediumBlack,
} from '../../components/commonText';
import {mt15, mt20, pl10} from '../../common/commonStyles';
interface Props {}
const ContactDetails: React.FC<Props> = ({}): JSX.Element => {
  const textBoxView = (label: string) => {
    return (
      <>
        <H30fontRegularLightBlack2 style={mt15}>
          {label}
        </H30fontRegularLightBlack2>
        <CommonInput style={{height: 35}}>
          <TextInput style={pl10} />
        </CommonInput>
      </>
    );
  };

  return (
    <CardSurface style={styles.container}>
      <View style={styles.bodyStyle}>
        <H8fontMediumBlack>{labels.contactDetails}</H8fontMediumBlack>
        {textBoxView('Address Line 1')}
        {textBoxView('Address Line 2')}
        {textBoxView('City')}
        {textBoxView('State / Province')}
        {textBoxView('Country')}
        {textBoxView('Postal Code')}
      </View>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>NEXT</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default ContactDetails;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, marginHorizontal: 10},
  bodyStyle: {paddingHorizontal: 5, paddingTop: 10},
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginVertical: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 25
  },
});
