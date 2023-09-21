import { screenName } from "./screenName";

import BrainIcon from '../../assets/images/brain.svg';
import DentistIcon from '../../assets/images/dentist.svg';
import CardiologyIcon from '../../assets/images/cardiology.svg';
import KidneysIcon from '../../assets/images/kidneys.svg';

import Feature1 from '../../assets/images/features/feature-01.svg';
import Feature2 from '../../assets/images/features/feature-02.svg';
import Feature3 from '../../assets/images/features/feature-03.svg';
import Feature4 from '../../assets/images/features/feature-04.svg';

import Patient1 from '../../assets/images/patients/patient1.svg';
import Patient2 from '../../assets/images/patients/patient2.svg';
import Patient3 from '../../assets/images/patients/patient3.svg';
import Patient4 from '../../assets/images/patients/patient4.svg';
import SmileIcon from '../../assets/images/smile.svg';

import StarIcon from '../../assets/images/star.svg';
import StethoscopeIcon from '../../assets/images/stethoscope.svg';
import PurseIcon from '../../assets/images/purse.svg';

import FacebookIcon from '../../assets/images/facebook-circle.svg';
import TwitterIcon from '../../assets/images/twitter.svg';
import GooglePlusIcon from '../../assets/images/google-plus-circle.svg';
import LinkedinIcon from '../../assets/images/linkedin.svg';
import InstagramIcon from '../../assets/images/instagram.svg';


export const dayOptions = [
  {name: 'Mo', no: 10},
  {name: 'Tu', no: 11},
  {name: 'We', no: 12},
  {name: 'Th', no: 13},
  {name: 'Fr', no: 14},
  {name: 'Sa', no: 15},
  {name: 'Su', no: 16},
];

//schedule timings
export const days = [
  {name: 'Sun'},
  {name: 'Mon'},
  {name: 'Tue'},
  {name: 'Wed'},
  {name: 'Thu'},
  {name: 'Fri'},
  {name: 'Sat'},
];

//doctor profile
export const segments = ['OverView', 'Location', 'Reviews', 'Hours'];

//location
export const menuOptions = [
  {Img: Feature1},
  {Img: Feature2},
  {Img: Feature3},
  {Img: Feature4},
];

//patient appointment
export const segment = [
  'Appointments',
  'Prescriptions',
  'Medical Records',
  'Billing',
];

//patient profile
export const patientsegments = [
  'OverView',
  'Appointments',
  'Prescriptions',
  'Medical Records',
  'Billing',
];

//basic info
export const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
];

//book appointment
export const tab = [
  {name: 'Time and Date'},
  {name: 'Checkout'},
  {name: 'Payment'},
];

//chatList
export const chatArray = [
  {
    name: 'Bernadette Carol',
    Img: Patient1,
    content: 'Lorem Ipsum is simply dummy ',
    date: '09:25 AM',
    active: true,
    noofmessage: null,
    message: 'read',
    Icon: SmileIcon,
  },
  {
    name: 'Gabrielle',
    Img: Patient2,
    content: 'Contrary to popular belief...',
    date: 'Mar 27, 2020',
    active: false,
    noofmessage: null,
    message: 'notread',
    Icon: null,
  },
  {
    name: 'Connor Dan',
    Img: Patient3,
    content: 'There are many variations ',
    date: '12:15 PM',
    active: true,
    noofmessage: 2,
    message: 'notread',
    Icon: null,
  },
  {
    name: 'Harry Ian',
    Img: Patient4,
    content: 'Lorem Ipsum is simply dummy ',
    date: '09:25 AM',
    active: false,
    noofmessage: null,
    message: 'notread',
    Icon: SmileIcon,
  },
];

//dashboard
export const menu = [
  {Img: KidneysIcon, name: 'Urology'},
  {Img: BrainIcon, name: 'Neurology'},
  {Img: CardiologyIcon, name: 'Cardiology'},
  {Img: DentistIcon, name: 'Dentist'},
  {Img: KidneysIcon, name: 'Urology'},
  {Img: BrainIcon, name: 'Neurology'},
  {Img: CardiologyIcon, name: 'Cardiology'},
  {Img: DentistIcon, name: 'Dentist'},
];

//invoice view
export const tableHead = ['Description', 'Quantity', 'VAT', 'Total'];
export const tableTitle = ['General Consultation ', '1', '$0', '$100'];
export const tableData = ['Video Call Booking ', '1', '$0', '$520'];

