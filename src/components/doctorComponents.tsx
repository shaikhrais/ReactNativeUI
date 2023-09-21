import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../utils/colors';
import {DevWidth} from '../utils/device';
import {
  H14fontRegularBlack,
  H14fontRegularBlackk,
  H14fontRegularBlue,
  H15fontMediumBlack,
  H8fontRegularWhite,
  H9fontMediumBlack,
} from './commonText';
import {CardSurface, CommonLineDotted, RowView} from './commonViews';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';
import {DoctorDetailsProps} from '../interfaces/generalProps';
import {
  alignItemsCenter,
  flex1,
  flexRow,
  justifyStart,
  justyfyCenter,
  mh10,
  ml10,
  pl10,
  pl5,
  pt5,
  pv10,
  pv5,
  pl2,
  ml5,
  mv10,
  mr10,
  pt10
} from '../common/commonStyles';
import {labels} from '../utils/labels';
import Doctor1 from '../../assets/images/doctors/doctor-01.svg';
import DentistIcon from '../../assets/images/specialities/specialities-05.svg'
interface DoctorDetailsCardProps {
  drProfileNavigation: CallableFunction;
  bookAnAppointment: CallableFunction;
  details: DoctorDetailsProps;
  page: string;
}

const DoctorDetailsCard: React.FC<DoctorDetailsCardProps> = ({
  drProfileNavigation,
  bookAnAppointment,
  details,
  page
}) => {
  return (
    <View style={[mr10, pv5]}>
      <CardSurface style={styles.container}>
        <RowView>
          <View style={styles.drDetailsContainerStyle}>
            <TouchableOpacity
              onPress={() => {
                drProfileNavigation();
              }}>
              <View style={{paddingRight: 30, borderRadius: 8, overflow: 'hidden', height: 80, width: 80, alignItems: 'center'}}>
                <Doctor1 height={80} width={130}/>
              </View>
            </TouchableOpacity>
            <View style={ml10}>
              <H15fontMediumBlack>{details.doctor_name}</H15fontMediumBlack>
              <H14fontRegularBlackk>
                {details.qualification}
                {' - '}
                {details.specialization}
              </H14fontRegularBlackk>
              <RowView style={{alignItems: 'center'}}>
                <CardSurface style={styles.smallImageStyle}>
                  <DentistIcon height={14} width={14} />
                </CardSurface>
                <RowView style={[flex1, ml5]}>
                  <H14fontRegularBlue style={{}}>
                    {details.type}
                  </H14fontRegularBlue>
                  <H14fontRegularBlack style={{}}>
                    {details.experience}
                    {' Exp'}
                  </H14fontRegularBlack>
                </RowView>
              </RowView>
              <RowView style={{width: page == 'home'? DevWidth / 1.95 : DevWidth / 1.62}}>
                <View style={[flexRow, pt5, alignItemsCenter]}>
                  <Icon2 name="star" size={11} color={colors.yellow} />
                  <Icon2
                    name="star"
                    size={11}
                    color={colors.yellow}
                    style={pl2}
                  />
                  <Icon2
                    name="star"
                    size={11}
                    color={colors.yellow}
                    style={pl2}
                  />
                  <Icon2
                    name="star"
                    size={11}
                    color={colors.yellow}
                    style={pl2}
                  />
                  <Icon2 name="star" size={11} color={'#dedfe0'} style={pl2} />
                  <H9fontMediumBlack>
                    {'('}
                    {details.count}
                    {')'}
                  </H9fontMediumBlack>
                </View>
                <View style={[flexRow, alignItemsCenter]}>
                  <Icon2 name="map-marker" size={15} color={'black'} />
                  <H9fontMediumBlack style={pl5}>
                    {details.location}
                  </H9fontMediumBlack>
                </View>
              </RowView>
            </View>
          </View>
        </RowView>
        <CommonLineDotted />
        <RowView style={[pt5]}>
          <View style={[flexRow, alignItemsCenter]}>
            <CardSurface style={styles.surfaceStyle}>
              <Icon3 name="like2" size={12} color={'black'} />
            </CardSurface>
            <H9fontMediumBlack style={pl5}>{details.likes}</H9fontMediumBlack>
          </View>
          <View style={[flexRow, alignItemsCenter]}>
            <CardSurface style={styles.surfaceStyle}>
              <Icon2 name="money" size={12} color={'black'} />
            </CardSurface>
            <H9fontMediumBlack style={{}}>
              {' $'}
              {details.minFee} {' - $'}
              {details.maxFee}
            </H9fontMediumBlack>
          </View>
        </RowView>
        <TouchableOpacity
          onPress={() => {
            bookAnAppointment();
          }}
          //   {/* navigation.navigate(screenName.BookAppointment)} */}
          style={styles.buttonStyle}>
          <H8fontRegularWhite>{labels.bookAppoinitment}</H8fontRegularWhite>
        </TouchableOpacity>
      </CardSurface>
    </View>
  );
};

export default DoctorDetailsCard;

const styles = StyleSheet.create({
  container: {
    height: 226,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  drDetailsContainerStyle: {padding: 5, flexDirection: 'row'},
  drImageStyle: {height: 100, width: 100, borderRadius: 8},
  smallImageStyle: {
    borderRadius: 25,
    height: 24,
    width: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallImage: {
    height: 17,
    width: 17,
  },
  surfaceStyle: {
    borderRadius: 25,
    height: 25,
    width: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  buttonStyle: {
    marginTop: 15,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#20c0f3',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
