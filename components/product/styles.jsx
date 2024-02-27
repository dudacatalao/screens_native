import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#450920',
        justifyContent: 'center', 
        alignItems: 'center',      
        width: '100%',
        textAlign: 'center'      
    },
    title:{
        fontSize: 30,
        fontWeight:'bold',
        color: '#f9dbbd',
        textAlign: 'center'
    },
    box:{
        width: '70%',
        height: 37,
        borderRadius:10,
        padding: 10,
        backgroundColor: '#f0e6ef',
        fontSize: 20,
        color: '#fff',
        marginTop: 20,
        
    },
    botao: {
        backgroundColor: '#a53860',
        padding: 10,
        width: 270,
        marginTop: 20,
        height: 37,
        borderRadius:10,
    },
    textButton:{
        color: "white",
        fontSize: 15,
        textAlign: 'center'
    },
    boxbox:{
        width: '100%',
        textAlign: 'center',
        alignItems: 'center'
    }
    

})

export default styles