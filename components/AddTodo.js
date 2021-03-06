import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Keyboard,
    Alert
} from 'react-native';

export default function AddTodo ({ submitHandler }) {
    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val);
    }
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button
                onPress={() => {
                    if(!text) {
                        Alert.alert('', 'Must be at least 1 (one) character long.')
                        return;
                    }
                    submitHandler(text);
                    Keyboard.dismiss();
                    setText('');
                }}
                title='add todo'
                color='coral'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});
