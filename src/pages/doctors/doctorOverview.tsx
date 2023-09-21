import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {labels} from '../../utils/labels';
import {CardSurface, DashedLine, RowView} from '../../components/commonViews';
import {
  H14fontRegularBlackk,
  H14fontRegularBlue,
  H14fontRegulargray,
  H14fontRegularRed,
  H15fontMediumBlack,
  H8fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularGray,
  H18fontMediumBlack
} from '../../components/commonText';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {DevWidth} from '../../utils/device';
import {
  alignItemsCenter,
  flexRow,
  ml5,
  mr10,
  mr25,
  mr30,
  p5,
  pb10,
  pb5,
  ph10,
  pl10,
  pl18,
  pl30,
  pl5,
  pt0,
  pt10,
  pt5,
  pv10,
  pv20,
  pv5,
} from '../../common/commonStyles';
import Iicon from '../../../assets/images/i-icon.svg';
import Doctor2 from '../../../assets/images/doctors/doctor-02.svg';
import Specialities5 from '../../../assets/images/specialities/specialities-05.svg';
import UserIcon from '../../../assets/images/icon-awesome-user.svg';
import BookIcon from '../../../assets/images/icon-book.svg';
import MapDoctor from '../../../assets/images/map-doctor.svg';
import NurseIcon from '../../../assets/images/icon-user-nurse.svg';
import MedicalIcon from '../../../assets/images/icon-clinic-medical.svg';
 

interface Props {}

const Dash = () => {
  return (
    <View style={{paddingLeft: 23}}>
      <DashedLine />
    </View>
  );
};

const DoctorDetails = () => {
  return (
    <View style={flexRow}>
      <View>
        <CardSurface style={styles.cardSurfaceStyle}>
          <Iicon fill="#000" height={20} width={7}/>
        </CardSurface>
        <Dash />
      </View>
      <View style={ph10}>
        <CardSurface style={styles.detailCardSurfaceStyle}>
          <RowView>
            <View style={[p5, flexRow]}>
              <View style={styles.profileImageStyle}>
                <Doctor2 height={'100%'} width={'150%'} />
              </View>
              <View style={[pl10, pv5]}>
                <H18fontMediumBlack style={{lineHeight: 25}}>{'Dr. Darren'}</H18fontMediumBlack>
                <H18fontMediumBlack style={{lineHeight: 20}}>{'Elder'}</H18fontMediumBlack>
                <View style={[flexRow, alignItemsCenter]}>
                  <CardSurface style={styles.dentalIconStyle}>
                    <Specialities5 height={14} width={14} />
                  </CardSurface>
                  <H14fontRegularBlue>{'Dentist'}</H14fontRegularBlue>
                </View>
              </View>
            </View>
          </RowView>
          <H14fontRegulargray style={[pl10, pt5]}>
            {'BDS, MDS - Oral & Maxillofacial Surgery'}
          </H14fontRegulargray>
          <RowView>
            <H14fontRegularRed style={[pl10, pt5]}>
              {'15+ Exp'}
            </H14fontRegularRed>
            <View style={[flexRow, pt5, pb10]}>
              <Icon name="map-marker" size={15} color={'black'} />
              <H9fontMediumBlack style={[mr10, ml5]}>
                {'Florida, USA'}
              </H9fontMediumBlack>
            </View>
          </RowView>
        </CardSurface>
      </View>
    </View>
  );
};

const AboutUs = () => {
  return (
    <View style={flexRow}>
      <View>
        <CardSurface style={styles.cardSurfaceStyle}>
          <UserIcon fill="#000" height={18} width={15} />
        </CardSurface>
        <Dash />
      </View>
      <View style={ph10}>
        <CardSurface style={styles.detailCardSurfaceStyle}>
          <H15fontMediumBlack style={[pt10, pl10]}>{labels.aboutUs}</H15fontMediumBlack>
          <H9fontRegularGray style={[pl10, pv10, mr30,{lineHeight: 20}]}>
            {
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            }
          </H9fontRegularGray>
        </CardSurface>
      </View>
    </View>
  );
};

const EducationDetails = () => {
  return (
    <View style={flexRow}>
      <View>
        <CardSurface style={styles.cardSurfaceStyle}>
          <BookIcon fill="#000" height={18} width={18} />
        </CardSurface>
        <Dash />
      </View>
      <View style={ph10}>
        <CardSurface style={styles.detailCardSurfaceStyle}>
          <H15fontMediumBlack style={p5}>{labels.education}</H15fontMediumBlack>
          <View style={[flexRow, pl5]}>
            <Icon1 name="check" size={20} color={'black'} />
            <H14fontRegularBlackk style={[pl5, mr30]}>
              {'American Dental Medical University'}
            </H14fontRegularBlackk>
          </View>
          <H9fontRegularGray style={[pt10, pl30]}>{'BDS'}</H9fontRegularGray>
          <H9fontRegularGray style={[pl30, pb10]}>{'1998 - 2003'}</H9fontRegularGray>
        </CardSurface>
      </View>
    </View>
  );
};

