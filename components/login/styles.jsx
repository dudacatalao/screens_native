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
        color: '#a53860'
    },
    box:{
        width: '100%',
        height: 37,
        borderRadius:10,
        padding: 10,
        backgroundColor: '#ffa5ab',
        fontSize: 16,
        color: '#fff',
        marginTop: 20,
        
    },
    botao: {
        backgroundColor: '#a53860',
        padding: 10,
        width: 270,
        marginTop: 20,
        height: 37,
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
    },
    square:{
        backgroundColor:'#f9dbbd',
        padding:50,
        alignItems: 'center',
        borderRadius: 15
    }
    

})

export default styles