import React from 'react';
import * as eva from '@eva-design/eva';

// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text, View, TextInput, TouchableOpacity, FlatList 
}
    from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteAllTodos } from '../redux/action';


// const HomeScreen = () => (
//     <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text category='h1'>HOME</Text>
//     </Layout>
// );


export default function MyTodo() {
    // return (
    //     <ApplicationProvider {...eva} theme={eva.dark}>
    //         <HomeScreen />
    //     </ApplicationProvider>
    // );

    const [task, setTask] = React.useState('');
    const todoList = useSelector(state => state.todos);
    const dispatch = useDispatch();


    const handleAddTodo = () => {
        dispatch(addTodo(task))
        setTask('')
    }
    const handleDeleteAllTodos = () => {
        dispatch(deleteAllTodos(task))
        setTask('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>React Native ToDo App with Redux Persist </Text>
            <Text style={styles.title}> Add ToDo Here</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Task"
                value={task}
                onChangeText={task => setTask(task)}
            />
            <TouchableOpacity style={styles.btn} onPress={handleAddTodo}>
                <Text style={styles.btnText}>
                    ADD NEW
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleDeleteAllTodos}>
                <Text style={styles.btnText}>
                    DELETE ALL
                </Text>
            </TouchableOpacity>
            <FlatList
                data={todoList}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <Text key={item.id} style={styles.list}>{item.task}</Text>
                    );
                }}
            />
            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 10,
        alignItems: 'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '90%',
    },
    btn: {
        backgroundColor: '#d81b60',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    btnText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '500'
    }
});