//pages
export const menuBarOptions = [
  {name: 'Search Doctor',screenName:screenName.SearchDoctor},
  {name: 'Doctor Dashboard',screenName:screenName.DoctorDashBoard},
  {name: 'Doctor Profile',screenName:screenName.DoctorProfile},
  {name: 'Doctor Schedule Timings',screenName:screenName.ScheduleTimings},
  {name: 'favourites',screenName:screenName.FavouritesScreen},
  {name: 'Profile Settings',screenName:screenName.ProfileSettings},
  {name: 'Appointments',screenName:screenName.PatientAppointments},
  {name: 'Patient profile Settings',screenName:screenName.ProfileSettings},
  {name: 'Patients List',screenName:screenName.MyPatient},
  {name: 'Patient Profile',screenName:screenName.PatientProfile},
  {name: 'Patient Date Time',screenName:screenName.BookAppointment},
  {name: 'Booking Success',screenName:screenName.BookingSuccess},
  {name: 'invoices',screenName:screenName.InvoiceList},
  {name: 'Invoice View',screenName:screenName.InvoiceView},
  {name: 'Chat',screenName:screenName.ChatList},
  {name: 'Chat View',screenName:screenName.ChatView},
  {name: 'Voice Call',screenName:screenName.VoiceCall},
  {name: 'Video Call',screenName:screenName.VideoCall},
];

export const menuOptionsAuth = [
  {name: 'Login',screenName:screenName.SignInScreen},
  {name: 'Register',screenName:screenName.SignUpScreen},
  {name: 'Forgot Password',screenName:screenName.ForgotPassword},
  {name: 'Change Password',screenName:screenName.ChangePassword},
];

//profile settings
export const profilesegments = [
  'Basic Info',
  'About Me',
  'Clinic Info',
  'Contact Details',
  'Pricing & Services',
  'Education & Experience',
  'Awards & Memberships',
  'Registrations',
];

//search doctor
export const searchMenuOptions = [
  {Img: StarIcon, name: 'Rating'},
  {Img: StethoscopeIcon, name: 'Stethoscope'},
  {Img: PurseIcon, name: 'Purse'},
  {Img: StarIcon, name: 'Rating'},
  {Img: StethoscopeIcon, name: 'Stethoscope'},
  {Img: PurseIcon, name: 'Purse'},
];

//social media
export const socialMediaMenuOptions = [
  {Img: FacebookIcon, name: 'Facebook'},
  {Img: TwitterIcon, name: 'Twitter'},
  {Img: GooglePlusIcon,name: 'Google Plus'},
  {Img: LinkedinIcon, name: 'Linkedin'},
  {Img: InstagramIcon, name: 'Instagram'},
];

export const genderOptions = [
  {name: 'Male', type: 'm', isSelected: false},
  {name: 'Fem...', type: 'f', isSelected: false},
];

export const specialistOptions = [
  {name: 'Urology', isSelected: false},
  {name: 'Cardiology', isSelected: false},
  {name: 'Dentist', isSelected: false},
  {name: 'Neurology', isSelected: false},
  {name: 'Orthologist', isSelected: false},
  {name: 'Gynaecology', isSelected: false},
];


export const dateFormats = {
    sender: 'YYYY-MM-DD',
    reciever: 'DD-MM-YYYY',
  };
 

  export const sidemenuDetails=[
    {name:"Dashboard",screenName:screenName.DashBoardScreen,iconName:"view-dashboard",iconsType:"CommunityIcons"},
    {name:"Appointments",screenName:screenName.PatientAppointments,iconName:"date-range",iconsType:"MaterialIcons"},
    {name:"My Patients",screenName:screenName.MyPatient,iconName:"person",iconsType:"IonicIcons"},
    {name:"Schedule Timings",screenName:screenName.ScheduleTimings,iconName:"access-time",iconsType:"MaterialIcons"},
    {name:"Invoices",screenName:screenName.InvoiceList,iconName:"insert-drive-file",iconsType:"MaterialIcons"},
    {name:"Pages",screenName:screenName.Pages,iconName:"pages",iconsType:"MaterialIcons"},
    {name:"Message",screenName:screenName.ChatList,iconName:"message",iconsType:"MaterialIcons"},
    {name:"Profile Settings",screenName:screenName.ProfileSettings,iconName:"settings",iconsType:"MaterialIcons"},
    {name:"Social Media",screenName:screenName.SocialMedia,iconName:"share",iconsType:"MaterialIcons"},
    {name:"Change Password",screenName:screenName.ChangePassword,iconName:"lock-open",iconsType:"MaterialIcons"},
]

//schedule timing
export const timeSlotStart = [
  {label: '12:00 am', value: '1'},
  {label: '12:30 am', value: '2'},
  {label: '01:00 am', value: '3'},
  {label: '01:30 am', value: '4'},
]

export const timeSlotEnd = [
  {label: '12:00 am', value: '1'},
  {label: '12:30 am', value: '2'},
  {label: '01:00 am', value: '3'},
  {label: '01:30 am', value: '4'},
];
