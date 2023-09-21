import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  CardSurface,
  CommonLineDotted,
  RowView,
} from '../../components/commonViews';
import {
  H10fontRegularBlack,
  H14fontRegularBlue,
  H14fontRegulargray,
  H8fontMediumBlack,
  H9fontRegularBlack,
  H9fontRegularGreen,
} from '../../components/commonText';
import {colors} from '../../utils/colors';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {labels} from '../../utils/labels';
import {DevWidth} from '../../utils/device';
import {
  alignItemsCenter,
  alignSelfCenter,
  flexRow,
  mh15,
  mv15,
  ph10,
  pl10,
  pl5,
  pt5,
} from '../../common/commonStyles';
import Patient10 from '../../../assets/images/patients/patient10.svg';
import Patient7 from '../../../assets/images/patients/patient7.svg';

interface Props {}

const RattingStyle = () => {
  return (
    <View style={flexRow}>
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{paddingTop: 2}}
      />
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{paddingLeft: 3, paddingTop: 2}}
      />
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{paddingLeft: 3, paddingTop: 2}}
      />
      <Icon2
        name="star"
        size={11}
        color={colors.yellow}
        style={{paddingLeft: 3, paddingTop: 2}}
      />
      <Icon2
        name="star"
        size={11}
        color={'#dedfe0'}
        style={{paddingLeft: 3, paddingTop: 2}}
      />
    </View>
  );
};

const Reviews: React.FC<Props> = ({}): JSX.Element => {
  return (
    <View style={styles.constainer}>
      <CardSurface style={styles.cardSurface}>
        <RowView>
          <View style={styles.initialRowStyle}>
            <View style={styles.userImageStyle}>
              <Patient10 height={45} width={45}/>
            </View>
            <View style={ph10}>
              <H8fontMediumBlack>{'Richard Wilson'}</H8fontMediumBlack>
              <H14fontRegulargray>{'Reviewed 2 Days ago'}</H14fontRegulargray>
              <RattingStyle />
              <View style={styles.thumpsUpContainer}>
                <Icon2
                  name="thumbs-o-up"
                  size={11}
                  color={'#00CC80'}
                  style={pt5}
                />
                <H9fontRegularGreen style={pl5}>
                  {labels.recommendDoctor}
                </H9fontRegularGreen>
              </View>
              <H9fontRegularBlack style={styles.widthStyle}>
                {labels.text}
              </H9fontRegularBlack>
              <CommonLineDotted style={styles.widthStyle} />
              <View style={styles.thumpsUpContainer}>
                <Icon2
                  name="reply"
                  size={11}
                  color={colors.ligtBlue}
                  style={pt5}
                />
                <H14fontRegularBlue style={pl5}>
                  {labels.replay}
                </H14fontRegularBlue>
              </View>
              <View style={{flexDirection: 'row'}}>
                <H9fontRegularBlack style={pt5}>
                  {labels.recommend}
                </H9fontRegularBlack>
                <TouchableOpacity style={pl5}>
                  <View style={styles.yesbuttonStyle}>
                    <Icon2
                      name="thumbs-o-up"
                      size={12}
                      color={colors.black}
                      style={styles.btnIconPadding}
                    />
                    <H10fontRegularBlack style={styles.btnTxtStyle}>
                      {'Yes'}
                    </H10fontRegularBlack>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={pl5}>
                  <View style={styles.noButtonStyle}>
                    <Icon2
                      name="thumbs-o-down"
                      size={12}
                      color={colors.black}
                      style={styles.btnIconPadding}
                    />
                    <H10fontRegularBlack style={styles.btnTxtStyle}>
                      {'No'}
                    </H10fontRegularBlack>
                  </View>
                </TouchableOpacity>
              </View>
              <RowView>
                <View style={styles.subContainer}>
                  <View style={styles.subProfileImage}>
                    <Patient7 height={45} width={45}/>
                  </View>
                  <View style={pl10}>
                    <H8fontMediumBlack>{'Richard Wilson'}</H8fontMediumBlack>
                    <H14fontRegulargray>
                      {'Reviewed 2 Days ago'}
                    </H14fontRegulargray>

                    <RattingStyle />
                    <H9fontRegularBlack style={styles.descriptionStyle}>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed'
                      }
                    </H9fontRegularBlack>
                    <CommonLineDotted style={{width: DevWidth / 2}} />
                    <View style={styles.thumpsUpContainer}>
                      <Icon2
                        name="reply"
                        size={11}
                        color={colors.ligtBlue}
                        style={pt5}
                      />
                      <H14fontRegularBlue style={pl5}>
                        {labels.replay}
                      </H14fontRegularBlue>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      
                      <View
                        style={{
                          flexDirection: 'row',
                          // justifyContent: 'flex-end',
                        }}>
                        <H9fontRegularBlack style={[pt5]}>
                        {labels.recommend}
                      </H9fontRegularBlack>
                        <TouchableOpacity style={pl5}>
                          <View style={styles.yesbuttonStyle}>
                            <Icon2
                              name="thumbs-o-up"
                              size={12}
                              color={colors.black}
                              style={styles.btnIconPadding}
                            />
                            <H10fontRegularBlack style={styles.btnTxtStyle}>
                              {'Yes'}
                            </H10fontRegularBlack>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={pl5}>
                          <View style={styles.noButtonStyle}>
                            <Icon2
                              name="thumbs-o-down"
                              size={12}
                              color={colors.black}
                              style={styles.btnIconPadding}
                            />
                            <H10fontRegularBlack style={styles.btnTxtStyle}>
                              {'No'}
                            </H10fontRegularBlack>
                          </View>
                        </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </RowView>
            </View>
          </View>
        </RowView>
        <TouchableOpacity style={[flexRow, mv15, alignSelfCenter]}>
          <H9fontRegularBlack style={{}}>
            {labels.showFeedback}
          </H9fontRegularBlack>
          <H9fontRegularBlack style={{}}>{'  (167)'}</H9fontRegularBlack>
        </TouchableOpacity>
      </CardSurface>
    </View>
  );
};
export default Reviews;

const styles = StyleSheet.create({
  constainer: {paddingHorizontal: 18},
  cardSurface: {backgroundColor: 'white', borderRadius: 20},
  initialRowStyle: {padding: 5, flexDirection: 'row'},
  userImageStyle: {height: 45, width: 45, borderRadius: 45, overflow: 'hidden'},
  thumpsUpContainer: {flexDirection: 'row', paddingTop: 4},
  widthStyle: {width: DevWidth / 1.5, paddingTop: 10},
  yesbuttonStyle: {
    height: 25,
    width: 52,
    borderRadius: 40,
    borderStyle: 'dashed',
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTxtStyle: { paddingLeft: 5, paddingTop: 2},
  btnIconPadding: {paddingTop: 4, paddingLeft: 5},

  noButtonStyle: {
    height: 25,
    width: 52,
    borderRadius: 40,
    borderStyle: 'dashed',
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subContainer: {paddingTop: 20, flexDirection: 'row'},
  subProfileImage: {height: 45, width: 45, borderRadius: 45, overflow: 'hidden'},
  descriptionStyle: {width: DevWidth / 2, paddingTop: 6},
});
