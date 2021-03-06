import React, {useState, useContext, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {UserContext} from '../Context/Context';

const Signup = ({navigation}) => {
  const {mainColor} = useContext(UserContext);
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [nickname, setNickname] = useState('');

  const [IDCheckMsg, setIDCheckMsg] = useState('');
  const [passwordRight, setPasswordRight] = useState(''); //비밀번호가 일치하는지 아닌지 출력
  const [nicknameCheckMsg, setNicknameCheckMsg] = useState('');

  const [IDCheck, setIDCheck] = useState(''); //이메일 중복 확인 완료 상태 임시 저장
  const [passwordCheck, setPasswordCheck] = useState(''); //비밀번호 중복 확인 완료 상태 임시 저장
  const [nicknameCheck, setNicknameCheck] = useState(''); //닉네임 중복 확인 완료 상태 임시 저장

  const [msgColor, setMsgColor] = useState(''); //passwordRight TextColor
  const [checkPasswordBoxColor, setCheckPasswordBoxColor] = useState('#aaaaaa');

  const IDChecking = str => {
    var regExp = /^[A-za-z0-9]{4,16}$/g;
    return regExp.test(str) ? true : false;
  };

  const IDCheckingFunction = () => {
    if (IDChecking(ID) === false) {
      Alert.alert(
        '아이디는 영문 또는 숫자를 사용하여 4자리 이상, 16자리 이하여야 합니다.',
      );
      setID('');
      setIDCheckMsg('');
    } else {
      fetch('http://3.38.85.251:8080/api/checkLoginId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          check: ID,
        }),
      })
        .then(response => response.json())
        .then(json => {
          if (json.data === true) {
            Alert.alert('이미 사용중인 아이디입니다.');
          } else {
            setIDCheckMsg('사용 가능한 아이디입니다.');
            Alert.alert('사용 가능한 아이디입니다.');
            setIDCheck(ID);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  const passwordChecking = str => {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    return regExp.test(str) ? true : false;
  };

  const passwordCheckingFunction = () => {
    if (!passwordChecking(password)) {
      Alert.alert(
        '비밀번호는 영문, 숫자를 혼합하여 8자리 이상, 16자리 이하여야 합니다.',
      );
      setPassword('');
      setRepassword('');
      setPasswordRight('');
    } else if (password === repassword) {
      setPasswordCheck(password);
      setPasswordRight('비밀번호가 일치합니다.');
      setMsgColor('#295eba');
      setCheckPasswordBoxColor('#aaaaaa');
    } else {
      setPasswordRight('비밀번호가 일치하지 않습니다.');
      setMsgColor('red');
      setCheckPasswordBoxColor('red');
    }
  };

  const nicknameChecking = str => {
    var regExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,7}$/;
    return regExp.test(str) ? true : false;
  };

  const nicknameCheckingFunction = () => {
    if (!nicknameChecking(nickname)) {
      Alert.alert(
        '닉네임은 한글, 영문, 숫자만 가능하며 2자리 이상, 8자리 이하여야 합니다.',
      );
      setNickname('');
      setNicknameCheckMsg('');
    } else {
      fetch('http://3.38.85.251:8080/api/checkNickName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          check: nickname,
        }),
      })
        .then(response => response.json())
        .then(json => {
          if (json.data === true) {
            Alert.alert('이미 사용중인 닉네임입니다.');
          } else {
            Alert.alert('사용 가능한 닉네임입니다.');
            setNicknameCheck(nickname);
            setNicknameCheckMsg('사용 가능한 닉네임입니다.');
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  const signupCheckingFunction = () => {
    if (
      ID === IDCheck &&
      password === repassword &&
      repassword === passwordCheck &&
      nickname === nicknameCheck &&
      IDCheckMsg === '사용 가능한 아이디입니다.' &&
      passwordRight === '비밀번호가 일치합니다.' &&
      nicknameCheckMsg === '사용 가능한 닉네임입니다.'
    ) {
      fetch('http://3.38.85.251:8080/api/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: ID,
          nickname: nickname,
          password: password,
          point: 0,
        }),
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
        })
        .catch(e => {
          console.log(e);
        });
      Alert.alert('차박린이', '회원가입을 축하드려요!');
      navigation.navigate('Login');
    } else {
      Alert.alert('입력된 정보를 다시 확인해주세요.');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginRight: 15}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{height: 30, width: 30, marginBottom: 10}}
            source={require('../Assets/Images/back.png')}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Text style={{marginTop: '10%', fontSize: 15}}>아이디</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.Text}
            placeholder={'영문, 숫자 사용 4~16자리'}
            autoCapitalize="none"
            autoCorrect={false}
            allowFontScaling={false}
            placeholderTextColor="#777777"
            clearButtonMode={'while-editing'}
            onChangeText={text => {
              setID(text);
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: mainColor,
              marginTop: 5,
              marginLeft: 16,
              borderRadius: 8,
              width: 80,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              IDCheckingFunction();
            }}>
            <Text style={{color: 'white'}}>중복 검사</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: '10%', fontSize: 15}}>비밀번호</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.Text}
            autoCapitalize="none"
            autoCorrect={false}
            allowFontScaling={false}
            secureTextEntry={true}
            placeholder={'영문, 숫자 혼합 8~16자리'}
            placeholderTextColor="#777777"
            clearButtonMode={'while-editing'}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: '10%', fontSize: 15}}>비밀번호 확인</Text>
          <Text
            style={{
              marginTop: '10%',
              marginLeft: '10%',
              fontSize: 15,
              color: msgColor,
              fontWeight: 'bold',
            }}>
            {passwordRight}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              width: '50%',
              height: 40,
              paddingLeft: 10,
              borderBottomWidth: 2,
              borderBottomColor: '#aaaaaa',
              marginTop: 5,
              borderBottomColor: checkPasswordBoxColor,
            }}
            autoCapitalize="none"
            autoCorrect={false}
            allowFontScaling={false}
            secureTextEntry={true}
            placeholder={'비밀번호 재입력'}
            placeholderTextColor="#777777"
            clearButtonMode={'while-editing'}
            onChangeText={text => {
              setRepassword(text);
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: mainColor,
              marginTop: 5,
              marginLeft: 16,
              borderRadius: 8,
              width: '25%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              passwordCheckingFunction();
            }}>
            <Text style={{color: 'white'}}>비밀번호 확인</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: '10%', fontSize: 15}}>닉네임</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.Text}
            autoCapitalize="none"
            autoCorrect={false}
            allowFontScaling={false}
            placeholder={'한글, 영문, 숫자 2~8자리'}
            placeholderTextColor="#777777"
            clearButtonMode={'while-editing'}
            onChangeText={text => {
              setNickname(text);
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: mainColor,
              marginTop: 5,
              marginLeft: 16,
              borderRadius: 8,
              width: '20%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              nicknameCheckingFunction();
            }}>
            <Text style={{color: 'white'}}>중복 검사</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 50,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: mainColor,
            borderRadius: 8,
            width: 130,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            signupCheckingFunction();
          }}>
          <Text style={{color: 'white', fontSize: 20}}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    width: '50%',
    height: 40,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#aaaaaa',
    marginTop: 5,
  },
});
export default Signup;
