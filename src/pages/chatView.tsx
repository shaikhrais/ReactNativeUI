import React, {Fragment, useState, useEffect} from 'react';
import {
  ScrollView,
  TextInput,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {GeneralProps} from '../interfaces/generalProps';
import {Route, useIsFocused} from '@react-navigation/native';
import {NavBar, NavBarPatient} from '../common/commonComponents';
import {
  CardSurface,
  CommonInput,
  CommonLineDotted,
  CommonSearch,
  MainContainer,
  RowView,
} from '../components/commonViews';
import {
  H15fontMediumBlack,
  H30fontRegularLightBlack,
  H9fontRegularGray,
  H30fontRegularLightRed,
  H8fontRegularWhite,
  H8fontMediumBlack,
  H8fontRegularBlack,
} from '../components/commonText';
import {colors} from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DevWidth} from '../utils/device';
import {alignItemsRight, pl15, pv20, pv5} from '../common/commonStyles';
import SendIcon from '../../assets/images/send.svg';
import GreenTick from '../../assets/images/green-tick.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const ChatView: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const [focus, setFocus] = useState(false);

  const recivedMessage = () => {
    return (
      <View style={pv20}>
        <View style={styles.receivedMsgContainer}>
          <H8fontMediumBlack style={pl15}>
            Hai I am Meera, am from Delhi{' '}
          </H8fontMediumBlack>
        </View>
        <H9fontRegularGray style={pv5}>Mar 26, 08:03 PM </H9fontRegularGray>
      </View>
    );
  };

  const sentMessage = () => {
    return (
      <View style={styles.sentMsgContainer}>
        <View style={styles.sentMsgTxtContainer}>
          <H8fontRegularWhite style={pl15}>
            Lorem Ipsum, you need to 4 be sure there{' '}
          </H8fontRegularWhite>
        </View>
        <View style={styles.sentmsgViewdate}>
          <H9fontRegularGray style={pv5}>Mar 26, 08:03 PM </H9fontRegularGray>
          <GreenTick height={12} width={12} />
        </View>
      </View>
    );
  };

  const dayDetails = () => {
    return (
      <>
        <View style={styles.dayDashStyle}></View>
        <View style={styles.dayStyle}>
          <H8fontMediumBlack style={styles.dayFontStyle}>
            Today
          </H8fontMediumBlack>
        </View>
      </>
    );
  };

  return (
    <Fragment>
      <MainContainer style={{backgroundColor: colors.background}}>
        <NavBar chat title={'Madeleine Penelope'} />
        <View style={styles.constainer}>
          <ScrollView>
            <View style={styles.scrollContainer}>
              {recivedMessage()}
              {sentMessage()}
              {dayDetails()}
              {recivedMessage()}
              {sentMessage()}
              {sentMessage()}
              {recivedMessage()}
            </View>
          </ScrollView>
        </View>
        <View style={styles.footerStyle}>
          <TextInput
            style={styles.textBoxStyle}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="Type your message....."
          />
          <View style={styles.sendMsgBtnContailer}>
            <TouchableOpacity style={styles.sendMsgBtn}>
              <SendIcon height={18} width={18}/>
            </TouchableOpacity>
          </View>
        </View>
      </MainContainer>
    </Fragment>
  );
};

export default ChatView;

const styles = StyleSheet.create({
  constainer: {
    marginTop: -100,
    flex: 1,
  },
  sentMsgContainer: {
    alignItems: 'flex-end',
  },

  sentMsgTxtContainer: {
    backgroundColor: '#1A568C',
    width: DevWidth / 1.5,
    paddingVertical: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  sentmsgViewdate: {
    width: DevWidth / 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsStyle: {
    height: 12,
    width: 12,
  },
  receivedMsgContainer: {
    backgroundColor: '#fff',
    width: DevWidth / 1.5,
    paddingVertical: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
  dayDashStyle: {
    borderWidth: 0.3,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: 'black',
    marginTop: 40,
  },
  dayStyle: {alignItems: 'center', marginTop: -17},
  dayFontStyle: {
    paddingVertical: 5,
    paddingHorizontal: 22,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  scrollContainer: {
    backgroundColor: colors.background,
    borderRadius: 30,
    padding: 20,
    flex: 1,
  },
  footerStyle: {
    bottom: 5,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    // borderColor: focus ? '#1A568C' : '#fff',
    borderColor: '#fff',
    borderWidth: 2,
  },
  textBoxStyle: {
    paddingLeft: 25,
    width: DevWidth / 1.15,
  },
  sendMsgBtnContailer: {
    alignItems: 'flex-end',
    paddingRight: 12,
    paddingTop: 1.5,
  },
  sendMsgBtn: {
    backgroundColor: colors.seaBlue,
    height: 38,
    width: 38,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendMsgBtnImageStyle: {
    height: 18,
    width: 18,
  },
});
