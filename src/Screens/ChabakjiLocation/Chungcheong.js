import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';
import Modal from '../../Components/Modal';
import {UserContext} from '../../Context/Context';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Chungcheong = ({navigation}) => {  
  const {userInfo} = useContext(UserContext);
  const {selectedArea} = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [LocationList, setLocationList] = useState([]);
  const [LocationLength, setLocationLength] = useState();
  
  const getChabakLocation = () => {
    fetch('http://3.36.28.39:8080/api/camping/map', {
      method: 'GET',
      headers: {
        token: userInfo.token,
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json.data)
        setLocationList(json.data);
        setLocationLength(json.data.length);
     
     
      })
      .catch(e => {
        console.log(e);
      });
      
  };
  useEffect(() => {
    getChabakLocation();
    selectedArea('충청도');

  }, []);
  const P0 = {latitude: 37.54585425908, longitude: 128.2605803183507};

  return (
    <SafeAreaView>   
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        //showsMyLocationButton={true}
        center={{...P0, zoom: 7}}
        //onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        //onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
        //onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
      >  
 {LocationList.map((val) => {console.log(val.lng)
  return (
  <Marker
          coordinate={{latitude:val.lat,longitude:128.2605803183507}}
          pinColor="blue"
          onClick={() => console.warn('onClick! p0')}
        />); 
 })}
      </NaverMapView>
      <TouchableOpacity
        style={styles.openList}
        onPress={() => {
          navigation.navigate('ChabakjiList');
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          리스트 열기
        </Text>
      </TouchableOpacity>
      <Modal visible={visible}>
        <View
          style={{
            height: 500,
            width: 330,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: '#295eba',
            borderWidth: 3,
            borderRadius: 10,
          }}>
          <View //차박지명 컴포넌트
            style={{
              marginTop: screenHeight / 30,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              (차박지명)
            </Text>
          </View>
          <View //사진 및 설명 컴포넌트
            style={{flex: 1, alignItems: 'flex-start'}}>
            <Image
              source={require('../../Assets/Images/car.png')}
              style={{
                width: 250,
                height: 200,
                marginTop: screenHeight / 50,
              }}
            />
            <Text style={styles.modalDescription}>위치</Text>
            <Text style={{marginTop: 3}}>(위치)</Text>
            <Text style={styles.modalDescription}>근처 편의시설</Text>
            <Text style={{marginTop: 3}}>(편의시설)</Text>
          </View>
          <View //버튼 컴포넌트
            style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.modalInfo}
              onPress={() => {
                navigation.navigate('ChabakjiInfo');
                setVisible(false);
              }}>
              <Text style={{color: 'white', fontSize: 20}}>상세 정보</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => {
                setVisible(false);
              }}>
              <Text style={{color: 'white', fontSize: 20}}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  openList: {
    position: 'absolute',
    left: '30%',
    bottom: '8%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#295eba',
    //backgroundColor: '#3770d4',
    width: '40%',
    height: 50,
    borderRadius: 30,
  },
  modalInfo: {
    backgroundColor: '#295eba',
    width: screenWidth / 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: screenHeight / 30,
  },
  modalClose: {
    backgroundColor: '#295eba',
    width: screenWidth / 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: screenHeight / 30,
    marginLeft: screenWidth / 15,
  },
  modalDescription: {
    fontSize: 18,
    marginTop: screenHeight / 50,
  },
});
export default Chungcheong;
