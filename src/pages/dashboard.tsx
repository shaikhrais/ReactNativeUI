import React, {Fragment, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {GeneralProps} from '../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {NavBar} from '../common/commonComponents';
import {labels} from '../utils/labels';

import {RowView} from '../components/commonViews';
import {
  H7fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularBlack,
} from '../components/commonText';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {screenName} from '../utils/screenName';
import {menu} from '../utils/constant';
import DashBoardSearch from '../components/dashboardSearch';
import {alignItemsCenter, mh10, mh15, ml10, mr10, mt10, mv10, ph15, pl15} from '../common/commonStyles';
import DoctorDetailsCard from '../components/doctorComponents';
import {_testDoctorDetails} from '../utils/mockDetails';

interface SpecialitiesList {
  onPressViewAll: CallableFunction;
}
const SpecialitiesList: React.FC<SpecialitiesList> = ({onPressViewAll}) => {
  return (
    <View style={[mv10]}>
      <RowView style={ph15}>
        <H7fontMediumBlack>{labels.specialities}</H7fontMediumBlack>
        <TouchableOpacity
          onPress={() => {
            onPressViewAll();
          }}>
          <H9fontMediumBlack>{labels.viewAll}</H9fontMediumBlack>
        </TouchableOpacity>
      </RowView>

      <ScrollView horizontal={true} style={[mr10, mt10]} showsHorizontalScrollIndicator={false}>
        {menu.map(({name, Img}) => {
          return (
            <View style={[alignItemsCenter, pl15]}>
              <Img height={67} width={67}/>
              <View style={mv10}>
                <H9fontRegularBlack>{name}</H9fontRegularBlack>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const DashBoardScreen: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const [doctorDetails, setDoctorDetails] = useState(_testDoctorDetails);

  return (
    <View>
      <NavBar title={'Find Doctor'} />
      <DashBoardSearch
        searchNow={() => {
          navigation.navigate(screenName.SearchDoctor);
        }}
      />

      <SpecialitiesList
        onPressViewAll={() => {
          navigation.navigate(screenName.SearchDoctor as any);
        }}
      />
      <View style={[mv10]}>
        <RowView style={ph15}>
          <H7fontMediumBlack>{labels.findDoctors}</H7fontMediumBlack>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenName.SearchDoctor as any)}>
            <H9fontMediumBlack>{labels.viewAll}</H9fontMediumBlack>
          </TouchableOpacity>
        </RowView>

        <ScrollView style={mh10} horizontal={true} showsHorizontalScrollIndicator={false}>
          {doctorDetails.length > 0
            ? doctorDetails.map((item, index) => {
                return (
                  <DoctorDetailsCard
                    page={'home'}
                    details={item}
                    bookAnAppointment={() => {
                      navigation.navigate(screenName.BookAppointment);
                    }}
                    drProfileNavigation={() => {
                      navigation.navigate(screenName.DoctorProfile);
                    }}
                  />
                );
              })
            : null}
        </ScrollView>
      </View>
    </View>
  );
};
export default DashBoardScreen;

const styles = StyleSheet.create({
  specialitiesImageStyle: {
    height: 100,
    width: 100,
  },
});
