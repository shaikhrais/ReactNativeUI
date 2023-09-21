import React, {Fragment} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
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
import {alignItemsCenter, flex1, mt10, mt20, pb10, ph15} from '../common/commonStyles';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {
  minLengthValidation,
  numberValidation,
  requiredValidation,
  validationSchema,
} from '../utils/validationConfig';
import {InputFields} from '../components/commonInputFields';
import LoginIcon from '../../assets/images/login-img.svg';
import LogoIcon from '../../assets/images/logo.svg';
import FacebookIcon from '../../assets/images/facebook-letter.svg';
import GoogleIcon from '../../assets/images/google-plus-letter.svg';
import UserIcon from '../../assets/images/user-icon.svg';
import LockIcon from '../../assets/images/lock-icon.svg';
import PhoneIcon from '../../assets/images/smartphone.svg';
import LeftArrow from '../../assets/images/left-arrow-big-black.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const SignUpScreen: React.FC<Props> = ({navigation}): JSX.Element => {
  const formKeys = {
    name: 'name',
    mobileNo: 'mobileNo',
    password: 'password',
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm();

  const onsubmit = detaila => {};

  return (
    <Fragment>
      <MainContainer>
        <ScrollView showsVerticalScrollIndicator={false} style={flex1}>
          <SubContainer style={{backgroundColor: colors.background}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', padding: 20}}>
              <LeftArrow/>
            </TouchableOpacity>
            <View style={flex1}>
              <View style={[alignItemsCenter, pb10]}>
                  <LoginIcon fill={"#e0e0e0"}/>
                <View>
                  <LogoIcon />
                </View>
              </View>
              <RowView style={mt20}>
                <H6fontRegularBlack>{labels.doctorRegister}</H6fontRegularBlack>
                <H9fontRegularBlack>{labels.notaDoctor}</H9fontRegularBlack>
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
                      placeholder={labels.name}
                      image={
                        <View style={styles.passwordIconStyle}>
                          <UserIcon />
                        </View>
                      }
                    />
                  )}
                  rules={{
                    required: requiredValidation(labels.name),
                    minLength: minLengthValidation(
                      validationSchema.name.minLength,
                    ),
                  }}
                />

                <Controller
                  name={formKeys.mobileNo}
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <InputFields
                      value={value}
                      onChangeText={onChange}
                      placeholder={labels.mobileNumber}
                      errorMessage={errors[
                        formKeys.mobileNo
                      ]?.message.toString()}
                      image={
                        <View style={styles.passwordIconStyle}>
                          <PhoneIcon />
                        </View>
                      }
                    />
                  )}
                  rules={{
                    required: requiredValidation(labels.mobileNumber),
                    validate: numberValidation,
                    minLength: minLengthValidation(
                      validationSchema.phoneNumber.minLength,
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
                      placeholder={labels.createPassword}
                      errorMessage={errors[
                        formKeys.password
                      ]?.message.toString()}
                      image={
                        <View style={styles.passwordIconStyle}>
                          <LockIcon />
                        </View>
                      }
                    />
                  )}
                  rules={{
                    required: requiredValidation(labels.createPassword),
                    minLength: minLengthValidation(
                      validationSchema.password.minLength,
                    ),
                  }}
                />
              </View>

                <Button
                  disabled={false}
                  funCallback={handleSubmit(onsubmit)}
                  label={labels.register}
                />
            </View>

            <View>
              <View style={styles.infoTextViewStyle}>
                <H9fontRegularGray>{labels.alreadyAccount} </H9fontRegularGray>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(screenName.SignInScreen as any)
                  }>
                  <H9fontRegularBlack>
                    {labels.registerLogin}
                  </H9fontRegularBlack>
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
                      <GoogleIcon/>
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
export default SignUpScreen;

const styles = StyleSheet.create({
  infoTextViewStyle: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  socialMediaIconStyle: {height: 15, width: 22, alignSelf: 'center'},

  socialMediaFBIconStyle: {alignItems: 'center', justifyContent: 'center'},
  borderLineStyle: {paddingTop: 10},
  footerComponentView: {paddingTop: 30},
  passwordIconStyle: {justifyContent: 'center', alignItems: 'center'},
  userIconsStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
