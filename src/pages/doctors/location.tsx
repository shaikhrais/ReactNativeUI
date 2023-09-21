import React from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {
  CardSurface,
  CommonLineDotted,
  RowView,
} from '../../components/commonViews';
import {
  H10fontRegularBlack,
  H14fontRegularBlackk,
  H15fontMediumBlack,
  H9fontMediumBlack,
  H9fontMediumBlue,
  H9fontRegularBlack,
} from '../../components/commonText';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {menuOptions} from '../../utils/constant';
import {pl0, pl10, pl5, pt10} from '../../common/commonStyles';

interface Props {}

const Start = () => {
  return (
    <Icon2
      name="star"
      size={11}
      color={colors.yellow}
      style={{paddingTop: 2}}
    />
  );
};

const LocationView: React.FC<Props> = ({}): JSX.Element => {
  return (
    <View style={styles.container}>
      <CardSurface style={styles.surfaceContainer}>
        <H15fontMediumBlack style={pl10}>
          {'Smile Cute Dental Care Center'}
        </H15fontMediumBlack>
        <H14fontRegularBlackk style={pl10}>
          {'MDS - Periodontology, BDS'}
        </H14fontRegularBlackk>
        <View style={styles.rattingContainer}>
          <Start />
          <Start />
          <Start />
          <Start />
          <Start />
          <H10fontRegularBlack style={pl5}>{'(16592)'}</H10fontRegularBlack>
        </View>
        <RowView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {menuOptions.map(({Img}) => {
              return (
                <View style={styles.imageContainer}>
                  <Img height={40} width={40} />
                </View>
              );
            })}
          </ScrollView>
          <CardSurface style={styles.priceSurface}>
            <H14fontRegularBlackk>{'$250'}</H14fontRegularBlackk>
          </CardSurface>
        </RowView>
        <View style={styles.addressContainer}>
          <Icon name="map-marker" size={15} color={'black'} />
          <H9fontMediumBlack style={pl5}>
            {'2286 Sundown Lane, Austin, Texas 78749, USA '}
          </H9fontMediumBlack>
        </View>
        <H9fontMediumBlue style={pl10}>{'Get Directions'}</H9fontMediumBlue>
        <CommonLineDotted />
        <H14fontRegularBlackk style={pt10}>
          {' Mon - Sat '}
        </H14fontRegularBlackk>
        <View style={styles.timingButtonStyleContainer}>
          <View style={styles.timingButtonStyle}>
            <H9fontRegularBlack>{'10:00 AM - 2:00 PM'}</H9fontRegularBlack>
          </View>
          <View style={{paddingLeft: 10}}>
            <View style={styles.timingButtonStyle}>
              <H9fontRegularBlack>{'4:00 PM - 9:00 PM'}</H9fontRegularBlack>
            </View>
          </View>
        </View>
      </CardSurface>
    </View>
  );
};
export default LocationView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  surfaceContainer: {
    height: 320,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  rattingContainer: {flexDirection: 'row', paddingTop: 5, paddingLeft: 10},
  imageContainer: {marginTop: 10, marginLeft: 7, height: 40, width: 40, borderRadius: 5, overflow: 'hidden'},
  imageStyle: {height: 40, width: 40, borderRadius: 5},
  priceSurface: {
    borderRadius: 30,
    height: 55,
    width: 55,
    backgroundColor: colors.white,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressContainer: {flexDirection: 'row', paddingTop: 5, paddingLeft: 8},
  timingButtonStyle: {
    height: 30,
    width: 135,
    borderWidth: 1,
    borderRadius: 40,
    borderStyle: 'dashed',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timingButtonStyleContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
