import React, {Fragment} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GeneralProps} from '../../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {NavBar} from '../../common/commonComponents';
import {colors} from '../../utils/colors';
import {
  CardSurface,
  MainContainer,
  RowView,
} from '../../components/commonViews';
import {
  H9fontMediumBlack,
  H14fontRegularBlackk,
  H14fontRegularBlack,
  H14fontRegularBlue,
  H22fontMediumBlack,
  H10fontRegularWhite,
  H8fontRegularWhite,
} from '../../components/commonText';
import CircularProgress from '../../components/circularProgress';
import {
  H14fontRegulargray,
  H14fontRegularRed,
  H8fontMediumBlack,
} from '../../components/commonText';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircularProgressHigh from '../../components/circularProgressHigh';
import {labels} from '../../utils/labels';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {DevWidth} from '../../utils/device';
import {
  alignItemsCenter,
  flexRow,
  pl10,
  spaceBetween,
} from '../../common/commonStyles';
import Speciality5 from '../../../assets/images/specialities/specialities-05.svg';
import Doctor2 from '../../../assets/images/doctors/doctor-02.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const DoctorDashBoard: React.FC<Props> = ({navigation}): JSX.Element => {
  return (
    <Fragment>
      <MainContainer>
        <NavBar title={'Doctor Dashboard'} />
        <View style={styles.container}>
          <CardSurface style={styles.drDetailsContainer}>
            <View style={styles.rowStyle}>
              <View style={styles.profileImageStyle}>
                <Doctor2 height={'100%'} width={'150%'} />
              </View>
              <View style={{width: DevWidth/1.5, paddingLeft: 10}}>
                <RowView>
                  <H8fontMediumBlack>{'Dr. Darren Elder'}</H8fontMediumBlack>
                  <CardSurface style={styles.iconSurface}>
                    <Icon1
                      name="more-vert"
                      size={15}
                      color={colors.lightGray}
                    />
                  </CardSurface>
                </RowView>
                <H14fontRegulargray>
                  {'BDS, MDS - Oral & Maxillofacial Surgery'}
                </H14fontRegulargray>
                <View style={[flexRow, alignItemsCenter]}>
                  <CardSurface style={styles.specialitiesSurface}>
                    <Speciality5 height={15} width={15} />
                  </CardSurface>
                  <H14fontRegularBlue>{'Dentist'}</H14fontRegularBlue>
                </View>
                <View style={[flexRow, alignItemsCenter, spaceBetween]}>
                  <H14fontRegularRed>{'15+ Exp'}</H14fontRegularRed>
                  <View style={styles.locationStyle}>
                    <Icon name="map-marker" size={15} color={'black'} />
                    <H9fontMediumBlack>{' Florida, USA'}</H9fontMediumBlack>
                  </View>
                </View>
              </View>
            </View>
          </CardSurface>
        </View>
        <View style={styles.appointmentDetails}>
          <CardSurface style={styles.cardStyle}>
            <CircularProgressHigh percent={80} />
            <H14fontRegularBlackk>{labels.totalPatient}</H14fontRegularBlackk>
            <H22fontMediumBlack>{'1300+'}</H22fontMediumBlack>
            <View style={styles.dateStyle}>
              <H10fontRegularWhite style={{}}>
                {'March 16, 2020'}
              </H10fontRegularWhite>
            </View>
          </CardSurface>
          <View style={{paddingHorizontal: 20}}>
            <CardSurface style={styles.cardStyle}>
              <CircularProgress percent={30} />
              <H14fontRegularBlackk>{labels.totalPatient}</H14fontRegularBlackk>
              <H22fontMediumBlack>{'160'}</H22fontMediumBlack>
              <View style={styles.dateStyle}>
                <H10fontRegularWhite style={{}}>
                  {'March 16, 2020'}
                </H10fontRegularWhite>
              </View>
            </CardSurface>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingTop: 15,
          }}>
          <TouchableOpacity style={styles.buttonStyle}>
            <H8fontRegularWhite>Today</H8fontRegularWhite>
            <H8fontRegularWhite>Appointments</H8fontRegularWhite>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <H8fontRegularWhite>Upcoming</H8fontRegularWhite>
            <H8fontRegularWhite>Appointments</H8fontRegularWhite>
          </TouchableOpacity>
        </View>
      </MainContainer>
    </Fragment>
  );
};
export default DoctorDashBoard;

const styles = StyleSheet.create({
  container: {marginTop: -90, paddingHorizontal: 10},
  drDetailsContainer: {height: 145, backgroundColor: 'white', borderRadius: 20},
  rowStyle: {paddingTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  profileImageStyle: {    
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    overflow: 'hidden'},
  iconSurface: {
    borderRadius: 33,
    height: 25,
    width: 25,
    // backgroundColor: colors.white,
    // right: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  specialitiesSurface: {
    borderRadius: 25,
    height: 24,
    width: 24,
    backgroundColor: colors.white,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  specialitieImageStye: {height: 17, width: 17, alignSelf: 'center'},
  locationStyle: {flexDirection: 'row', alignItems: 'center'},
  appointmentDetails: {
    paddingHorizontal: 10,
    paddingTop: 15,
    flexDirection: 'row',
  },
  surfaceContainer: {
    height: 250,
    width: DevWidth / 2.3,
    backgroundColor: colors.background,
    borderRadius: 10,
  },
  cardStyle: {
    height: 250,
    width: DevWidth / 2.3,
    backgroundColor: colors.background,
    borderRadius: 10,
    alignItems: 'center',
  },
  dateStyle: {
    height: 25,
    width: 110,
    borderRadius: 20,
    backgroundColor: '#1B5A90',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 74,
    width: DevWidth / 2.25,
    backgroundColor: '#0DD8F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
