import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Button, TouchableOpacity } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import IonIcons from 'react-native-vector-icons/IonIcons'
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ route, navigation }) => {
  const item = route.params.item
  const [itemTitle, setItemTitle] = useState(item.title);
  const [itemDesc, setItemDesc] = useState(item.description);
  const [itemCost, setItemCost] = useState(item.cost);
  console.log(itemTitle, itemDesc, itemCost)

  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateViewAll = () => {
    navigation.navigate('ViewAll');
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='DETAIL' alignment='center' accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1 }}>
        <Layout style={styles.header}>
          <Image style={{ borderRadius: 110, marginLeft: 15, width: 350, height: 350, resizeMode: "contain" }} source={{ uri: 'http://saigonsneakerstore.com/thumbs/830x550x1/upload/product/3-6880.jpg' }} />
        </Layout>
        <Layout style={styles.content}>
          <Text style={{
            paddingLeft: 25,
            paddingTop: 10,
            fontSize: 32,
          }} category='h1'>{itemTitle}</Text>
        </Layout>
        <Layout style={styles.rating}>
          <IonIcons name='star' color='#FFCC00' size={36} />
          <IonIcons name='star' color='#FFCC00' size={36} />
          <IonIcons name='star' color='#FFCC00' size={36} />
          <IonIcons name='star' color='#FFCC00' size={36} />
          <IonIcons name='star-half' color='#FFCC00' size={36} />
          <Text style={{ marginLeft: 10, color: '#FFCC00', fontSize: 22, fontWeight: 'bold' }}> 4.8 </Text>
          <Text style={{ color: '#888888', fontSize: 16 }}> (272 Reviewer)</Text>
        </Layout>
        <Text style={{
          paddingLeft: 25,
          paddingTop: 10,
        }} category='h2'>{itemCost}</Text>
        <Layout style={styles.color}>
          <Text style={{ flexWrap: 'wrap', width: '80%', fontWeight: 'bold', fontSize: 16 }}  >{itemDesc}</Text>
          <Text style={{ letterSpacing: '3px', fontWeight: 'bold', fontSize: 16, marginTop: 30 }}  >COLORS AVAILABLE</Text>
          <Layout style={styles.row}>

            <Image
              style={styles.rowImg}
              source={{
                uri: "http://saigonsneakerstore.com/thumbs/1080x720x1/upload/product/52-9871.jpg",
              }}
            />
            <Image
              style={styles.rowImg}
              source={{
                uri: "http://saigonsneakerstore.com/thumbs/1080x720x1/upload/product/42-5125.jpg",
              }}
            />
            <Image
              style={styles.rowImg}
              source={{
                uri: "http://saigonsneakerstore.com/thumbs/1080x720x1/upload/product/1-3857.png",
              }}
            />
            <Image
              style={styles.rowImg}
              source={{
                uri: "http://saigonsneakerstore.com/thumbs/830x550x1/upload/product/3-6880.jpg",
              }} />
          </Layout>
         

        </Layout>
        <Layout style={{ flexDirection: 'row',  alignItems: 'center',
    justifyContent: 'center', marginTop: 15}}>
            <TouchableOpacity style={styles.btn}
              onPress={() => navigateViewAll()}      >
              <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}
              onPress={() => navigateViewAll()}      >
              <Text style={styles.btnText1}>DELETE</Text>
            </TouchableOpacity>
          </Layout>
      </Layout>
    </SafeAreaView>
  );
};
export default DetailsScreen;
const styles = StyleSheet.create({
  header: {
    paddingBottom: 10
  },
  content: {
    paddingBottom: 10
  },
  rating: {
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center',
  },
  color: {
    paddingLeft: 30,
    paddingTop: 10
  },
  row: {
    flexDirection: "row",
    paddingTop: 20
  },
  rowImg: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF9900',
    marginRight: 10,
    resizeMode: "contain",
  },
  btn: {
    backgroundColor: '#222b45',
    width: '40%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40 / 2,
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  btn1: {
    marginLeft: 10,
    backgroundColor: '#222b45',
    width: '40%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40 / 2,
  },
  btnText1: {
    color: '#FFF',
    fontWeight: 'bold'
  },
});