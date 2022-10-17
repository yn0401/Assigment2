import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ route, navigation }) => {
  const item = route.params.item
  const [itemTitle, setItemTitle] = useState(item.title);
  const [itemDesc, setItemDesc] = useState(item.description);
  const [itemCost, setItemCost] = useState(item.cost);
  console.log(itemTitle,itemDesc,itemCost)

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='DETAIL' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>{itemTitle}</Text>
        <Text category='s1'>{itemDesc}</Text>
        <Text category='h2'>{itemCost}</Text>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

})