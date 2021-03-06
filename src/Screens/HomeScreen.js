import React, {useLayoutEffect, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '../Context/Context';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {
  const {mainColor, selectedArea} = useContext(UserContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 25}}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Image
            source={require('../Assets/Images/Menu.png')}
            style={{marginBottom: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../Assets/Images/main_map.png')}
        style={{width: screenWidth, height: screenHeight}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: screenWidth / 4,
          top: '20%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          selectedArea('경기도');
          navigation.navigate('Gyeonggi');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          경기도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: screenWidth / 3.6,
          top: '15%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          selectedArea('강원도');
          navigation.navigate('Gangwon');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          강원도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: screenWidth / 3.5,
          top: '40%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          selectedArea('충청도');
          navigation.navigate('Chungcheong');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          충청도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: screenWidth / 5,
          bottom: '50%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          selectedArea('경상도');
          navigation.navigate('Gyeongsang');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          경상도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: screenWidth / 4,
          bottom: '40%',
          borderRadius: 8,
          backgroundColor: '#295eba',
        }}
        onPress={() => {
          selectedArea('전라도');
          navigation.navigate('Jeolla');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 5,
          }}>
          전라도
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: '30%',
          bottom: '8%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: mainColor,
          //backgroundColor: '#3770d4',
          width: 170,
          height: 60,
          borderRadius: 30,
        }}
        onPress={() => {
          selectedArea('전체');
          navigation.navigate('AllChabakjiList');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          전체 리스트 열기
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
