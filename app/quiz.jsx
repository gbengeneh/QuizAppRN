import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuizScreen = () => {
  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.category}>category</Text>
          <Text style={styles.progress}>  Question 1 of 5</Text>
       </View>

       <View style={styles.questionContainer}>
          <Text style={styles.question}> what is your name ?</Text>
       </View>

         <View style={styles.optionsContainer}>
            <Text style={styles.option}>option 1</Text>
            <Text style={styles.option}>option 2</Text>
            <Text style={styles.option}>option 3</Text>
            <Text style={styles.option}>option 4</Text>
         </View>

         <View style={styles.scoreContainer}>
            <Text style={styles.score}>Score : 0</Text>
         </View>
    </ScrollView>
  )
}

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    header:{
        marginTop:40,
        marginBottom:30,
    },
    category:{
        fontSize:24,
        color:'#333',
        fontWeight: 'bold',
       textAlign:'center'
    },
    progress:{
        fontSize:16,
        color:'#666',
        textAlign:'center',
        marginTop:5,
    },
    questionContainer:{
        marginBottom:30,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:4,
    },
    question:{
        fontSize:20,
        color:'#333',
        fontWeight:'600',
        textAlign:'center'
    },
    optionsContainer:{
        marginBottom:30,
    },
    option:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:10,
        fontSize:18,
        color:'#333',
        textAlign:'center',
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.1,
        shadowRadius:2,
    },
    optionText:{
        fontSize:16,    
        color:'#333',
        textAlign:'center'
    },
    scoreContainer:{
        alignItems:'center',
    },
    score:{
        fontSize:18,
        color:'#333',
        fontWeight:'600',
    }
})