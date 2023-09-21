import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {H6fontMediumWhite, H7fontMediumWhite} from '../components/commonText';
import {RowView} from '../components/commonViews';
import {colors} from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Octicons';
import Modal from 'react-native-modal';
import SideMenu from '../pages/sideMenu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {fontFamily} from '../utils/fontFamily';
import {screenName} from '../utils/screenName';
import BackIcon from '../../assets/images/left-arrow-white.svg';
import Patient6 from '../../assets/images/patients/patient6.svg';
import PhoneIcon from '../../assets/images/phone-icon.svg';

interface NavBarProps {
  title: string;
  chat?: boolean;
}
const {width} = Dimensions.get('window');
export const NavBar: React.FC<NavBarProps> = ({title, chat}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(false);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (
    <Fragment>
      <RowView
        style={{
          borderBottomColor: colors.borderTextColor,
          borderBottomWidth: 1,
          backgroundColor: colors.blue,
          height: 160,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {chat ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingTop: 22, paddingLeft: 15}}>
              <BackIcon height={10} width={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                toggleModal();
              }}
              style={{paddingTop: 20, paddingLeft: 15}}>
              <View
                style={{height: 3, width: 30, backgroundColor: 'white'}}></View>
              <View style={{paddingTop: 5}}>
                <View
                  style={{
                    height: 3,
                    width: 20,
                    backgroundColor: 'white',
                  }}></View>
              </View>
              <View style={{paddingTop: 5}}>
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: 'white',
                  }}></View>
              </View>
            </TouchableOpacity>
          )}

          {chat && (
            <View style={{paddingTop: 10, paddingLeft: 10}}>
              <View style={{height: 37, width: 37, borderRadius: 37, overflow: 'hidden'}}>
                <Patient6 height={37} width={37}/>
              </View>
            </View>
          )}
          <H6fontMediumWhite
            style={{paddingLeft: chat ? 7 : 20, paddingTop: 13}}>
            {title}
          </H6fontMediumWhite>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 16,
            paddingRight: 10,
          }}>
          {chat ? (
            <TouchableOpacity
              onPress={() => navigation.navigate(screenName.VoiceCall as any)}
              style={{paddingTop: 8}}>
              <PhoneIcon height={17} width={17} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screenName.NotificationScreen as any)
              }>
              <Icon name="notifications" size={30} color={'white'} />
            </TouchableOpacity>
          )}

          <View style={{paddingLeft: 5}}>
            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" size={30} color={'white'} />
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{marginTop: 50}}
                customStyles={{
                  optionsContainer: [
                    {
                      borderWidth: 0.5,
                      borderColor: colors.borderTextColor,
                      borderRadius: 5,
                    },
                  ],
                }}>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.DoctorProfile as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    My Profile
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.ProfileSettings as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    Settings
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.SignInScreen as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    Log Out
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </RowView>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        swipeDirection="left"
        useNativeDriver
        hideModalContentWhileAnimating
        propagateSwipe
        style={styles.sideMenuStyle}>
        <SideMenu />
      </Modal>
    </Fragment>
  );
};
export const NavBarPatient: React.FC<NavBarProps> = ({title}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const [opened, setOpened] = useState(false);
  const onTriggerPress = () => {
    setOpened(true);
  };
  const onBackdropPress = () => {
    setOpened(false);
  };
  return (
    <Fragment>
      <RowView
        style={{
          borderBottomColor: colors.borderTextColor,
          borderBottomWidth: 1,
          backgroundColor: colors.blue,
          height: 60,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
            }}
            style={{paddingTop: 18, paddingLeft: 15}}>
            <View
              style={{height: 2, width: 25, backgroundColor: 'white'}}></View>
            <View style={{paddingTop: 5}}>
              <View
                style={{height: 2, width: 15, backgroundColor: 'white'}}></View>
            </View>
            <View style={{paddingTop: 5}}>
              <View
                style={{
                  height: 2.2,
                  width: 25,
                  backgroundColor: 'white',
                }}></View>
            </View>
          </TouchableOpacity>
          <H7fontMediumWhite style={{paddingLeft: 20, paddingTop: 13}}>
            {title}
          </H7fontMediumWhite>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 16,
            paddingRight: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(screenName.NotificationScreen as any)
            }>
            <Icon name="notifications" size={24} color={'white'} />
          </TouchableOpacity>
          <View style={{paddingLeft: 5}}>
            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" size={24} color={'white'} />
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{marginTop: 50}}
                customStyles={{
                  optionsContainer: [
                    {
                      borderWidth: 0.5,
                      borderColor: colors.borderTextColor,
                      borderRadius: 5,
                    },
                  ],
                }}>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.DoctorProfile as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    My Profile
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.ProfileSettings as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    Settings
                  </Text>
                </MenuOption>
                <MenuOption
                  onSelect={() =>
                    navigation.navigate(screenName.SignInScreen as any)
                  }>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 13,
                      fontFamily: fontFamily.fontRegular,
                      paddingLeft: 7,
                      paddingTop: 2,
                    }}>
                    Log Out
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </RowView>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        swipeDirection="left"
        useNativeDriver
        hideModalContentWhileAnimating
        propagateSwipe
        style={styles.sideMenuStyle}>
        <SideMenu />
      </Modal>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sideMenuStyle: {
    margin: 0,
    width: width * 0.65,
  },
});
