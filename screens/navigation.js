import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home';
import { DetailsScreen } from './detail';
import { ViewAllScreen } from './viewall';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from '../custom-theme.json'; // <-- Import app theme
import { AddScreen } from './add';


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Details' component={DetailsScreen} />
        <Screen name="ViewAll" component={ViewAllScreen}/>
        <Screen name="Add" component={AddScreen}/>
    </Navigator>
);

export const AppNavigator = () => {

    return (
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
            <NavigationContainer>
                <HomeNavigator />
            </NavigationContainer>
        </ApplicationProvider>

    );
}

