import React from 'react';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';



export const HomeScreen = ({ navigation }) => {

  const navigateViewAll = () => {
    navigation.navigate('ViewAll');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='HOME' alignment='center' />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Layout style={styles.header}>
          <Text style={styles.headerTitle}>
            God Valley Of Sneakers
          </Text>
        </Layout>
        <Layout style={styles.main}>
          <Image
            style={styles.imageLogo}
            source={require("../assets/sneaker.png")}
          />
        </Layout>
        <Layout style={{ flexDirection: "row", alignItems: "center", padding: 5, marginTop: 36 }}>
          <Text style={{  fontWeight: "bold", textAlign: "center" }}>
            THƯƠNG HIỆU 
          </Text>
        </Layout>
        <Layout style={{ flexDirection: "row", alignItems: "center", padding: 5  }}>
          <Text style={{  fontWeight: "bold", textAlign: "center" }}>
             - CHẤT LƯỢNG -
          </Text>
        </Layout>
        <Layout style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
          <Text style={{  fontWeight: "bold", textAlign: "center" }}>
            UY TÍN HÀNG ĐẦU 
          </Text>
          
        </Layout>
        <Layout style={styles.footer}>
          <Button onPress={navigateViewAll} style={styles.btn} >VIEW MORE</Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: 384,
    height: 300,
    padding: 30,
    alignItems: 'center',
    // justifyContent: "center",
  },
  headerTitle: {
    fontSize: 45,
    textAlign: "left",
    fontWeight: "bold"
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    width: 400,
    height: 400,
    resizeMode: "contain"
  },
  footer: {
    flex: 1,
    justifyContent: 'center'

  },
  btn: {
    backgroundColor: '#222b45',
  }
})