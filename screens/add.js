import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const AddScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='ADD' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>ADD</Text>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

})