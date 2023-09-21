import React, {Fragment} from 'react';
import {ScrollView, Image, View, TouchableOpacity} from 'react-native';
import {GeneralProps} from '../../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {NavBarPatient} from '../../common/commonComponents';
import {
  CardSurface,
  CommonLineDotted,
  MainContainer,
  RowView,
} from '../../components/commonViews';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  H14fontRegularBlackk,
  H8fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {colors} from '../../utils/colors';
import {screenName} from '../../utils/screenName';
import {DevWidth} from '../../utils/device';
import Patient from '../../../assets/images/patient.svg';
import Patient7 from '../../../assets/images/patients/patient7.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const MyPatient: React.FC<Props> = ({navigation, route}): JSX.Element => {
  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBarPatient title={'Doctor - My Patients'} />
          <View
            style={{
              height: 85,
              backgroundColor: 'white',
              padding: 10,
              flexDirection: 'row',
            }}>
            <CardSurface
              style={{
                borderRadius: 40,
                height: 60,
                width: 60,
                backgroundColor: 'white',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Patient height={35} width={28}/>
              </View>
            </CardSurface>
            <View style={{paddingLeft: 10, paddingTop: 5}}>
              <H8fontMediumBlack>{'My Patients List'}</H8fontMediumBlack>
              <H9fontRegularGray>{'125 patients'}</H9fontRegularGray>
            </View>
          </View>
          <View style={{paddingHorizontal: 10, paddingTop: 20}}>
            <CardSurface
              style={{
                height: 141,
                backgroundColor: 'white',
                borderRadius: 10,
                paddingHorizontal: 15,
              }}>
              <RowView>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                  <H14fontRegularBlackk>{'Patient ID'}</H14fontRegularBlackk>
                  <H14fontRegularBlackk>{' - PT0025'}</H14fontRegularBlackk>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="map-marker" size={15} color={'black'} />
                  <H9fontMediumBlack style={{paddingLeft: 5}}>
                    {'Alabama, USA'}
                  </H9fontMediumBlack>
                </View>
              </RowView>
              <CommonLineDotted />
              <RowView>
                <View style={{padding: 5, flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(screenName.PatientProfile)
                    }>
                    <View style={{height: 60, width: 60, borderRadius: 60, overflow: 'hidden'}}>
                      <Patient7 height={60} width={60}/>
                    </View>
                  </TouchableOpacity>
                  <View style={{paddingLeft: 10}}>
                    <H8fontMediumBlack>{'Michelle Fairfax'}</H8fontMediumBlack>
                    <RowView style={{width: DevWidth / 1.53}}>
                      <View style={{flexDirection: 'row'}}>
                        <H9fontRegularGray>{'25 Years,'}</H9fontRegularGray>
                        <H9fontRegularGray>{' Female'}</H9fontRegularGray>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <H9fontRegularGray style={{paddingLeft: 7}}>
                          {'Blood Group'}
                        </H9fontRegularGray>
                        <H9fontRegularGray>{' - B+'}</H9fontRegularGray>
                      </View>
                    </RowView>
                    <View style={{flexDirection: 'row', paddingTop: 5}}>
                      <CardSurface
                        style={{
                          borderRadius: 20,
                          height: 20,
                          width: 20,
                          backgroundColor: colors.white,
                          paddingHorizontal: 0,
                          paddingVertical: 0,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                        <Icon name="phone" size={12} color={'black'} />
                      </CardSurface>
                      <H9fontMediumBlack
                        style={{paddingLeft: 6, paddingTop: 5}}>
                        {'+1 504 368 6874'}
                      </H9fontMediumBlack>
                    </View>
                  </View>
                </View>
              </RowView>
            </CardSurface>
          </View>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default MyPatient;
