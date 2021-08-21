import React, {useContext, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserContext} from '../Context/Context';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {NavigationHelpersContext} from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Login = ({navigation}) => {
  const {login} = useContext(UserContext);
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          style={{
            width: screenWidth / 2,
            height: screenWidth / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../Assets/Images/app_icon.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 300,
          backgroundColor: 'white',
        }}>
        <TextInput
          style={{
            width: '60%',
            height: 40,
            paddingLeft: 16,
            borderRadius: 4,
            //backgroundColor: '#a6bbde',
            backgroundColor: '#cccccc',
          }}
          selectionColor="black"
          autoCapitalize="none"
          autoCorrect={false}
          allowFontScaling={false}
          placeholder="이메일"
          placeholderTextColor="#777777"
        />
        <TextInput
          style={{
            width: '60%',
            height: 40,
            paddingLeft: 16,
            borderRadius: 4,
            backgroundColor: '#cccccc',
            marginTop: 8,
          }}
          selectionColor="black"
          autoCapitalize="none"
          autoCorrect={false}
          allowFontScaling={false}
          placeholder="비밀번호"
          placeholderTextColor="#777777"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            marginTop: 8,
            width: '30%',
            height: 40,
            paddingLeft: 16,
            borderRadius: 4,
            backgroundColor: '#295eba',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            login('ijh1205@naver.com', 'password');
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', marginRight: 10}}>
            로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('회원가입');
          }}>
          <Text style={{marginTop: 8, textDecorationLine: 'underline'}}>
            아직 회원이 아니신가요?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
