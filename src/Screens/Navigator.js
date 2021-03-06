import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {UserContext} from '../Context/Context';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';

import Login from './Login';
import Signup from './Signup';
import ChabakjiEnrollment from './ChabakjiEnrollment';
import HomeScreen from './HomeScreen';
import MyPage from './MyPage';
import MyReview from './MyReview';
import MyChabakji from './MyChabakji';
import ModifyPassword from './ModifyPassword';
import ModifyNickname from './ModifyNickname';
import AllChabakjiList from './AllChabakjiList';
import ChabakjiList from './ChabakjiList';
import ReviewBoard from './ReviewBoard';
import ReviewUpload from './ReviewUpload';
import ReviewInfo from './ReviewInfo';
import Gyeonggi from './ChabakjiLocation/Gyeonggi';
import Gangwon from './ChabakjiLocation/Gangwon';
import Chungcheong from './ChabakjiLocation/Chungcheong';
import Gyeongsang from './ChabakjiLocation/Gyeongsang';
import Jeolla from './ChabakjiLocation/Jeolla';
import ChabakjiInfo from './ChabakjiInfo';
import MyReviewInfo from './MyReviewInfo';
import MyChabakjiInfo from './MyChabakjiInfo';
import MyPointHistory from './MyPointHistory';
import PointRanking from './PointRanking';
import CheckChabakji from './CheckChabakji';
import WaitingChabakjiInfo from './WaitingChabakjiInfo';
import CustomerService from './CustomerService';
import Notice from './Notice';
import NoticeInfo from './NoticeInfo';
import ReportedReviewList from './ReportedReviewList';
import ReportedReviewInfo from './ReportedReviewInfo';
import NoticeUpload from './NoticeUpload';
import EditChabakji from './EditChabakji';
import CheckEditedChabakji from './CheckEditedChabakji';
import EditedChabakjiInfo from './EditedChabakjiInfo';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenHeight = Dimensions.get('window').height;

const LoginNavigator = ({navigation}) => {
  const {mainColor} = useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '?????????',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 10,
            },
            headerStyle: {backgroundColor: mainColor},
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: '????????????',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 10,
            },
            headerBackTitleVisible: false,
            headerStyle: {backgroundColor: mainColor},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreenNavigator = navigation => {
  const {area, chabak_name, review_name, mainColor} = useContext(UserContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '????????? ???????????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
        }}
      />
      <Stack.Screen
        name="Gyeonggi"
        component={Gyeonggi}
        options={{
          title: '?????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Gangwon"
        component={Gangwon}
        options={{
          title: '?????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Chungcheong"
        component={Chungcheong}
        options={{
          title: '?????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Gyeongsang"
        component={Gyeongsang}
        options={{
          title: '?????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Jeolla"
        component={Jeolla}
        options={{
          title: '?????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AllChabakjiList"
        component={AllChabakjiList}
        options={{
          title: '????????? ??????  :  ' + area,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ChabakjiList"
        component={ChabakjiList}
        options={{
          title: '????????? ??????  :  ' + area,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ChabakjiInfo"
        component={ChabakjiInfo}
        options={{
          title: chabak_name,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ReviewBoard"
        component={ReviewBoard}
        options={{
          title: chabak_name + '??? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ReviewUpload"
        component={ReviewUpload}
        options={{
          title: '?????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ReviewInfo"
        component={ReviewInfo}
        options={{
          title: review_name,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ChabakjiEnrollmentNavigator = () => {
  const {mainColor} = useContext(UserContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChabakjiEnrollment"
        component={ChabakjiEnrollment}
        options={{
          title: '????????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
        }}
      />
    </Stack.Navigator>
  );
};

const MyPageNavigator = navigation => {
  const {
    chabak_name,
    waiting_name,
    review_name,
    notice_name,
    Review_name,
    mainColor,
  } = useContext(UserContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: '?????? ?????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
        }}
      />
      <Stack.Screen
        name="MyPointHistory"
        component={MyPointHistory}
        options={{
          title: '????????? ?????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="PointRanking"
        component={PointRanking}
        options={{
          title: '????????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="MyReview"
        component={MyReview}
        options={{
          title: '?????? ????????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="MyChabakji"
        component={MyChabakji}
        options={{
          title: '?????? ????????? ?????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="MyChabakjiInfo"
        component={MyChabakjiInfo}
        options={{
          title: chabak_name,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="EditChabakji"
        component={EditChabakji}
        options={{
          title: '????????? ?????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="MyReviewInfo"
        component={MyReviewInfo}
        options={{
          title: review_name,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ModifyNickname"
        component={ModifyNickname}
        options={{
          title: '????????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ModifyPassword"
        component={ModifyPassword}
        options={{
          title: '???????????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="CheckChabakji"
        component={CheckChabakji}
        options={{
          title: '????????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="WaitingChabakjiInfo"
        component={WaitingChabakjiInfo}
        options={{
          title: waiting_name,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="CheckEditedChabakji"
        component={CheckEditedChabakji}
        options={{
          title: '????????? ?????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="EditedChabakjiInfo"
        component={EditedChabakjiInfo}
        options={{
          title: waiting_name,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ReportedReviewList"
        component={ReportedReviewList}
        options={{
          title: '????????? ?????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ReportedReviewInfo"
        component={ReportedReviewInfo}
        options={{
          title: Review_name,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Notice"
        component={Notice}
        options={{
          title: '????????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="NoticeInfo"
        component={NoticeInfo}
        options={{
          title: '????????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="NoticeUpload"
        component={NoticeUpload}
        options={{
          title: '???????????? ??????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="CustomerService"
        component={CustomerService}
        options={{
          title: '????????????',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          headerStyle: {backgroundColor: mainColor},
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const {logout} = useContext(UserContext);
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => {
            return (
              <DrawerContentScrollView>
                <DrawerItemList {...props} />
                <View style={{marginTop: screenHeight / 1.5}}>
                  <TouchableOpacity
                    onPress={() => {
                      logout();
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          marginHorizontal: 16,
                          width: 24,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../Assets/Images/logout.png')}
                          style={{
                            width: 24,
                            height: 24,
                          }}></Image>
                      </View>
                      <Text style={{color: '#505050'}}>????????????</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </DrawerContentScrollView>
            );
          }}>
          <Drawer.Screen name="????????? ??????" component={HomeScreenNavigator} />
          <Drawer.Screen
            name="????????? ??????"
            component={ChabakjiEnrollmentNavigator}
          />
          <Drawer.Screen name="?????? ?????????" component={MyPageNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default () => {
  const {userInfo} = useContext(UserContext);
  console.log(userInfo);

  return userInfo ? <MainNavigator /> : <LoginNavigator />;
};
