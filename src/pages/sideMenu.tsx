import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {H8fontRegularBlack} from '../components/commonText';
import {CardSurface, RowView} from '../components/commonViews';
import {colors} from '../utils/colors';

import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';

import Icon1 from 'react-native-vector-icons/AntDesign';
import {labels} from '../utils/labels';
import {fontFamily} from '../utils/fontFamily';
import {screenName} from '../utils/screenName';
import {useNavigation} from '@react-navigation/native';
import {alignItemsCenter, flexRow, mh5, mv10, mv15, mv5} from '../common/commonStyles';
import {sidemenuDetails} from '../utils/constant';
import LogoutIcon from '../../assets/images/open-account-logout.svg';

interface Props {}
interface MenuList {
  name: string;
  screenName: string;
  iconName: string;
  iconsType: string;
}
const SideMenu: React.FC<Props> = ({}): JSX.Element => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderOptions = (data: MenuList, index: number) => {
    return (
      <RowView style={[mv10, alignItemsCenter]}>
        <TouchableOpacity
          style={[flexRow, alignItemsCenter]}
          onPress={() => {
            navigation.navigate(data.screenName as never);
          }}>
          <CardSurface style={styles.surfaceStyle}>
            {data.iconsType === 'MaterialIcons' ? (
              <MaterialIcons
                name={data.iconName}
                size={15}
                color={colors.white}
              />
            ) : data.iconsType === 'CommunityIcons' ? (
              <CommunityIcons
                name={data.iconName}
                size={15}
                color={colors.white}
              />
            ) : (
              <IonicIcons name={data.iconName} size={15} color={colors.white} />
            )}
          </CardSurface>
          <H8fontRegularBlack>{data.name}</H8fontRegularBlack>
        </TouchableOpacity>
        {data.name === 'Dashboard' ? (
          <TouchableOpacity
            onPress={() => {
              toggleModal;
            }}>
            <Icon1 name="close" size={23} color={colors.black} />
          </TouchableOpacity>
        ) : null}
      </RowView>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContainerStyle}>
        <View>
          {sidemenuDetails.map((item, index) => {
            return renderOptions(item, index);
          })}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(screenName.SignInScreen as any)}
          style={styles.loginoutButtonStyle}>
            <LogoutIcon height={11} width={12} />
          <Text style={styles.logoutBtnStyle}>{labels.logOut}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SideMenu;
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  loginoutButtonStyle: {
    height: 33,
    width: 110,
    backgroundColor: colors.pink,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  logoutBtnStyle: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 14,
    fontFamily: fontFamily.fontRegular,
  },
  scrollContainerStyle: {flex: 1, justifyContent: 'space-between', marginBottom: 30},
  surfaceStyle: {
    borderRadius: 15,
    height: 30,
    width: 30,
    backgroundColor: colors.facebook,
    // paddingLeft: 12,
    marginRight: 12,
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
