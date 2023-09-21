import React, {Fragment} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {GeneralProps} from '../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {labels} from '../utils/labels';
import {screenName} from '../utils/screenName';
import {
  H23fontRegularGray,
  H16fontRegularGray,
  H16fontRegularYellow,
  H14fontRegularWhite,
} from '../components/commonText';
import {colors} from '../utils/colors';
import {flexRow, justyfyCenter, p15} from '../common/commonStyles';
import CheckIcon from '../../assets/images/check-circle-big.svg';
import LeftArrowIcon from '../../assets/images/left-arrow-big.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const BookingSuccess: React.FC<Props> = ({navigation, route}): JSX.Element => {
  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={p15}>
          <LeftArrowIcon height={24} width={24}/>
        </TouchableOpacity>
          <View style={styles.successImageContainer}>
            <CheckIcon height={95} width={95}/>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.borderStyle}>
              <H23fontRegularGray>{labels.booked}</H23fontRegularGray>
              <H23fontRegularGray>{labels.success}</H23fontRegularGray>
              <H16fontRegularGray>{labels.bookedWith}</H16fontRegularGray>
              <View style={flexRow}>
                <H16fontRegularYellow>{'Dr. Darren Elder'}</H16fontRegularYellow>
                <H16fontRegularGray>{' on '}</H16fontRegularGray>
                <H16fontRegularYellow>{'12 Nov 2019 '}</H16fontRegularYellow>
              </View>
              <H16fontRegularYellow style={{}}>
                {'5:00PM to 6:00PM'}
              </H16fontRegularYellow>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenName.InvoiceView)}
            style={styles.buttonStyle}>
            <H14fontRegularWhite>VIEW INVOICE</H14fontRegularWhite>
          </TouchableOpacity>
      </View>
    </Fragment>
  );
};
export default BookingSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  backImageStyle: {
    height: 25,
    width: 25,
  },
  successImageContainer: {
    alignSelf: 'center',
    paddingTop: 80,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  bodyContainer: {
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  borderStyle: {
    height: 220,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: 'white',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    height: 45,
    backgroundColor: '#0DD8F9',
    marginTop: 40,
    marginHorizontal: 30,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
