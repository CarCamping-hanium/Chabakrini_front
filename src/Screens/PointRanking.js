import React, {useLayoutEffect, useState, useEffect, useContext} from 'react';
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
} from 'react-native';
import {UserContext} from '../Context/Context';

const screenWidth = Dimensions.get('window').width;

const PointRanking = ({navigation}) => {
  const [rankingList, setRankingList] = useState();
  const [listLength, setListLength] = useState();
  const [rankNumber, setRankNumber] = useState([]);
  const [myRank, setMyRank] = useState();

  const {mainColor, userInfo} = useContext(UserContext);

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
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 15}}
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Image
            style={{height: 30, width: 30, marginBottom: 10}}
            source={require('../Assets/Images/Home.png')}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const getRankingInfo = () => {
    fetch('http://3.38.85.251:8080/api/ranking', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setRankingList(json.data);
        setListLength(json.data.length);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRankingInfo();
    console.log('rankingList : ', rankingList);
    console.log('listLength : ', listLength);
    rank_num_function();
    setRankNumber(list);
  }, [listLength]);

  useEffect(() => {
    getMyRank();
  }, []);

  let list = [1]; //순위가 담길 배열. 처음 사람은 1위 고정
  let temp = 0; //공동 순위 동안 누적될 순위
  let rank_number = 1; //실제 표시될 순위

  //공동 순위 구현함수
  const rank_num_function = () => {
    //for문으로 리스트 전체 탐색하면서 이전 인덱스랑 점수가 같으면 순위 그대로 유지하고 temp(누적되는 순위) 1 증가
    //다르면 누적된 만큼 +해서 순위 출력 후 temp=0으로 초기화
    for (let i = 1; i < listLength; i++) {
      if (rankingList[i].score === rankingList[i - 1].score) {
        list.push(rank_number);
        temp += 1;
      } else {
        rank_number += 1 + temp;
        list.push(rank_number);
        temp = 0;
      }
    }
  };

  const getMyRank = () => {
    fetch('http://3.38.85.251:8080/api/myRank', {
      method: 'GET',
      headers: {
        token: userInfo.token,
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('myrank : ', json);
        setMyRank(json.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <FlatList
        data={rankingList}
        keyExtractor={(item, index) => {
          return `pointHistory-${index}`;
        }}
        renderItem={({item, index}) => (
          <View
            style={{
              width: screenWidth / 1.2,
              height: 60,
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 8,
              borderColor: mainColor,
              borderWidth: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                  borderRightWidth: 2,
                  borderColor: mainColor,
                  height: 56,
                  width: 70,
                  backgroundColor:
                    rankNumber[index] === 1
                      ? '#ffd700'
                      : rankNumber[index] === 2
                      ? '#c0c0c0'
                      : rankNumber[index] === 3
                      ? '#c49c48'
                      : 'white',
                }}>
                <Text
                  style={{
                    fontSize: 24,
                  }}>
                  {rankNumber[index]}위
                </Text>
              </View>
              <Text style={{marginLeft: 30, fontSize: 20}}>
                {item.nickname}
              </Text>
              <Text style={{position: 'absolute', right: 30, fontSize: 20}}>
                {item.score}포인트
              </Text>
            </View>
          </View>
        )}
      />
      <View
        style={{
          width: screenWidth / 1.2,
          height: 60,
          justifyContent: 'center',
          borderRadius: 8,
          borderColor: mainColor,
          borderWidth: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              borderRightWidth: 2,
              borderColor: mainColor,
              height: 56,
              width: 70,
              backgroundColor:
                myRank === 1
                  ? '#ffd700'
                  : myRank === 2
                  ? '#c0c0c0'
                  : myRank === 3
                  ? '#c49c48'
                  : 'white',
            }}>
            <Text
              style={{
                fontSize: 24,
              }}>
              {myRank}위
            </Text>
          </View>
          <Text style={{marginLeft: 30, fontSize: 20}}>
            {userInfo.nickname}
          </Text>
          <Text style={{position: 'absolute', right: 30, fontSize: 20}}>
            {userInfo.point}포인트
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PointRanking;
