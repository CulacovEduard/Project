import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.Item}>
            <View style={styles.ItemLeft}>
                <View style={styles.sqare}></View>
                <Text style={styles.textstyle}>{props.text}</Text>
            </View>
        </View>
    )
} 


const styles = StyleSheet.create({

    Item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    ItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    sqare: {
        height: 24,
        width: 24, 
        backgroundColor: 'blue',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },

    text: {
        maxWidth: '80%',
    },

    textstyle: {
        fontSize: 15
    }

}); 



export default Task; 