import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {RowView} from '../components/commonViews';
import {
  H15fontMediumBlack,
  H9fontRegularGray,
  H8fontMediumLightBlack,
  H8fontMediumBlack,
  H9fontMediumLightBlack,
} from '../components/commonText';
import {
  alignItemsCenter,
  flexRow,
  justyfyCenter,
  pb10,
  pb5,
  pl5,
  pv10,
  spaceBetween,
} from '../common/commonStyles';
import {colors} from '../utils/colors';
import StarIcon from '../../assets/images/star.svg';
import Doctor2 from '../../assets/images/doctors/doctor-02.svg'
import Specialities5 from '../../assets/images/specialities/specialities-05.svg';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onpress: CallableFunction;
}

const Checkout: React.FC<Props> = ({onpress}): JSX.Element => {
  const startImage = () => {
    return (
      <StarIcon height={12} width={12} />
    );
  };

  const otherDetailsRow = (label: string, value: string) => {
    return (
      <RowView style={pb5}>
        <H8fontMediumLightBlack>{label}</H8fontMediumLightBlack>
        <H9fontRegularGray>{value}</H9fontRegularGray>
      </RowView>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onpress} style={styles.drSelection}>
        <View style={styles.drImageStyle}>
          <Doctor2 height={'100%'} width={'150%'}/>
        </View>
        <View style={styles.drDetailsStyle}>
          <View style={[pl5, spaceBetween]}>
            <H15fontMediumBlack>Dr. Darren Elder</H15fontMediumBlack>
            <View style={[flexRow, alignItemsCenter]}>
              {startImage()}
              {startImage()}
              {startImage()}
              {startImage()}
              {startImage()}
              <H9fontMediumLightBlack>{'(47)'}</H9fontMediumLightBlack>
            </View>
            <View style={[flexRow, alignItemsCenter]}>
              <H8fontMediumLightBlack>{'('}</H8fontMediumLightBlack>
              <Icon name="map-marker" size={14} color={'black'} />
              <H8fontMediumLightBlack>{' Florida, USA)'}</H8fontMediumLightBlack>
            </View>
          </View>
          <View style={styles.typeofDrImageContainer}>
            <Specialities5 height={12} width={12} />
          </View>
        </View>
      </TouchableOpacity>

      <H8fontMediumBlack style={pv10}>Booking Summary</H8fontMediumBlack>
      <View style={styles.cardContainerStyles}>
        {otherDetailsRow('Date', '16 Nov 2019')}
        {otherDetailsRow('Time', '10:00 AM')}
        {otherDetailsRow('Consulting', 'Fee$100')}
        {otherDetailsRow('Slot Timing Fees', '$10')}
      </View>

      <View style={styles.cardContainerStyles}>
        {otherDetailsRow('Date', '16 Nov 2019')}
        {otherDetailsRow('Time', '10:00 AM')}
        {otherDetailsRow('Consulting', 'Fee$100')}
        {otherDetailsRow('Slot Timing Fees', '$10')}
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  drSelection: {
    height: 104,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
  },
  drImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    overflow: 'hidden'
  },
  drDetailsStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starImageStyle: {height: 12, width: 12},
  typeofDrImageContainer: {
    height: 24,
    width: 24,
    borderRadius: 14,
    elevation: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeofDrImageStyle: {
    height: 12,
    width: 12,
  },
  cardContainerStyles: {
    backgroundColor: colors.white,
    //   height: 145,
    borderRadius: 10,
    elevation: 3,
    padding: 12,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
