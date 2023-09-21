import React, {Fragment, useState, useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {GeneralProps} from '../../interfaces/generalProps';
import {Route, useIsFocused} from '@react-navigation/native';
import {NavBarPatient} from '../../common/commonComponents';
import {MainContainer} from '../../components/commonViews';
import {SegmentControl} from '../../components/segmentControl';
import DoctorOverView from './doctorOverview';
import LocationView from './location';
import Reviews from './reviews';
import HoursView from './hours';
import {ButtonFull} from '../../components/commonButton';
import {labels} from '../../utils/labels';
import {segments} from '../../utils/constant';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}

const DoctorProfile: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<
    'OverView' | 'Location' | 'Reviews' | 'Hours'
  >('OverView');
  const isFocused = useIsFocused();
  useEffect(() => {
    selectedTab == 'OverView';
  }, [isFocused]);
  return (
    <Fragment>
      <MainContainer>
        <ScrollView>
          <NavBarPatient title={'Doctor - Profile'} />
          <ScrollView horizontal={true}>
          <SegmentControl
            tabs={segments}
            defaultTab={selectedTab}
            onTabChanged={(
              tab: 'OverView' | 'Location' | 'Reviews' | 'Hours',
            ) => {
              setSelectedTab(tab);
            }}
          />
          </ScrollView>
          {selectedTab == 'OverView' ? <DoctorOverView /> : null}
          {selectedTab == 'Location' ? <LocationView /> : null}
          {selectedTab == 'Reviews' ? <Reviews /> : null}
          {selectedTab == 'Hours' ? <HoursView /> : null}
        </ScrollView>
        <ButtonFull
          disabled={false}
          funCallback={() => {}}
          label={labels.bookAppoinitment}
          style={{marginVertical: 0}}
        />
      </MainContainer>
    </Fragment>
  );
};
export default DoctorProfile;