const WorkExperience = () => {
  return (
    <View style={flexRow}>
      <View>
        <CardSurface style={styles.cardSurfaceStyle}>
          <MapDoctor fill={"#000"} height={18} width={18} />
        </CardSurface>
        <Dash />
      </View>
      <View style={pl10}>
        <CardSurface style={styles.detailCardSurfaceStyle}>
          <H15fontMediumBlack style={[p5, pt10]}>
            {labels.experience}
          </H15fontMediumBlack>
          <View style={[flexRow, pl5]}>
            <Icon1 name="check" size={20} color={'black'} />
            <H14fontRegularBlackk style={[pl5, mr30]}>
              {'Glowing Smiles Family Dental Clinic'}
            </H14fontRegularBlackk>
          </View>
          <H9fontRegularGray style={[pt5, pl30]}>
            {'2010 - Present (5 years)'}
          </H9fontRegularGray>
          <View style={[flexRow, pl5, pt5]}>
            <Icon1 name="check" size={20} color={'black'} />
            <H14fontRegularBlackk style={pl5}>
              {'Comfort Care Dental Clinic'}
            </H14fontRegularBlackk>
          </View>
          <H9fontRegularGray style={[pt5, pl30, pb10]}>
            {'2007 - 2010 (3 years)'}
          </H9fontRegularGray>
        </CardSurface>
      </View>
    </View>
  );
};

const Services = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <CardSurface style={styles.cardSurfaceStyle}>
          <NurseIcon fill={"#000"} height={18} width={18}/>
        </CardSurface>
        <Dash />
      </View>
      <View style={ph10}>
        <CardSurface style={styles.detailCardSurfaceStyle}>
          <H15fontMediumBlack style={p5}>{labels.services}</H15fontMediumBlack>
          <View style={[flexRow, pl5, pt5]}>
            <Icon1 name="check" size={20} color={colors.lightGray} />
            <H14fontRegulargray style={[pl5, pb5]}>
              {'Tooth cleaning'}
            </H14fontRegulargray>
          </View>
          <View style={[pl5, flexRow]}>
            <Icon1 name="check" size={20} color={colors.lightGray} />
            <H14fontRegulargray style={[pl5, pb5]}>
              {'Root Canal Therapy'}
            </H14fontRegulargray>
          </View>
          <View style={[pl5, flexRow]}>
            <Icon1 name="check" size={20} color={colors.lightGray} />
            <H14fontRegulargray style={[pl5, pb10]}>{'Implants'}</H14fontRegulargray>
          </View>
        </CardSurface>
      </View>
    </View>
  );
};

const Specializations = () => {
  return (
    <View style={flexRow}>
      <CardSurface style={styles.cardSurfaceStyle}>
        <MedicalIcon fill={"#000"} height={18} width={18}/>
      </CardSurface>
      <View style={ph10}>
        <CardSurface style={styles.detailCardSurfaceStyle}>
          <H15fontMediumBlack style={p5}>
            {labels.specializations}
          </H15fontMediumBlack>
          <View style={[pl5, pt5, flexRow]}>
            <Icon1 name="check" size={20} color={colors.lightGray} />
            <H14fontRegulargray style={[pl5, pb5]}>{'Dental Care'}</H14fontRegulargray>
          </View>
          <View style={[pl5, flexRow]}>
            <Icon1 name="check" size={20} color={colors.lightGray} />
            <H14fontRegulargray style={[pl5, pb5]}>
              {'Oral and Maxillofacial Surgery'}
            </H14fontRegulargray>
          </View>
          <View style={[pl5, flexRow]}>
            <Icon1 name="check" size={20} color={colors.lightGray} />
            <H14fontRegulargray style={[pl5, pb10]}>
              {'Prosthodontics'}
            </H14fontRegulargray>
          </View>
        </CardSurface>
      </View>
    </View>
  );
};

const DoctorOverView: React.FC<Props> = ({}): JSX.Element => {
  return (
    <View style={pl18}>
      <DoctorDetails />
      <AboutUs />
      <EducationDetails />
      <WorkExperience />
      <Services />
      <Specializations />
    </View>
  );
};
export default DoctorOverView;

const styles = StyleSheet.create({
  cardSurfaceStyle: {
    borderRadius: 25,
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    paddingTop: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },

  infoIconDetaisl: {
    height: 20,
    width: 7,
  },

  detailCardSurfaceStyle: {
    //   height: 170,
    width: DevWidth / 1.35,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
  },
  doctorImageStyle: {height: 65, width: 65, borderRadius: 65, overflow: 'hidden'},
  dentalIconStyle: {
    borderRadius: 25,
    height: 24,
    width: 24,
    backgroundColor: colors.white,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  dentalImageStyle: {
    height: 17,
    width: 17,
    alignSelf: 'center',
  },
  aboutUsIconstyle: {
    height: 18,
    width: 15,
  },
  profileImageStyle: {    
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    overflow: 'hidden'
  },
  imageCommonSize: {
    height: 18,
    width: 18,
  },
});
