import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  View,
  Linking,
  Alert,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const MyChabakjiInfo = ({navigation}) => {
  const [image, setImage] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 15}}
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../Assets/Images/Home.png')}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <ScrollView
        style={{
          marginTop: '5%',
          marginHorizontal: 20,
          width: screenWidth,
        }}>
        <FlatList
          style={{height: screenWidth, width: screenWidth}}
          horizontal={true}
          pagingEnabled={true}
          data={image}
          keyExtractor={(item, index) => {
            return `image-${index}`;
          }}
          renderItem={({item, index}) => (
            <View>
              <Image
                source={{uri: image[index]}}
                style={{width: screenWidth, height: screenWidth}}
              />
            </View>
          )}
        />
        <View style={{paddingRight: 140}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '10%',
              marginLeft: 30,
            }}>
            위치
          </Text>
          <Text style={styles.content}>
            경상남도 거제시 일운명 구조오리 500-1
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '10%',
              marginLeft: 30,
            }}>
            설명
          </Text>
          <Text style={styles.content}>
            경상남도 거제에 위치한 차박 명소경상남도 거제에 위치한 차박 명소
            경상남도 거제에 위치한 차박 명소 경상남도 거제에 위치한 차박 명소
            경상남도 거제에 위치한 차박 명소경상남도 거제에 위치한 차박 명소
            경상남도 거제에 위치한 차박 명소 경상남도 거제에 위치한 차박 명소
            경상남도 거제에 위치한 차박 명소 경상남도 거제에 위치한 차박 명소
            경상남도 거제에 위치한 차박 명소
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '10%',
              marginLeft: 30,
            }}>
            근처 편의시설 (선택사항)
          </Text>
          <Text style={styles.content}>화장실, 편의점 ,주차장, 카페</Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '10%',
              marginLeft: 30,
            }}>
            관련 영상 링크 (선택사항)
          </Text>
          <Text
            onPress={() => Linking.openURL('https://www.youtube.com')}
            style={styles.videoLink}>
            www.youtube.com
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={styles.Delete}
            onPress={() => {
              Alert.alert('이 차박지를 삭제하시겠습니까?', '', [
                {
                  text: '삭제',
                  onPress: () => {
                    Alert.alert('차박지가 삭제되었습니다.');
                    navigation.navigate('MyChabakji');
                  },
                },
                {
                  text: '취소',
                },
              ]);
            }}>
            <Text style={{color: 'white', fontSize: 20}}>차박지 삭제</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    width: '90%',
    height: 40,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  content: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 10,
    marginLeft: 30,
    width: screenWidth - 60,
  },
  videoLink: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 10,
    marginLeft: 30,
    width: screenWidth - 60,
    textDecorationLine: 'underline',
  },
  Delete: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e64f49',
    borderRadius: 8,
  },
});

export default MyChabakjiInfo;