import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Divider,
    Icon,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
    Avatar,
    ListItem,
    Button,
    List
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';


const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
    cost: '7000$'
});

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);



const ItemImage = (props) => (
    <Avatar
        {...props}
        shape='square'
        style={[props.style, { tintColor: null, padding: 50 }]}
        source={{ uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAYHAwUBAv/EADUQAAEDAwIEBAIIBwAAAAAAAAEAAgMEBREGIRIxQVETInGBFGEHFTJTcpHB8EJSgpKisbL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEBQP/xAAmEQEAAgIBAgQHAAAAAAAAAAAAAQIDERIhMQQyQZEFE1FhwdHw/9oADAMBAAIRAxEAPwDYkRFZUREQEREBERAREQEREBERAREQEUS53GmtdIamscWxBwblrSTkrtS1ENXTsqKaQSRSDLXDqo3G9LcbceWujqiIpVEREBERAREQUTUeq6ywa1p6Spa91BUxNMQGOE74I/FnrnqArnT11JUwCeCpidH/ADcQ29eyxzXErdS6hqJHTOENNmnpuHGAAfM755dn2DeyqtcLjSOEFXUSvicPK5shw/169lnpkrN5rWf77NmfBlw4IyZadPSY17T+2o/SJrC1vt0tooJo6qokIL3sdlkQac/aHN22MD37GFpm+V9pqWxU8YuFskMRndCSfAL+bgByIHFlp3PATgbE07SmnZr1UOlkkFLb6YZnqXYDWDGSATtnHsOZ6A2yOjotQT8FriZa7BQMLKi4EcL5283Ak8+/m75PRq9JpXly9WSniMvy5pHln0afR1lNX0zKmiqIqiB/2JYnhzXehC7rJbRPc7fHV3HTjGR2iBzvGq5ISG1GG4a58ZfvggZLMO3zgnyq12v6QbRVYjrS+lkyR4jmHw3/ADB5gddwMK+4RXcreiiU10t9U0Opq+lmB+7maf1UppDhlpBHcKdp0+oiIgUO4VXgcEYPC6T+LtuBt89wpT2NkaWPGWnmFXrnp+SombLEQ18ZPhOikLHMz07EbDY5BxyUW3romFQn0HNDvaawSsHKOY4c35ZGx/IKDUaXuk8Xg1NvkcAchzZGHfuCCrTI3VlAQ2C0suMLQAMzxRPx65x/iOQUiKuvDxmq0pc2u6+HPSvGfUyhYp8PO9w6dfiWXhNLRFon6qpUWDU1Rbae2Np2iggcCadro4jLvyc4E5Oc78PPfBK53eWpdLSUd7ttXZdO04BdHAwzNcRv5nsyPf35na7F1cdxY7k3PTjpx/qVfWyXEb/Vlxj36+Ef+Xn9+2PevOO/Vz8vG87rHH3/ACzLU2qDdI4qalaKezwY+GpmHHH2c759u3qvCbXMJHG0tPcFaxW22gqXcVZpqWZ/V3wALicdx+/0ifVttpgHU+iKidw5AULBv/W4K3fvCkzeOlJ1DMjVwPcGiRrnk7RhvmcewXpWuzale5tbQwzW5rDxCplJgAPTAPmdnlgA5zhaTRO1E8mKg01DaIfvJpIif7GOGPzPorBabS+B3xNyl+KqwfJI858P8IADW88ZAz3JVqxrtCL87+aXqMLixpeMOIGR2K/SIrgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/2Q==" }}
    />
);

export const ViewAllScreen = ({ navigation }) => {

    const InstallButton = (props) => (

        <Button size='medium' style={styles.btn} onPress={navigateDetail}>
            DETAIL
        </Button>


    );

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    const navigateDetail = () => {
        navigation.navigate('Details');
    };

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title} ${index + 1}`}
            description={`${item.cost}`}
            accessoryLeft={ItemImage}
            accessoryRight={InstallButton}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='OUR PRODUCTS' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={styles.main}>
                <List
                    style={styles.container}
                    data={data}
                    ItemSeparatorComponent={Divider}
                    renderItem={renderItem}
                />
            </Layout>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    btn: {
        backgroundColor: '#222b45',
    },
    container: {
        flex: 1
    }


})