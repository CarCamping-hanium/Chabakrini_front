import React, {useContext, useLayoutEffect} from 'react';
import {UserContext} from '../Context/Context';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const MyPage = ({navigation}) => {
  const {logout} = useContext(UserContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 25}}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Image source={require('../Assets/Images/Menu.png')} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 80, marginTop: 50, fontSize: 20}}>
          내 포인트 : 50
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 35,
            backgroundColor: '#295eba',
            padding: 20,
          }}
          onPress={() => {
            navigation.navigate('내 리뷰 페이지');
          }}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            내가 쓴 리뷰 확인
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyPage;
