import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils/colors';
import {CardSurface} from './commonViews';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {DevWidth} from '../utils/device';
import {H8fontRegularWhite} from './commonText';
import {labels} from '../utils/labels';
import { flexRow, ph10, ph15, pl10, pl15 } from '../common/commonStyles';

interface DashBoardSearchProps {
  searchNow: CallableFunction;
}

const DashBoardSearch = (props: DashBoardSearchProps) => {
  return (
    <View style={styles.container}>
      <CardSurface style={styles.containerStyle}>
        <View style={flexRow}>
          <CardSurface style={styles.logoContainer}>
            <Icon name="map-marker-alt" size={15} color={colors.lightGray} />
          </CardSurface>
          <View style={ph10}>
            <TextInput
              style={styles.textBoxStyle}
              placeholder={'Search Location (Ex : Chennai, etc)'}
              placeholderTextColor={'#adb5bd'}
            />
          </View>
        </View>
        <View style={pl10}>
          <Icon1 name="more-vert" size={15} color={colors.lightGray} />
        </View>
        <View style={flexRow}>
          <CardSurface style={styles.logoContainer}>
            <Icon name="building" size={15} color={colors.lightGray} />
          </CardSurface>
          <View style={ph10}>
            <TextInput
              style={styles.textBoxStyle}
              placeholder={'GKN Hospital, Bangalore'}
              placeholderTextColor={'#adb5bd'}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            props.searchNow();
          }}
          style={styles.buttonStyle}>
          <H8fontRegularWhite>{labels.searchNow}</H8fontRegularWhite>
        </TouchableOpacity>
      </CardSurface>
    </View>
  );
};

export default DashBoardSearch;

const styles = StyleSheet.create({
  container: {
    marginTop: -90,
    paddingLeft: 15,
    marginBottom: 10
  },
  containerStyle: {
    height: 170,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15
    // padding: 10,
  },
  logoContainer: {
    borderRadius: 25,
    height: 35,
    width: 35,
    backgroundColor: colors.white,
    // paddingLeft: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotsStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
    width: DevWidth / 1.5,
    marginRight: 45,
  },
  textBoxStyle: {
    marginRight: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
    width: DevWidth / 1.45,
    height: 40
  },
  buttonStyle: {
    marginTop: 12,
    height: 39,
    borderRadius: 5,
    backgroundColor: '#0CE0FF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
