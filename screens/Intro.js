import React from "react";
import { useFonts } from "expo-font";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AppLoading from "expo-app-loading";

const Wrapper = styled.View`
  background-color: #FFFCF9;
  // background-color: red;

  align-items: center;
  // justify-content: center;
  height: 100%;
  width: 100%;
`

const IdentityWrapper = styled.View`
  height: 25%;
  width: 100%;
  padding: 0 15%;
  justify-content: flex-end;

  // background-color: red;
`
const AppType = styled.Text`
  font-size: 16px;
  font-weight: bold;

`
const AppName = styled.Text`
  font-size: 36px;
  font-weight: bold;
`
const AppDescr = styled.Text`
  font-size: 12px;
`

const ImgWrapper = styled.View`
  height: 30%;
  width: 100%;
  padding: 0 15%;
  align-items: center;
  justify-content: flex-end;

  // background-color: red;
`

const NaviWrapper = styled.View`
  height: 35%;
  width: 100%;
  padding: 10%;
  align-items: center;
  justify-content: space-between;
  // background-color: red;
`
const NaviMent = styled.Text`
  font-size: 12px;
  font-weight: bold;
`
const NaviButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;  

  width: 297px;
  height: 64px;
  border-radius: 24px;
  
  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: 6,
  };
  shadow-opacity: 0.39;
  shadow-radius: 0.30;
  elevation: 11;

  background-color: white;
`
const TheaterType = styled.Text`
  font-size: 14px;
  font-weight: bold;
`

const SogangWrapper = styled.View`
  height: 10%;
  width: 100%;
  padding: 0 15%;
  align-items: center;
  justify-content: center;

  // background-color: red;
`

const Intro = ({ navigation: { navigate } }) => {

  const [loadedfonts] = useFonts({
    Helvetica: require('../assets/fonts/Helvetica.ttf')
  })

  if(!loadedfonts)
    return <AppLoading/>

  return(
    <Wrapper>
      <IdentityWrapper>
        <AppType>메리홀 장비 대출 관리 앱</AppType>
        <AppName style={{ fontFamily: "Helvetica" }}>Marypeople</AppName>
        <AppDescr>복잡한 대출/반납 현황 확인, 수량 관리를 한번에!</AppDescr>
      </IdentityWrapper>

      <ImgWrapper>
        <Image source={require('../assets/img/holding-phone.png')}/>
      </ImgWrapper>

      <NaviWrapper>
        <NaviMent>어느 극장의 장비를 관리하시나요?</NaviMent>
        <NaviButton onPress={()=>navigate("EquipList")}><TheaterType>대극장</TheaterType></NaviButton>
        <NaviButton onPress={()=>navigate("EquipList")}><TheaterType>소극장</TheaterType></NaviButton>
      </NaviWrapper>

      <SogangWrapper>
        <Image source={require('../assets/img/sogang_univ.png')}/>
      </SogangWrapper>
    </Wrapper>
  )
}

export default Intro;