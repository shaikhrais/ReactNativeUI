import React, { Fragment, useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { GeneralProps } from '../interfaces/generalProps';
import { Route } from '@react-navigation/native';
import { NavBarPatient } from '../common/commonComponents';
import { SmallButtonSuccess } from '../components/commonButton';
import { labels } from '../utils/labels';
import { colors } from '../utils/colors';
import Modal from "react-native-modal";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { CardSurface, CommonLineDotted, CommonLineView, MainContainer, RowView } from '../components/commonViews';
import { H9fontMediumBlack, H15fontMediumBlack, H14fontRegularBlackk, H14fontRegularBlack, H14fontRegularBlue, H14fontRegularGray, H14fontRegularWhite, H7fontRegularWhite, H8fontRegularWhite, H8fontRegularBlack } from '../components/commonText';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { screenName } from '../utils/screenName';
import { DevWidth } from '../utils/device';
import { searchMenuOptions } from '../utils/constant';
import {_testDoctorDetails} from '../utils/mockDetails';
import DoctorDetailsCard from '../components/doctorComponents';
import DoctorFilter from '../components/doctorFilter';
import FilterIcon from '../../assets/images/filter.svg';
import { ml10, pt5 } from '../common/commonStyles';

interface Props extends GeneralProps {
    route: Route<string, object | undefined>;
}
const SearchDoctor: React.FC<Props> = ({ navigation, route }): JSX.Element => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <Fragment>
            <MainContainer>
                    <NavBarPatient title={labels.searchByDr} />
                    <View style={{ backgroundColor: 'white', padding: 10 }}>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {searchMenuOptions.map(({Img, name}) => {
                                return (
                                    <TouchableOpacity style={{
                                        margin: 3, height: 37, borderWidth: 1, borderColor: '#D5D5D5D5', backgroundColor: '#fff', borderRadius: 30, paddingRight: 10, flexDirection: 'row'
                                    }}
                                        onPress={() => { toggleModal() }}>
                                        <CardSurface style={{
                                            borderRadius: 25,
                                            height: 25,
                                            width: 25,
                                            backgroundColor: colors.white,
                                            marginLeft: 7,
                                            marginVertical: 5,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Img height={15} width={16}/>
                                        </CardSurface>
                                        <H14fontRegularGray style={{ alignSelf: 'center', marginLeft: 5 }}>{name}</H14fontRegularGray>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                        <H14fontRegularGray style={{ paddingTop: 15 }}>{"16525 matches found for : "}</H14fontRegularGray>
                        <H15fontMediumBlack>{"Dental specialist In Bangalore"}</H15fontMediumBlack>
                    </View>
                    
                    <FlatList
                    data={_testDoctorDetails}
                    contentContainerStyle={[ml10, pt5]}
                    renderItem={({item, index})=>{
                       return <DoctorDetailsCard
                                page={'search'}
                                details={item}
                            bookAnAppointment={() => {
                                navigation.navigate(screenName.BookAppointment);
                            }}
                            drProfileNavigation={() => {
                                navigation.navigate(screenName.DoctorProfile);
                            }}
                            />
                    }}
                    
                    />
                    <View style={styles.sortByImageStyle}>
                        <FilterIcon />
                    </View>

                    <DoctorFilter modalClose={()=>{setModalVisible(false)}}  modalVisible={isModalVisible}/>
            </MainContainer>
           
        </Fragment>
    )
}
export default SearchDoctor;
const styles = StyleSheet.create({
    datePickerStyle: {
        width: 230,
    },
    sortByImageStyle:{ height: 100, width: 100, alignSelf: 'flex-end', marginRight: 10 ,position:"absolute",bottom:0}
});