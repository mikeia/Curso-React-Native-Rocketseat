import { useState } from 'react';
import {styles} from './style'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import { Participant } from '../../components/Participant';


export function Home(){
    const [participant,setParticipant] = useState<string []>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
        //console.log('Você clicou no botao adicionar')
        if(participant.includes(participantName)){
            return Alert.alert("Adicionar participante","Este participante ja foi adicionado")        
        }
        //Adicionar participante no state, usando o preventState adiciona Thamires na segunda posição 
        //mantendo Joao
        setParticipant(preventState => [...preventState,participantName]);
        setParticipantName('');
    }
//no sim dessa função pega o setParticipant() verifica o estado do array com o prevenState
//que retorna o array com dados atuais, passando no preventState um filtro do array de participants
//seta o array participant retornando apenas os participantes que seja diferente de name, que  foi clicado
    function handleRemoveParticipant(name :string){
        Alert.alert("Remover",`Deseja remover o participante ${name} ?`,[
            { 
              text:'Sim', 
              onPress: () => 
                setParticipant(prevenState => 
                    prevenState.filter(participant => 
                        participant !== name ))
            },
            {
              text:'Não',
              style:'cancel'
            }
        ])  
  
         console.log(`Você clicou em remover o participante ${name}`)  
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 28 de outubro de 2022</Text>

            <View style={styles.form}>
                <TextInput 
                   style={styles.input} 
                   placeholder='Nome do participante' 
                   placeholderTextColor='#6b6b6b'
                   onChangeText={setParticipantName} 
                   value={participantName}    
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>   

            <FlatList
                keyExtractor={item => item}
                data={participant}
                renderItem={({item})=>(
                    <Participant 
                     key={item}
                     name={item}
                     onRemove={()=>handleRemoveParticipant(item)}
                     />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyComponent}>
                        Não chegou ningue ainda para o evento? adicione novos participantes!
                    </Text>                
                )}
            /> 
           </View>
           
                      
    );
}