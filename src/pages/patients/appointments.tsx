import React from 'react';
import {View, TouchableOpacity, FlatList, Text, Image, StyleSheet} from 'react-native';
import {GeneralProps} from '../../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {labels} from '../../utils/labels';
import {
  CardSurface,
  CommonLineDotted,
  RowView,
} from '../../components/commonViews';
import {
  H14fontRegularBlackk,
  H8fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {fontFamily} from '../../utils/fontFamily';
import {flexRow, pt10, pt5} from '../../common/commonStyles';
import CheckMarkIcon from '../../../assets/images/icon-checkmark.svg';
import AwesomeEye from '../../../assets/images/icon-awesome-eye.svg';
import MetroPrintor from '../../../assets/images/icon-metro-printer.svg';
import { patientAppointments } from '../../utils/constant';

import Doctor1 from '../../../assets/images/doctors/doctor-01.svg';
import Doctor2 from '../../../assets/images/doctors/doctor-02.svg';
import Doctor3 from '../../../assets/images/doctors/doctor-03.svg';

interface Props {}

const AppointmentList: React.FC<Props> = ({}): JSX.Element => {
  return (
    <View style={styles.container}>
      <CardSurface style={styles.cardStyle}>
        <RowView style={pt5}>
          <View style={flexRow}>
            <H14fontRegularBlackk>{labels.bookingDate}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{' - 16 Mar 2020'}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{'Dental'}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted />
        <RowView>
          <View style={styles.detailsStyles}>
            <View style={styles.profileImageStyle}>
              <Doctor1 height={60} width={100}/>
            </View>
            <View style={styles.basicDetails}>
              <H8fontMediumBlack>{'Dr. Ruby Perrin'}</H8fontMediumBlack>
              <View style={flexRow}>
                <H9fontRegularGray>
                  {'Appt Date '}
                </H9fontRegularGray>
                <H9fontRegularGray>
                  {'- 22 Mar 2020 , 4:30 PM'}
                </H9fontRegularGray>
              </View>
              <H8fontMediumBlack style={pt5}>{'$150'}</H8fontMediumBlack>
            </View>
          </View>
        </RowView>
        <View style={styles.cardButtonRow}>
          <TouchableOpacity style={styles.confirmButtonStyle}>
            <View style={styles.buttonRow}>
              <CheckMarkIcon height={12} width={12} />
              <Text style={styles.buttonTextStyle}>{labels.confirm}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewButtonStyle}>
            <View style={styles.buttonRow}>
              <AwesomeEye height={10} width={15} />
              <Text style={styles.buttonTextStyle}>{labels.view}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.printButtonStyle}>
            <View style={styles.buttonRow}>
              <MetroPrintor height={13} width={13} />
              <Text style={styles.printButtonTextStyle}>{labels.view}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardSurface>

      <CardSurface style={styles.cardStyle}>
        <RowView style={pt5}>
          <View style={flexRow}>
            <H14fontRegularBlackk>{labels.bookingDate}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{' - 16 Mar 2020'}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{'Dental'}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted />
        <RowView>
          <View style={styles.detailsStyles}>
            <View style={{height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingLeft: 28}}>
              <Doctor2 height={60} width={100}/>
            </View>
            <View style={styles.basicDetails}>
              <H8fontMediumBlack>{'Dr. Darren Elder'}</H8fontMediumBlack>
              <View style={flexRow}>
                <H9fontRegularGray>
                  {'Appt Date '}
                </H9fontRegularGray>
                <H9fontRegularGray>
                  {'- 22 Mar 2020 , 4:30 PM'}
                </H9fontRegularGray>
              </View>
              <H8fontMediumBlack style={pt5}>{'$150'}</H8fontMediumBlack>
            </View>
          </View>
        </RowView>
        <View style={styles.cardButtonRow}>
          <TouchableOpacity style={styles.confirmButtonStyle}>
            <View style={styles.buttonRow}>
              <CheckMarkIcon height={12} width={12} />
              <Text style={styles.buttonTextStyle}>{labels.confirm}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewButtonStyle}>
            <View style={styles.buttonRow}>
              <AwesomeEye height={10} width={15} />
              <Text style={styles.buttonTextStyle}>{labels.view}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.printButtonStyle}>
            <View style={styles.buttonRow}>
              <MetroPrintor height={13} width={13} />
              <Text style={styles.printButtonTextStyle}>{labels.view}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardSurface>

      <CardSurface style={styles.cardStyle}>
        <RowView style={pt5}>
          <View style={flexRow}>
            <H14fontRegularBlackk>{labels.bookingDate}</H14fontRegularBlackk>
            <H14fontRegularBlackk>{' - 16 Mar 2020'}</H14fontRegularBlackk>
          </View>
          <H9fontRegularGray>{'Dental'}</H9fontRegularGray>
        </RowView>
        <CommonLineDotted />
        <RowView>
          <View style={styles.detailsStyles}>
            <View style={styles.profileImageStyle}>
              <Doctor3 height={60} width={100}/>
            </View>
            <View style={styles.basicDetails}>
              <H8fontMediumBlack>{'Dr. Deborah Angel'}</H8fontMediumBlack>
              <View style={flexRow}>
                <H9fontRegularGray>
                  {'Appt Date '}
                </H9fontRegularGray>
                <H9fontRegularGray>
                  {'- 22 Mar 2020 , 4:30 PM'}
                </H9fontRegularGray>
              </View>
              <H8fontMediumBlack style={pt5}>{'$150'}</H8fontMediumBlack>
            </View>
          </View>
        </RowView>
        <View style={styles.cardButtonRow}>
          <TouchableOpacity style={styles.confirmButtonStyle}>
            <View style={styles.buttonRow}>
              <CheckMarkIcon height={12} width={12} />
              <Text style={styles.buttonTextStyle}>{labels.confirm}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewButtonStyle}>
            <View style={styles.buttonRow}>
              <AwesomeEye height={10} width={15} />
              <Text style={styles.buttonTextStyle}>{labels.view}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.printButtonStyle}>
            <View style={styles.buttonRow}>
              <MetroPrintor height={13} width={13} />
              <Text style={styles.printButtonTextStyle}>{labels.view}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardSurface>
    </View>
  );
};
export default AppointmentList;

