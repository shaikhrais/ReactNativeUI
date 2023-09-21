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
import {
  H6fontRegularBlack,
  H9fontRegularBlack,
  H9fontRegularGray,
} from '../components/commonText';
import {
  CardSurface,
  MainContainer,
  RowView,
  SubContainer,
  TextInputStyle,
} from '../components/commonViews';
import {colors} from '../utils/colors';
import {
  alignItemsCenter,
  mb20,
  mt10,
  mt20,
  ph30,
  pt10,
  pv10,
  pv30,
} from '../common/commonStyles';
import {useForm, Controller} from 'react-hook-form';
import {InputFields} from '../components/commonInputFields';
import {
  minLengthValidation,
  requiredValidation,
  validationSchema,
} from '../utils/validationConfig';
import LoginIcon from '../../assets/images/login-img.svg';
import LogoIcon from '../../assets/images/logo.svg';
import LockIcon from '../../assets/images/lock-icon.svg';
import LeftArrow from '../../assets/images/left-arrow-big-black.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const ChangePassword: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const formKeys = {
    // name: 'name',
    password: 'password',
    changePassword: 'changePassword',
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
        <ScrollView>
          <SubContainer style={{backgroundColor: colors.background}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', padding: 20}}>
              <LeftArrow/>
            </TouchableOpacity>
            <View style={alignItemsCenter}>
              <LoginIcon fill={"#e0e0e0"}/>
              <View>
                <LogoIcon/>
              </View>
            </View>
            <View style={[mt20]}>
              <Controller
                name={formKeys.password}
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputFields
                    errorMessage={errors[formKeys.password]?.message.toString()}
                    value={value}
                    onChangeText={onChange}
                    placeholder={labels.password}
                    image={
                      <View style={styles.passwordIconStyle}>
                        <LockIcon/>
                      </View>                    }
                  />
                )}
                rules={{
                  required: requiredValidation(labels.password),
                  minLength: minLengthValidation(
                    validationSchema.password.minLength,
                  ),
                }}
              />

              <Controller
                name={formKeys.changePassword}
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputFields
                    value={value}
                    onChangeText={onChange}
                    placeholder={labels.confirmpassword}
                    errorMessage={errors[
                      formKeys.changePassword
                    ]?.message.toString()}
                    image={
                      <View style={styles.passwordIconStyle}>
                        <LockIcon/>
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

            <View style={pv10}>
              <Button
                disabled={false}
                funCallback={handleSubmit(onsubmit)}
                label={labels.changePassword}
              />
            </View>

            <View style={styles.infoTextViewStyle}>
                <H9fontRegularGray>{labels.gobacktoLogin} </H9fontRegularGray>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(screenName.SignInScreen as any)
                  }>
                  <H9fontRegularBlack>
                    {labels.registerLogin}
                  </H9fontRegularBlack>
                </TouchableOpacity>
              </View>

          </SubContainer>
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default ChangePassword;
const styles = StyleSheet.create({
  passwordImageStye: {
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  infoTextViewStyle: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  passwordIconStyle: {justifyContent: 'center', alignItems: 'center'},
});
