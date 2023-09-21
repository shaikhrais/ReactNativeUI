import React, {Fragment} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Button, SocialMediaLogin} from '../components/commonButton';
import {GeneralProps} from '../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {labels} from '../utils/labels';
import {screenName} from '../utils/screenName';
import {
  H6fontRegularBlack,
  H9fontRegularBlack,
  H9fontRegularGray,
} from '../components/commonText';
import {
  CommonLineView,
  MainContainer,
  RowView,
  SubContainer,
} from '../components/commonViews';
import {colors} from '../utils/colors';
import {fontFamily} from '../utils/fontFamily';
import {DevWidth} from '../utils/device';
import {
  alignItemsCenter,
  alignItemsLeft,
  alignSelfRight,
  flex1,
  mb20,
  ml10,
  mt10,
  mt20,
  pb10,
  ph15,
  pt10,
} from '../common/commonStyles';
import {
  minLengthValidation,
  requiredValidation,
  validationSchema,
} from '../utils/validationConfig';
import {useForm, Controller} from 'react-hook-form';
import {InputFields} from '../components/commonInputFields';
import LoginIcon from '../../assets/images/login-img.svg';
import LogoIcon from '../../assets/images/logo.svg';
import FacebookIcon from '../../assets/images/facebook-letter.svg';
import GoogleIcon from '../../assets/images/google-plus-letter.svg';
import EmailIcon from '../../assets/images/email.svg';
import LockIcon from '../../assets/images/lock-icon.svg';


interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const SignInScreen: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const formKeys = {
    name: 'name',
    password: 'password',
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm();

  const onsubmit = detaila => {
    navigation.navigate(screenName.DashBoardScreen);
  };

  return (
    <Fragment>
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} style={flex1}>
          <SubContainer style={{backgroundColor: colors.background}}>
            <View style={[alignItemsCenter, pb10]}>
              <LoginIcon fill={'#e0e0e0'}/>
              <View>
                <LogoIcon />
              </View>
            </View>
            <RowView style={mt20}>
              <H6fontRegularBlack>{labels.login}</H6fontRegularBlack>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(screenName.SignUpScreen as any)
                }>
                <H9fontRegularBlack>{labels.areUdoctor}</H9fontRegularBlack>
              </TouchableOpacity>
            </RowView>
            <View>
              <Controller
                name={formKeys.name}
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputFields
                    errorMessage={errors[formKeys.name]?.message.toString()}
                    value={value}
                    onChangeText={onChange}
                    placeholder={labels.emailOrUserName}
                    image={
                      <View style={styles.userIconsStyle}>
                        <EmailIcon/>
                      </View>
                    }
                  />
                )}
                rules={{
                  required: requiredValidation(labels.emailOrUserName),
                  minLength: minLengthValidation(
                    validationSchema.name.minLength,
                  ),
                }}
              />

              <Controller
                name={formKeys.password}
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputFields
                    value={value}
                    onChangeText={onChange}
                    placeholder={labels.password}
                    errorMessage={errors[formKeys.password]?.message.toString()}
                    image={
                      <View style={styles.passwordIconStyle}>
                        <LockIcon />
                      </View>
                    }
                  />
                )}
                rules={{
                  required: requiredValidation(labels.password),
                  minLength: minLengthValidation(
                    validationSchema.password.minLength,
                  ),
                }}
              />
            </View>
            
            <View style={[mt10, alignSelfRight]}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(screenName.ForgotPassword as any)
                }>
                <H9fontRegularGray>{labels.forgotPassword}</H9fontRegularGray>
              </TouchableOpacity>
            </View>

              <Button
                disabled={false}
                funCallback={handleSubmit(onsubmit)}
                label={labels.loginNow}
              />

            <View>
              <View style={styles.infoTextViewStyle}>
                <H9fontRegularGray>{labels.dntHaveAccount} </H9fontRegularGray>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(screenName.SignUpScreen as any)
                  }>
                  <H9fontRegularBlack>{labels.signUp}</H9fontRegularBlack>
                </TouchableOpacity>
              </View>
              <View style={styles.borderLineStyle}>
                <CommonLineView />
              </View>
              <RowView style={styles.footerComponentView}>
                <SocialMediaLogin
                  btnKey={'fb'}
                  label={labels.facebook}
                  image={
                    <View style={styles.socialMediaFBIconStyle}>
                      <FacebookIcon/>
                    </View>
                  }
                  onPress={() => {}}
                />
                <SocialMediaLogin
                  label={labels.google}
                  image={
                    <View style={styles.socialMediaFBIconStyle}>
                      <GoogleIcon />
                    </View>
                  }
                  onPress={() => {}}
                />
              </RowView>
            </View>
          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  infoTextViewStyle: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialMediaBtnIconsStyle: {position: 'absolute', marginLeft: 15, top: -19},
  socialMediaBtnIconContainerStyle: {
    borderRadius: 25,
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingLeft: 3,
  },
  socialMediaIconStyle: {height: 15, width: 22, alignSelf: 'center'},
  socialMediaBtnStyle: {
    zIndex: -1,
    height: 45,
    width: DevWidth / 3,
    backgroundColor: colors.google,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMediaBtnTextStyele: {
    color: 'white',
    fontSize: 14,
    fontFamily: fontFamily.fontRegular,
  },
  socialMediaFBIconStyle: {alignItems: 'center' },
  userIconsStyle: {
    // height: 20,
    // width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordIconStyle: {alignItems: 'center', justifyContent: 'center'},
  borderLineStyle: {paddingTop: 10},
  footerComponentView:{ paddingTop: 30}
});
