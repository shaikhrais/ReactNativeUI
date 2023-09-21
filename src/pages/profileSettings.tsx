import React, {Fragment, useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {GeneralProps} from '../interfaces/generalProps';
import {Route, useIsFocused} from '@react-navigation/native';
import {NavBarPatient} from '../common/commonComponents';
import {MainContainer} from '../components/commonViews';
import {SegmentControl} from '../components/segmentControl';
import BasicInfo from './profileSettings/basicInfo';
import AboutMe from './profileSettings/aboutMe';
import ClinicInfo from './profileSettings/clinicInfo';
import ContactDetails from './profileSettings/contactDetails';
import Pricing from './profileSettings/pricing';
import Education from './profileSettings/education';
import Awards from './profileSettings/awards';
import Registrations from './profileSettings/registraction';
import {profilesegments} from '../utils/constant';
import { colors } from '../utils/colors';

interface Props extends GeneralProps {
  route: Route<string, object | undefined>;
}
const ProfileSettings: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<
    | 'Basic Info'
    | 'About Me'
    | 'Clinic Info'
    | 'Contact Details'
    | 'Pricing & Services'
    | 'Education & Experience'
    | 'Awards & Memberships'
    | 'Registrations'
  >('Basic Info');
  const isFocused = useIsFocused();
  useEffect(() => {
    selectedTab == 'Basic Info';
  }, [isFocused]);
  return (
    <Fragment>
      <MainContainer style={{backgroundColor:colors.background}}>
        <ScrollView>
          <NavBarPatient title={'Profile Settings'} />
          <ScrollView horizontal={true}>
            <SegmentControl
              tabs={profilesegments}
              defaultTab={selectedTab}
              onTabChanged={(
                tab:
                  | 'Basic Info'
                  | 'About Me'
                  | 'Clinic Info'
                  | 'Contact Details'
                  | 'Pricing & Services'
                  | 'Education & Experience'
                  | 'Awards & Memberships'
                  | 'Registrations',
              ) => {
                setSelectedTab(tab);
              }}
            />
          </ScrollView>
          {selectedTab == 'Basic Info' ? <BasicInfo /> : null}
          {selectedTab == 'About Me' ? <AboutMe /> : null}
          {selectedTab == 'Clinic Info' ? <ClinicInfo /> : null}
          {selectedTab == 'Contact Details' ? <ContactDetails /> : null}
          {selectedTab == 'Pricing & Services' ? <Pricing /> : null}
          {selectedTab == 'Education & Experience' ? <Education /> : null}
          {selectedTab == 'Awards & Memberships' ? <Awards /> : null}
          {selectedTab == 'Registrations' ? <Registrations /> : null}
        </ScrollView>
      </MainContainer>
    </Fragment>
  );
};
export default ProfileSettings;
