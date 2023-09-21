import React, {Fragment} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Button} from '../components/commonButton';
import {GeneralProps} from '../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {labels} from '../utils/labels';
import {screenName} from '../utils/screenName';
import {H9fontRegularBlack, H9fontRegularGray} from '../components/commonText';
import {
  CardSurface,
  MainContainer,
  RowView,
  TextInputStyle,
} from '../components/commonViews';
import {colors} from '../utils/colors';
import {mh20, pl20} from '../common/commonStyles';
import LoginIcon from '../../assets/images/login-img.svg';
import LogoIcon from '../../assets/images/logo.svg';
import EmailIcon from '../../assets/images/email.svg';
import LeftArrow from '../../assets/images/left-arrow-big-black.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const ForgotPassword: React.FC<Props> = ({navigation, route}): JSX.Element => {
  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', padding: 20}}>
            <LeftArrow/>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <LoginIcon fill="#e0e0e0" height={230} width={230}/>
            <View style={pl20}>
              <LogoIcon height={50} width={200}/>
            </View>
          </View>

          <View style={styles.txtBoxStyle}>
            <TextInputStyle>
              <RowView>
                <TextInput
                  style={[pl20]}
                  placeholder={'Email'}
                  placeholderTextColor={'#adb5bd'}
                />
                <View style={styles.iconContainer}>
                  <CardSurface style={styles.surfaceStyle}>
                    <EmailIcon />
                  </CardSurface>
                </View>
              </RowView>
            </TextInputStyle>
          </View>
          <View style={styles.buttonStyle}>
            <Button
              disabled={false}
              funCallback={() => navigation.navigate(screenName.ChangePassword)}
              label={labels.resetPassword}
            />
          </View>
          <View style={styles.footerText}>
            <H9fontRegularGray>{labels.goBackLogin} </H9fontRegularGray>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screenName.SignInScreen as any)
              }>
              <H9fontRegularBlack>{labels.registerLogin}</H9fontRegularBlack>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    // paddingTop: 10,
  },
  logoStyle: {
    height: 230,
    width: 230,
  },
  logoTxtStyle: {height: 50, width: 200},
  txtBoxStyle: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  iconContainer: {right: 7, justifyContent: 'center'},
  surfaceStyle: {
    borderRadius: 21,
    height: 42,
    width: 42,
    backgroundColor: colors.white,
    // paddingTop: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailLogostyle: {height: 17, width: 25, alignSelf: 'center'},
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  footerText: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
