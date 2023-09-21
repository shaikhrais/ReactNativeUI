import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CardSurface, CommonInput} from '../../components/commonViews';
import {labels} from '../../utils/labels';
import {
  H14fontRegularWhite,
  H14fontRegularImage,
  H30fontRegularLightBlack2,
  H8fontMediumBlack,
} from '../../components/commonText';
import * as ImagePicker from 'react-native-image-picker';
import {colors} from '../../utils/colors';
import {mt15, mt20, pl10} from '../../common/commonStyles';

interface Props {}
const ClinicInfo: React.FC<Props> = ({}): JSX.Element => {
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
  return (
    <CardSurface style={styles.container}>
      <View style={styles.bodyStyle}>
        <H8fontMediumBlack>{labels.clinicInfo}</H8fontMediumBlack>
        <H30fontRegularLightBlack2 style={mt20}>
          {labels.clinicName}
        </H30fontRegularLightBlack2>
        <CommonInput style={{height: 35}}>
          <TextInput style={pl10} />
        </CommonInput>
        <H30fontRegularLightBlack2 style={mt15}>
          {labels.clinicAddress}
        </H30fontRegularLightBlack2>
        <CommonInput>
          <TextInput style={pl10} />
        </CommonInput>
        <H30fontRegularLightBlack2 style={mt15}>
          {labels.clinicImage}
        </H30fontRegularLightBlack2>
        <TouchableOpacity
          style={[styles.imageContainer, styles.clinicImageContainer]}
          onPress={() => {
            cameraOpt();
          }}>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage.uri}}
              style={styles.clicnicImageStyle}
            />
          ) : (
            <H14fontRegularImage style={{fontSize: 10}}>
              {'Click here to upload images'}
            </H14fontRegularImage>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextButtonStyle}>
        <H14fontRegularWhite>NEXT</H14fontRegularWhite>
      </TouchableOpacity>
    </CardSurface>
  );
};
export default ClinicInfo;

const styles = StyleSheet.create({
  nextButtonStyle: {
    height: 45,
    backgroundColor: '#1B5A90',
    marginVertical: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 30
  },
  clinicImageContainer: {
    height: 80,
    borderStyle: 'dashed',
    borderColor: '#CFCFCF',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.background,
  },
  clicnicImageStyle: {height: 50, width: 50},
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {marginHorizontal: 10},
  bodyStyle: {paddingHorizontal: 10, paddingTop: 10},
});
