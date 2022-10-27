import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#1F1E25',
        alignItems: 'center',
        marginBottom: 10
    },
    name:{
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    button: {
      backgroundColor:'#E23A44',
      width:56,
      height:56,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    buttonText: {       
        fontSize:16,
        color:'#FFF'
    },
});