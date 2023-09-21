import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CardSurface, CommonInput, RowView} from '../../components/commonViews';
import {labels} from '../../utils/labels';
import {
  H30fontRegularLightBlack2,
  H14fontRegularWhite,
  H30fontRegularLightRed,
  H8fontMediumLightBlack,
} from '../../components/commonText';
import {Dropdown} from 'react-native-element-dropdown';
import {fontFamily} from '../../utils/fontFamily';
import * as ImagePicker from 'react-native-image-picker';
import {DevWidth} from '../../utils/device';
import {data} from '../../utils/constant';
import {flexRow, p10, p5, pb10, pl10, pl20, pl5} from '../../common/commonStyles';
import Doctor2 from '../../../assets/images/doctors/doctor-02.svg';
import PlaceholderIcon from '../../../assets/images/placeholder-small.svg';
import CalendarIcon from '../../../assets/images/icon-metro-calendar-big.svg';

interface Props {}
const BasicInfo: React.FC<Props> = ({}): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('Male');
  const [selectedImage, setSelectedImage] = useState<any>();
  const cameraOpt = () => {
    launchCamera();
  };
  const launchCamera = () => {
    try {
      let options: ImagePicker.CameraOptions = {
        includeBase64: false,
        quality: 0.3,
        mediaType: 'photo',
      };
      ImagePicker.launchCamera(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          if (response && response.assets) {
            const file = {
              name: response.assets[0].fileName,
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              size: response.assets[0].fileSize,
            };
            setSelectedImage(file);
          }
        }
      });
    } catch (error) {}
  };

  const textBoxStyle = (label: string) => {
    return (
      <View style={pb10}>
        <View style={[flexRow]}>
          <H30fontRegularLightBlack2>{label} </H30fontRegularLightBlack2>
          <H30fontRegularLightRed>{'*'}</H30fontRegularLightRed>
        </View>
        <CommonInput style={{marginTop: 0, height: 35}}>
          <TextInput style={pl10} />
        </CommonInput>
      </View>
    );
  };

  return (
    <CardSurface style={styles.containerStyle}>
      <View style={styles.bodyStyle}>
        <H8fontMediumLightBlack>
          {labels.basicInformation}
        </H8fontMediumLightBlack>
        <View style={styles.bodyContainerStyle}>
          <View style={styles.profileImageStyle}>
              <Doctor2 height={'100%'} width={'150%'} />
            </View>
          <TouchableOpacity
            onPress={() => {
              cameraOpt();
            }}
            style={styles.profileImage}>
            <PlaceholderIcon height={13} width={13}/>
          </TouchableOpacity>
        </View>

        {textBoxStyle(labels.username)}
        {textBoxStyle(labels.email)}
        {textBoxStyle(labels.firstName)}
        {textBoxStyle(labels.lastName)}
        {textBoxStyle(labels.phoneNo)}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <H30fontRegularLightBlack2>{labels.gender}</H30fontRegularLightBlack2>
            <View style={styles.dropDownStyle}>
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && {backgroundColor: '#FFF'},
                ]}
                fontFamily={fontFamily.fontRegular}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                placeholder='Male'
                placeholderStyle={{fontSize: 13}}
                valueField="value"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                value={value}
              />
            </View>
          </View>
          <View>
            <H30fontRegularLightBlack2 style={pl20}>
              {labels.fromBasic}
            </H30fontRegularLightBlack2>
            <View style={styles.fromStyle}>
              <View style={{padding: 7, alignItems: 'flex-end'}}>
                <CalendarIcon height={18} width={16} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>NEXT</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default BasicInfo;
const styles = StyleSheet.create({
  dropdown: {
    // height: 38,
    // paddingTop: 20,
    paddingLeft: 10,
    // paddingRight: 5,
    backgroundColor: '#FFF',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  containerStyle: {marginHorizontal: 10},
  bodyStyle: {paddingHorizontal: 10, paddingTop: 10},
  bodyContainerStyle: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10
  },
  profileImageUploadStyle: {borderRadius: 50, width: 100, height: 100},
  profileImage: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  profileImageStyle: {    
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#f7f7f7',
    overflow: 'hidden',
  },
  dropDownStyle: {
    // height: 40,
    width: DevWidth / 2.7,
    borderColor: '#CFCFCF',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#CFCFCF',
  },
  fromStyle: {
    height: 35,
    width: DevWidth / 2.8,
    borderColor: '#CFCFCF',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
  },
  calenderIconStyle: {height: 18, width: 16},
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginVertical: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
});
