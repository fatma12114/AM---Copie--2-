import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Route from './Route'
import RoleScreen from "../screens/account/RoleScreen"
import RegisterScreen from '../screens/account/RegisterScreen'
import WelcomeScreen from '../screens/account/WelcomeScreen'
import LoginScreen2 from '../screens/account/LoginScreen2'
import ConnectionAccount from '../screens/account/ConnectionAccount'
import CodeMalade from '../screens/account/CodeMalade'
import DeclareProblem from '../screens/Problem/DeclareProblem'
import Register_proche from '../screens/account/Register_proche'
import HomeScreenProche from '../screens/account/HomeScreenProche'
import HomeScreenMalade from '../screens/account/HomeScreenMalade'
import UrgenceScreen1 from '../screens/Urgence/UrgenceScreen1'
import UrgenceScreen2 from '../screens/Urgence/UrgenceScreen2'
import UrgenceScreen3 from '../screens/Urgence/UrgenceScreen3'
import UrgenceScreen4 from '../screens/Urgence/UrgenceScreen4'
import Scan_code from '../screens/account/Scan_code'
import ChoixPilulier from '../screens/pilulier/ChoixPilulier'
import ConfigPilulier2 from '../screens/pilulier/ConfigPilulier2'
import AlimenterConfigurerPilulier from '../screens/pilulier/AlimenterConfigurerPilulier'
import ConfigRappelsUtiles from '../screens/Rappels/ConfigRappelsUtiles'
import RappelsUtiles from '../screens/Rappels/RappelsUtiles'
import Test from '../Test'
import NotificationsOublie from '../screens/Notifications/NotificationsOublie'
import NotificationsDone from '../screens/Notifications/NotificationsDone'
import NotificationsPending from '../screens/Notifications/NotificationsPending'
import RappelsEtPilulierDone from '../screens/Rappels/RappelsEtPilulierDone'
import RappelsEtPilulierOublie from '../screens/Rappels/RappelsEtPilulierOublie'
import RappelsEtPilulierPending from '../screens/Rappels/RappelsEtPilulierPending'
import LoginScreenMalade from '../screens/account/LoginScreenMalade'
import LoginScreenProche from '../screens/account/LoginScreenProche'
import Localisation from '../screens/Localisation/Localisation'
import InfoAdd from '../screens/account/InfoAdd'
import GP1 from '../screens/Gestion_profil/GP1'
import GP2 from '../screens/Gestion_profil/GP2'
import AjoutTraitement from '../screens/pilulier/AjoutTraitement'
import AjoutTraitement2 from '../screens/pilulier/AjoutTraitement2'
import ConfigJeux from '../screens/jeux/ConfigJeux'
import TraitementConfig1 from '../screens/pilulier/TraitementConfig1'
import Jeu1 from '../screens/jeux/Jeu1'
import Jeu3 from '../screens/jeux/Jeu3'
import Jeu2 from '../screens/jeux/Jeu2'
import Jeu4 from '../screens/jeux/Jeu4'
import Jeu5 from '../screens/jeux/Jeu5'
import Memo from '../screens/memories/Memo' 

import List from '../screens/Diary/List'
import Edit from '../screens/Diary/Edit'
import AjoutMemo from '../screens/AjoutMemo/AjoutMemo'
import DiaryScreen from '../screens/Diary/DiaryScreen'
import TraitementConfig2 from '../screens/pilulier/TraitementConfig2'
const Stack = createStackNavigator();

const GuestStack = () => {
  return (


    <Stack.Navigator  initialRouteName={Route.WELCOME} >


     
      <Stack.Screen name={Route.REGISTER_MALADE} component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name={Route.ROLE} component={RoleScreen} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LOGIN2} component={LoginScreen2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.CONNECTION} component={ConnectionAccount} options={{headerShown:false}}/>
      <Stack.Screen name={Route.CODE} component={CodeMalade} options={{headerShown:false}}/>
      <Stack.Screen name={Route.SCAN} component={Scan_code} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PROBLEM} component={DeclareProblem} options={{headerShown:false}}/>
      <Stack.Screen name={Route.REGISTER_PROCHE} component={Register_proche} options={{headerShown:false}}/>
      <Stack.Screen name={Route.HOME_PROCHE} component={HomeScreenProche} options={{headerShown:false}}/>
      <Stack.Screen name={Route.HOME_MALADE} component={HomeScreenMalade} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE1} component={UrgenceScreen1} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE2} component={UrgenceScreen2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE3} component={UrgenceScreen3} options={{headerShown:false}}/>
      <Stack.Screen name={Route.URGENCE4} component={UrgenceScreen4} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER1} component={ChoixPilulier} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER2} component={ConfigPilulier2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER5} component={AlimenterConfigurerPilulier} options={{headerShown:false}} />
      <Stack.Screen name={Route.RAPPELS1} component={ConfigRappelsUtiles} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELS3} component={RappelsUtiles} options={{headerShown:false}}/>
      <Stack.Screen name={Route.TEST} component={Test} options={{headerShown:false}}/>
      <Stack.Screen name={Route.NOTIFOUBLIE} component={NotificationsOublie} options={{headerShown:false}}/>
      <Stack.Screen name={Route.NOTIFDONE} component={NotificationsDone} options={{headerShown:false}}/>
      <Stack.Screen name={Route.NOTIFPENDING} component={NotificationsPending} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELSPILULIERDONE} component={RappelsEtPilulierDone} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELSPILULIEROUBLIE} component={RappelsEtPilulierOublie} options={{headerShown:false}}/>
      <Stack.Screen name={Route.RAPPELSPILULIERPENDING} component={RappelsEtPilulierPending} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LOGIN_MALADE} component={LoginScreenMalade} options={{headerShown:false}}/>
      <Stack.Screen name={Route.INFOADD} component={InfoAdd} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LOGIN_PROCHE} component={LoginScreenProche} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LOCALISER} component={Localisation} options={{headerShown:false}}/>
      <Stack.Screen name={Route.GP1} component={GP1} options={{headerShown:false}}/>
      <Stack.Screen name={Route.GP2} component={GP2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER4} component={AjoutTraitement} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER7} component={AjoutTraitement2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.GAMECONFIG} component={ConfigJeux} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER3} component={TraitementConfig1} options={{headerShown:false}}/>
      <Stack.Screen name={Route.PILULIER6} component={TraitementConfig2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.JEU1} component={Jeu1} options={{headerShown:false}}/>
      <Stack.Screen name={Route.JEU2} component={Jeu2} options={{headerShown:false}}/>
      <Stack.Screen name={Route.JEU3} component={Jeu3} options={{headerShown:false}}/>
      <Stack.Screen name={Route.JEU4} component={Jeu4} options={{headerShown:false}}/>
      <Stack.Screen name={Route.JEU5} component={Jeu5} options={{headerShown:false}}/>
      <Stack.Screen name={Route.MEMO} component={Memo} options={{headerShown:false}}/>
      <Stack.Screen name={Route.LIST} component={List} options={{headerShown:true}}/>
      <Stack.Screen name={Route.EDIT} component={Edit} options={{headerShown:true }}/>
      <Stack.Screen name={Route.DIARY} component={DiaryScreen} options={{headerShown:false }}/>
      <Stack.Screen name={Route.AJOUT_MEMO} component={AjoutMemo} options={{headerShown:false }}/>
    </Stack.Navigator>

  )
}

export default GuestStack