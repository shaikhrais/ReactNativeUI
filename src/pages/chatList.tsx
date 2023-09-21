import React, {Fragment, useState} from 'react';
import {
  ScrollView,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {GeneralProps} from '../interfaces/generalProps';
import {Route} from '@react-navigation/native';
import {NavBar} from '../common/commonComponents';
import {
  CardSurface,
  CommonLineDotted,
  CommonSearch,
  MainContainer,
  RowView,
} from '../components/commonViews';
import {
  H15fontMediumBlack,
  H9fontRegularGray,
  H8fontRegularBlack,
} from '../components/commonText';
import {colors} from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {screenName} from '../utils/screenName';
import {chatArray} from '../utils/constant';
import {
  alignItemsCenter,
  alignItemsRight,
  alignSelfCenter,
  flexRow,
  justyfyCenter,
  pl10,
  pl30,
  pt5,
} from '../common/commonStyles';
import ChatIcon from '../../assets/images/chat-icon.svg'
import Chat from '../../assets/images/chat.svg';
import GreenTick from '../../assets/images/green-tick.svg';
import GrayTick from '../../assets/images/gray-tick.svg';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const ChatList: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const [search, setSearch] = useState('');

  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBar title={'Chat'} />
          <View style={styles.chatBodyContainer}>
            <View style={styles.chatBody}>
              <RowView>
                <View style={flexRow}>
                  <Chat height={20} width={20} />
                  <H8fontRegularBlack style={pl10}>
                    {'Chat List'}
                  </H8fontRegularBlack>
                </View>
                <H8fontRegularBlack>{'128 Users'}</H8fontRegularBlack>
              </RowView>
              <CommonLineDotted />
              <CommonSearch style={styles.searchContainer}>
                <Icon name="search" size={17} color={'black'} style={{}} />
                <TextInput
                  value={search}
                  onChangeText={text => setSearch(text)}
                  style={{}}
                />
              </CommonSearch>

              {chatArray.map(({name, Img, content, date, active, noofmessage, message, Icon}) => {
                         return (

               <CardSurface style={styles.cardTouchableStyle}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(screenName.ChatView as any)
                  }>
                  <RowView>
                    <View style={styles.cardStyle}>
                      <View style={styles.profileImageStyle}>
                        <Img height={50} width={50}/>
                      </View>
                      <View
                        style={[
                          {
                            backgroundColor:
                              active == false ? '#858585' : '#20c997',
                          },
                          styles.status,
                        ]}></View>
                    </View>
                    <RowView style={styles.detailsView}>
                      <View style={justyfyCenter}>
                        <H15fontMediumBlack>{name}</H15fontMediumBlack>
                        <RowView style={alignItemsCenter}>
                          {
                              message == 'read'
                                ? <GreenTick height={10} width={10}/>
                                : <GrayTick height={10} width={10}/>
                            }
                          <H9fontRegularGray style={styles.msgTxtSytyle}>
                            {content}
                          </H9fontRegularGray>
                          {Icon != null && (
                            <Icon height={10} width={10}/>
                          )} 
                        </RowView>
                      </View>
                      <View style={alignItemsRight}>
                        <H9fontRegularGray style={styles.dateTxtStyle}>
                          {date}
                        </H9fontRegularGray>
                        {noofmessage != null && (
                          <View style={styles.countStyle}>
                            <H9fontRegularGray style={styles.countTxt}>
                              {noofmessage}
                            </H9fontRegularGray>
                          </View>
                        )}
                      </View>
                    </RowView>
                  </RowView>
                </TouchableOpacity>
              </CardSurface>)
              })}

            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.messageIconsBtnStyle}>
          <ChatIcon height={80} width={80}/>
        </TouchableOpacity>
      </MainContainer>
    </Fragment>
  );
};
export default ChatList;

const styles = StyleSheet.create({
  chatBodyContainer: {
    marginTop: -100,
  },
  chatBody: {
    backgroundColor: colors.background,
    height: 500,
    borderRadius: 30,
    padding: 20,
  },
  chatListIcon: {
    height: 20,
    width: 20,
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  cardStyle: {
    borderRadius: 50,
    alignSelf: 'center',
  },
  profileImageStyle: {height: 50, width: 50, borderRadius: 50, overflow: 'hidden'},
  status: {
    borderWidth: 2,
    borderColor: colors.white,
    position: 'absolute',
    bottom: 3,
    right: -3,
    height: 15,
    width: 15,
    borderRadius: 10,
    elevation: 3
  },
  detailsView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 8,
    alignItems: 'center',
  },
  msgReadImageStyle: {
    height: 10,
    width: 10,
  },
  msgTxtSytyle: {
    fontSize: 11,
    paddingHorizontal: 4,
  },
  messageIconsBtnStyle: {
    bottom: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  msgBtnStyle: {
    height: 80,
    width: 80,
  },
  dateTxtStyle: {
    fontSize: 8,
    // paddingBottom:
    //   item.noofmessage != null ? 5 : 25,
  },
  countStyle: {
    height: 23,
    width: 23,
    backgroundColor: '#00DCB7',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countTxt: {
    color: 'white',
    fontSize: 10,
  },
  cardTouchableStyle: {
    marginTop: 10,
  },
});
