import React, {Fragment, useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Modal,
  StyleSheet
} from 'react-native';
import {GeneralProps} from '../../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {
  CardSurface,
  MainContainer,
  RowView,
} from '../../components/commonViews';
import {NavBarPatient} from '../../common/commonComponents';
import {
  H14fontRegularWhite,
  H15fontMediumBlack,
  H8fontMediumBlack,
  H9fontMediumBlack,
  H9fontRegularGray,
} from '../../components/commonText';
import {colors} from '../../utils/colors';
import {DevHeight, DevWidth} from '../../utils/device';
import * as Progress from 'react-native-progress';
import {fontFamily} from '../../utils/fontFamily';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import CheckIcon from 'react-native-vector-icons/Entypo';
import {days, timeSlotStart, timeSlotEnd} from '../../utils/constant';
import CalendarIcon from '../../../assets/images/calender-icon.svg';
import FeatherIcon from '../../../assets/images/icon-feather-check-circle.svg';
import {Dropdown} from 'react-native-element-dropdown';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const ScheduleTimings: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [timeslotend, setTimeEnd] = useState('-');
  const [timeslotstart, setTimeStart] = useState('-');

  const [time, setTime] = useState([{starttime: '-', endtime: '-'}]);

  const [modalHeight, setModalHeight] = useState(200);
  const [scrollHeight, setScrollHeight] = useState(DevHeight / 3.2);

  const addDay = val => {
    if (selectedDay.length == 0) {
      setSelectedDay([val]);
    } else if (selectedDay.some(v => v == val)) {
      setSelectedDay(selectedDay.filter(item => item !== val));
    } else {
      setSelectedDay([...selectedDay, val]);
    }
  };

  const addTime = () => {
    let arr = {starttime: '-', endtime: '-'};
    setTime([...time, arr]);
    setModalHeight(modalHeight + 61);
    setScrollHeight(scrollHeight - 31);
  };

  const removeItem = index => {
    setModalHeight(modalHeight - 61);
    time.splice(index, 1);
    setScrollHeight(scrollHeight + 31);
  };


  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBarPatient title={'Doctor Schedule Timings'} />
          <View
            style={{
              height: 100,
              backgroundColor: 'white',
              padding: 20,
              flexDirection: 'row',
            }}>
            <CardSurface
              style={{
                borderRadius: 40,
                height: 60,
                width: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <CalendarIcon height={30} width={30} />
            </CardSurface>
            <RowView style={{flex: 1}}>
              <View style={{paddingLeft: 10, paddingTop: 5}}>
                <H8fontMediumBlack>{'Schedule Timings'}</H8fontMediumBlack>
                <H9fontRegularGray>{'Timing Slot Duration'}</H9fontRegularGray>
              </View>
              <View
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 8,
                }}>
                <Progress.Circle
                  size={60}
                  borderWidth={0}
                  borderColor={'#fff'}
                  textStyle={{
                    color: '#000000',
                    fontSize: 11,
                    fontFamily: fontFamily.fontMedium,
                    textAlign: 'center',
                    lineHeight: 12,
                  }}
                  thickness={4}
                  unfilledColor="#fff"
                  color="#1B5A90"
                  progress={0.4}
                  showsText={true}
                  formatText={progress => '30' + '\n' + 'Mints'}
                />
              </View>
            </RowView>
          </View>
          <H15fontMediumBlack
            style={{paddingHorizontal: 16, paddingTop: 20, paddingBottom: 10}}>
            {'Select day'}
          </H15fontMediumBlack>
          <View style={{marginHorizontal: 16}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{left: 20}}
            data={days}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => addDay(item.name)}
                style={{
                  marginRight: 10,
                  width: 45,
                  height: 85,
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: selectedDay.some(v => v == item.name)
                    ? '#0dcaf0'
                    : colors.lightGray,
                  backgroundColor: selectedDay.some(v => v == item.name)
                    ? '#0CE0FF'
                    : colors.white,
                  alignItems: 'center',
                }}>
                <H9fontRegularGray
                  style={{
                    color: selectedDay.some(v => v == item.name)
                      ? '#fff'
                      : colors.lightGray,
                    paddingTop: 35,
                  }}>
                  {item.name}
                </H9fontRegularGray>
                <View style={{paddingTop: 5}}>
                  <FeatherIcon fill={"#fff"}/>
                </View>
              </TouchableOpacity>
            )}
          />
          </View>
          <RowView
            style={{
              flex: 1,
              paddingHorizontal: 16,
              paddingTop: 25,
              paddingBottom: 10,
            }}>
            <H15fontMediumBlack>{'Time Slots - Monday'}</H15fontMediumBlack>
            <TouchableOpacity
              onPress={() => setModalOpen(true)}
              style={{flexDirection: 'row'}}>
              <EditIcon
                name="edit"
                size={17}
                color={'black'}
                style={{paddingRight: 3, paddingTop: 3}}
              />
              <H15fontMediumBlack>{'Edit'}</H15fontMediumBlack>
            </TouchableOpacity>
          </RowView>
          <RowView style={{flex: 1, paddingBottom: 10, paddingHorizontal: 16,}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width: DevWidth/1.07,
              }}
              data={[{}, {}, {}]}
              renderItem={({item, index}) => (
                <View
                  style={{
                    marginRight: 10,
                    width: DevWidth / 2.3,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 50,
                    borderColor: colors.seaBlue,
                    backgroundColor: colors.white,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <H9fontMediumBlack>{'8:30 AM - 9:30 AM'}</H9fontMediumBlack>
                  <View
                    style={{
                      height: 11,
                      width: 11,
                      borderColor: '#FF2D58',
                      borderWidth: 1,
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 5,
                        color: '#FF2D58',
                        fontFamily: 'bold',
                      }}>
                      X
                    </Text>
                  </View>
                </View>
              )}
            />
          </RowView>

          <RowView style={{flex: 1, paddingHorizontal: 16, paddingBottom: 10}}>
            <H15fontMediumBlack>{'Time Slots - Thursday'}</H15fontMediumBlack>
            <TouchableOpacity
              onPress={() => setModalOpen(true)}
              style={{flexDirection: 'row'}}>
              <EditIcon
                name="edit"
                size={17}
                color={'black'}
                style={{paddingRight: 3, paddingTop: 3}}
              />
              <H15fontMediumBlack>{'Edit'}</H15fontMediumBlack>
            </TouchableOpacity>
          </RowView>
          <RowView style={{flex: 1, paddingBottom: 10, paddingHorizontal: 16,}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                // paddingLeft: 20,
                flexWrap: 'wrap',
                width: DevWidth/1.07,
                justifyContent: 'space-between'
              }}
              data={[{}, {}]}
              renderItem={({item, index}) => (
                <View
                  style={{
                    marginRight: 10,
                    width: DevWidth / 2.3,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 50,
                    borderColor: colors.seaBlue,
                    backgroundColor: colors.white,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <H9fontMediumBlack>{'8:30 AM - 9:30 AM'}</H9fontMediumBlack>
                  <View
                    style={{
                      height: 11,
                      width: 11,
                      borderColor: '#FF2D58',
                      borderWidth: 1,
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 5, color: '#FF2D58'}}>X</Text>
                  </View>
                </View>
              )}
            />
          </RowView>
        </ScrollView>

        <Modal visible={modalOpen} transparent={true} animationType={'fade'}>
          <ScrollView>
          <View
            style={{
              // flex: 1,
              minHeight: DevHeight,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(100, 100, 100, 0.5)',
            }}>
              <View
                style={{
                  // minHeight: modalHeight,
                  width: DevWidth/1.1,
                  backgroundColor: '#fff',
                  paddingTop: 20,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    paddingHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: 10,
                  }}>
                  <H15fontMediumBlack>Edit Time Slots</H15fontMediumBlack>
                  <TouchableOpacity
                    onPress={() => setModalOpen(false)}
                    style={{
                      height: 17,
                      width: 17,
                      borderRadius: 17,
                      backgroundColor: '#A0A0A0',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff', bottom: 3}}>x</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{height: 1, backgroundColor: '#ced4da', width: DevWidth/1.1}}
                />

                <View style={{padding: 15}}>
                  <H9fontMediumBlack>Start Time</H9fontMediumBlack>
                    <View style={styles.dropDownStyle}>
                      <Dropdown
                        placeholder='-'
                        style={[
                          styles.dropdown,
                          isFocus && {backgroundColor: '#fff'},
                        ]}
                        fontFamily={fontFamily.fontRegular}
                        iconStyle={styles.iconStyle}
                        data={timeSlotStart}
                        labelField="label"
                        valueField="value"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setTimeStart(item.value);
                          setIsFocus(false);
                        }}
                        value={timeslotstart}
                      />
                    </View>
                    <H9fontMediumBlack>End Time</H9fontMediumBlack>
                    <View style={styles.dropDownStyle}>
                      <Dropdown
                        placeholder='-'
                        style={[
                          styles.dropdown,
                          isFocus && {backgroundColor: '#fff'},
                        ]}
                        fontFamily={fontFamily.fontRegular}
                        iconStyle={styles.iconStyle}
                        data={timeSlotEnd}
                        labelField="label"
                        valueField="value"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setTimeEnd(item.value);
                          setIsFocus(false);
                        }}
                        value={timeslotend}
                      />
                    </View>
                </View>
                
                <View style={{paddingHorizontal: 15}}>
                  <FlatList
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{}}
                      data={time}
                      renderItem={({item, index}) => (
                        <View>
                            <H9fontMediumBlack>Start Time</H9fontMediumBlack>
                            <View style={styles.dropDownStyle}>
                              <Dropdown
                                placeholder='-'
                                style={[
                                  styles.dropdown,
                                  isFocus && {backgroundColor: '#fff'},
                                ]}
                                fontFamily={fontFamily.fontRegular}
                                iconStyle={styles.iconStyle}
                                data={timeSlotEnd}
                                labelField="label"
                                valueField="value"
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                  // alert(index)
                                  // setTimeS(item.value);
                                  time[index].starttime = item;
                                  // setIsFocus(false);
                                }}
                                value={item.starttime}
                              />
                            </View>
                            <H9fontMediumBlack>End Time</H9fontMediumBlack>
                            <View style={styles.dropDownStyle}>
                              <Dropdown
                                placeholder='-'
                                style={[
                                  styles.dropdown,
                                  isFocus && {backgroundColor: '#fff'},
                                ]}
                                fontFamily={fontFamily.fontRegular}
                                iconStyle={styles.iconStyle}
                                data={timeSlotEnd}
                                labelField="label"
                                valueField="value"
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                  // setTimeE(item.value);
                                  // setIsFocus(false);
                                  time[index].endtime = item;
                                }}
                                value={item.endtime}
                              />
                            </View>
                            <TouchableOpacity
                              onPress={() => removeItem(index)}
                              style={{
                                height: 38,
                                backgroundColor: '#dc3545',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                marginBottom: 15
                              }}>
                              <DeleteIcon
                                name="delete"
                                size={14}
                                color={'white'}
                              />
                            </TouchableOpacity>
                          </View>
                      )}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => addTime()}
                    style={{flexDirection: 'row', paddingHorizontal: 15, paddingBottom: 15}}>
                    <AddIcon
                      name="add-circle"
                      size={18}
                      color={'#777'}
                      style={{paddingRight: 3}}
                    />
                    <H9fontRegularGray>Add More</H9fontRegularGray>
                  </TouchableOpacity>

                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => setModalOpen(false)}
                      style={{
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#0d6efd',
                        borderRadius: 5,
                        marginBottom: 20
                      }}>
                      <H14fontRegularWhite>Save Changes</H14fontRegularWhite>
                    </TouchableOpacity>
                  </View>

              </View>
          </View>
          </ScrollView>
        </Modal>
      </MainContainer>
    </Fragment>
  );
};

export default ScheduleTimings;
const styles = StyleSheet.create({
  dropDownStyle: {
    height: 40,
    // width: DevWidth/1.5,
    borderColor: '#CFCFCF',
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  dropdown: {
    height: 38,
    // paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  iconStyle: {
    width: 0,
    height: 0,
  },
});