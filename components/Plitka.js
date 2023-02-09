import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Plitka = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.Item}>
                    <View style={styles.sty}>
                        <Text style={styles.textstyle}>{props.text}</Text>
                            <View style={styles.balanceContainer}>
                                <Text style={styles.balanceStyle}>{props.balance}</Text>
                                    <View style={styles.balanceContainer1}>
                                        <Text style={styles.watherStyle}>{props.subtitle}</Text>
                                    </View>
                            </View>
                    </View>
            </View>
        </TouchableOpacity>
    )
} 


const styles = StyleSheet.create({

    Item: {
        width: 160,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 25,
    },

    balanceContainer: {
        //alignItems: 'center',
        paddingVertical: '5%'
    },

    balanceContainer1: {
        //alignItems: 'center',
        paddingVertical: '5%'
    },

    balanceStyle: {
        fontWeight: 'bold',
        fontSize: 40,
    },

    watherStyle: {
        fontSize: 15,
        color: 'gray'
    },

    text: {
        maxWidth: '80%',
    },

    sty: {
       paddingHorizontal: 20,
       paddingVertical: 10,
       
    },

    textstyle: {
        fontSize: 20,
        color: 'black'
    }
   
}); 



export default Plitka; 