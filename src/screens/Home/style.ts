import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#131016',
      flex:1,
      padding: 24
    },
    eventName:{
        marginTop:48,
        fontSize: 24,
        color:'#FDFCFE',
        fontWeight: 'bold',
    },
    eventDate: {
        fontSize:16,
        color: '#6b6b6b',
    },
    form:{
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
        width: '100%',
    },
    input: {
        height: 56,
        fontSize:16,
        borderRadius:5,
        color: '#FFFFFF',
        backgroundColor: '#1F1E25',
        flex:1,
        marginRight: 8,
        paddingLeft:16
    },
    button: {
        backgroundColor:'#31CF67',
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
    listEmptyComponent: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
    }
})   