const styles = StyleSheet.create({
  cardStyle: {
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 15,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  detailsStyles: {padding: 5, paddingTop: 10, flexDirection: 'row'},
  profileImageStyle: {height: 60, width: 60, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', paddingRight: 25},
  basicDetails: {paddingLeft: 10},
  cardButtonRow: {
    flexDirection: 'row',
    // paddingTop: 10,
    justifyContent: 'center',
  },
  confirmButtonStyle: {
    height: 28,
    width: 80,
    backgroundColor: 'rgba(29, 185, 71, 0.65)',
    borderRadius: 30,
    justifyContent: 'center',
  },
  confirmImageStyle: {height: 10, width: 10, marginRight: 3},
  buttonTextStyle: {
    paddingLeft: 5,
    // paddingTop: 5,
    color: 'white',
    fontSize: 11,
    fontFamily: fontFamily.fontRegular,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  viewButtonStyle: {
    height: 28,
    width: 78,
    backgroundColor: 'rgba(29, 185, 170, 0.65)',
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 5
  },
  viewImageStyle: {height: 10, width: 15},
  printButtonStyle: {
    height: 28,
    width: 78,
    backgroundColor: '#D4D4D4',
    borderRadius: 30,
    justifyContent: 'center'
  },
  printImageStyle: {height: 13, width: 13},
  printButtonTextStyle: {
    paddingLeft: 5,
    // paddingTop: 5,
    color: '#8B8A8A',
    fontSize: 11,
    fontFamily: fontFamily.fontRegular,
  },
  container: {paddingHorizontal: 10},
});
