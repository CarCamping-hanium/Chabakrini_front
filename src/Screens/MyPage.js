import React, {useState, useContext, useLayoutEffect} from 'react';
import {UserContext} from '../Context/Context';
import Modal from '../Components/Modal';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const MyPage = ({navigation}) => {
  const {userInfo} = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [modifyVisible, setModifyVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  // const passwordCheckFunction = () => {
  //   fetch('http://3.36.28.39:8080/api/member/update/password', {
  //     //서버로 아이디, 비번 보내서 일치하는지 확인
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: id_data,
  //       password: password_data,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(json => {})
  //     .catch(e => console.log(e));
  //   if (password === '1234') {
  //     navigation.navigate('ModifyMember');
  //   } else {
  //     Alert.alert('비밀번호를 다시 확인해주세요.');
  //   }
  // };
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyPointHistory');
        }}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: 8,
            borderColor: '#295eba',
            padding: 10,
          }}>
          내 포인트 : {userInfo.point}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 35,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#295eba',
            width: 130,
            height: 50,
            borderRadius: 8,
            marginHorizontal: 10,
          }}
          onPress={() => {
            setModifyVisible(true);
          }}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            회원 정보 수정
          </Text>
        </TouchableOpacity>
        <Modal visible={modifyVisible}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 200,
              width: 300,
              borderColor: '#295eba',
              borderWidth: 3,
              borderRadius: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                top: 40,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#295eba',
                  width: 120,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  marginRight: 20,
                }}
                onPress={() => {
                  setModifyVisible(false);
                  navigation.navigate('ModifyNickname');
                }}>
                <Text style={{color: 'white', fontSize: 18}}>닉네임 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#295eba',
                  width: 120,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}
                onPress={() => {
                  setModifyVisible(false);
                  navigation.navigate('ModifyPassword');
                }}>
                <Text style={{color: 'white', fontSize: 18}}>
                  비밀번호 변경
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{position: 'absolute', bottom: 20}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#295eba',
                  width: 100,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => {
                  setModifyVisible(false);
                }}>
                <Text style={{color: 'white', fontSize: 18}}>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#295eba',
            width: 130,
            height: 50,
            borderRadius: 8,
          }}
          onPress={() => {
            navigation.navigate('MyReview');
          }}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            내가 쓴 리뷰 확인
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../Assets/Images/mypage_background.png')}
        style={{width: screenWidth, height: screenWidth, marginTop: '15%'}}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e64f49',
            width: 130,
            height: 50,
            borderRadius: 8,
          }}
          onPress={() => {
            setDeleteVisible(true);
          }}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>회원 탈퇴</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={deleteVisible}>
        <View
          style={{
            height: 300,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 3,
            borderColor: '#295eba',
          }}>
          <Text style={{marginTop: 30, fontSize: 20}}>현재 비밀번호</Text>
          <TextInput
            style={styles.Text}
            autoCapitalize="none"
            autoCorrect={false}
            allowFontScaling={false}
            placeholder={'현재 비밀번호를 입력하세요.'}
            placeholderTextColor="#777777"
            clearButtonMode={'while-editing'}
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <View style={{flexDirection: 'row', marginTop: 60}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#e64f49',
                width: 100,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
              onPress={() => {}}>
              <Text style={{color: 'white', fontSize: 18}}>회원 탈퇴</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#295eba',
                width: 100,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginLeft: 25,
              }}
              onPress={() => {
                setDeleteVisible(false);
              }}>
              <Text style={{color: 'white', fontSize: 18}}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: '#295eba',
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    marginTop: 15,
  },
});

export default MyPage;
