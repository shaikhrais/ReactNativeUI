import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {labels} from '../../utils/labels';
import {CardSurface, DashedLine, RowView} from '../../components/commonViews';
import {
  H14fontRegularBlackk,
  H15fontMediumBlack,
  H8fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import {DevWidth} from '../../utils/device';
import {flexRow, p5, pl10, pl15, pl5, pt5} from '../../common/commonStyles';
import Iicon from '../../../assets/images/i-icon.svg';
import Patient4 from '../../../assets/images/patients/patient4.svg';
import UserIcon from '../../../assets/images/icon-awesome-user.svg';
import MapDoctor from '../../../assets/images/map-doctor.svg';

interface Props {}

const Dash = () => {
  return (
    <View style={{paddingLeft: 23}}>
      <DashedLine />
    </View>
  );
};

const PatientOverView: React.FC<Props> = ({}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={flexRow}>
        <View>
          <CardSurface style={styles.iconSurface}>
            <Iicon fill={"#000"} height={20} width={7}/>
          </CardSurface>
          <Dash />
        </View>
        <View style={pl15}>
          <CardSurface style={styles.infoDetailsStyle}>
            <RowView>
              <View style={styles.patientDetails}>
              <View style={styles.profileImage}>
                <Patient4 height={'100%'} width={'150%'} />
              </View>

                <View style={pl10}>
                  <H8fontMediumBlack>{'Michelle Fairfax'}</H8fontMediumBlack>
                  <View style={flexRow}>
                    <H9fontRegularGray style={pt5}>
                      {'Patient ID'}
                    </H9fontRegularGray>
                    <H9fontRegularGray style={pt5}>
                      {' - PT0025'}
                    </H9fontRegularGray>
                  </View>
                  <View style={flexRow}>
                    <H9fontRegularGray style={{}}>
                      {'Blood Group'}
                    </H9fontRegularGray>
                    <H9fontRegularGray style={{}}>{' - O+'}</H9fontRegularGray>
                  </View>
                </View>
              </View>
            </RowView>
            <RowView>
              <View style={styles.otherDetails}>
                <Icon2 name="phone" size={20} color={'black'} />
                <H9fontMediumBlack style={styles.otherDetailsText}>
                  {'+1 504 368 6874'}
                </H9fontMediumBlack>
              </View>
              <View style={styles.otherDetails}>
                <Icon name="map-marker" size={20} color={'black'} />
                <H9fontMediumBlack style={styles.otherDetailsText}>
                  {'Florida, USA'}
                </H9fontMediumBlack>
              </View>
            </RowView>
          </CardSurface>
        </View>
      </View>
      <View style={flexRow}>
        <View>
          <CardSurface style={styles.iconSurface}>
            <UserIcon fill={"#000"} height={18} width={15}/>
          </CardSurface>
          <Dash />
        </View>
        <View style={pl15}>
          <CardSurface style={styles.infoDetailsStyle}>
            <H15fontMediumBlack style={p5}>{labels.aboutMe}</H15fontMediumBlack>
            <H9fontRegularGray style={pl5}>
              {
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              }
            </H9fontRegularGray>
          </CardSurface>
        </View>
      </View>

      <View style={flexRow}>
        <CardSurface style={styles.iconSurface}>
          <MapDoctor fill={"#000"} height={18} width={15}/>
        </CardSurface>
        <View style={pl15}>
          <CardSurface style={styles.bookingDetails}>
            <H15fontMediumBlack style={p5}>
              {labels.lastBooking}
            </H15fontMediumBlack>
            <View style={styles.drNameStyle}>
              <Icon1 name="check" size={20} color={'black'} />
              <H14fontRegularBlackk style={pt5}>
                {'Dr. Darren Elder'}
              </H14fontRegularBlackk>
            </View>
            <H9fontRegularGray style={styles.bookigDetila}>
              {'Dentist'}
            </H9fontRegularGray>
            <H9fontRegularGray style={styles.bookigDetila}>
              {'14 Nov 2019 5.00 PM'}
            </H9fontRegularGray>
            <View style={styles.rowStyele}>
              <Icon1 name="check" size={20} color={'black'} />
              <H14fontRegularBlackk style={pt5}>
                {'Dr. Darren Elder'}
              </H14fontRegularBlackk>
            </View>
            <H9fontRegularGray style={styles.bookigDetila}>
              {'Dentist'}
            </H9fontRegularGray>
            <H9fontRegularGray style={styles.bookigDetila}>
              {'15 Nov 2019 4.00 PM'}
            </H9fontRegularGray>
          </CardSurface>
        </View>
      </View>
    </View>
  );
};
export default PatientOverView;
const styles = StyleSheet.create({
  container: {paddingHorizontal: 18},
  iconSurface: {
    borderRadius: 25,
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    paddingTop: 9,
    // paddingLeft: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoIconStyle: {height: 20, width: 7},
  infoDetailsStyle: {
    height: 140,
    width: DevWidth / 1.35,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  patientDetails: {padding: 5, flexDirection: 'row'},
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    paddingRight: 20,
    overflow: 'hidden'
  },
  otherDetails: {flexDirection: 'row', paddingTop: 6},
  otherDetailsText: {paddingLeft: 4, paddingRight: 10},
  userIconStyle: {height: 18, width: 15},
  drIconStyle: {height: 18, width: 18},
  bookingDetails: {
    height: 200,
    width: DevWidth / 1.35,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  drNameStyle: {flexDirection: 'row', paddingLeft: 5},
  bookigDetila: {paddingLeft: 32},
  rowStyele: {flexDirection: 'row', paddingLeft: 5, paddingTop: 5},
});
