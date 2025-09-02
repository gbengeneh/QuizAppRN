import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';

const ResultScreen = () => {
    const { score, total, category } = useLocalSearchParams();
  const router = useRouter();
  
  const percentage = Math.round((parseInt(score) / parseInt(total)) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 60;
  
  const getMessage = () => {
    if (isExcellent) return 'Excellent! You\'re a quiz master!';
    if (isGood) return 'Good job! Keep practicing!';
    return 'Nice try! Better luck next time!';
  };

  const restartQuiz = () => {
    router.replace({
      pathname: '/quiz',
      params: { category }
    });
  };

  const goHome = () => {
    router.replace('/');
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
         <Text style={styles.title}>QUIZ COMPLETED</Text>
         <Text style={styles.category}>{category}</Text>
      </View>

      <View style={styles.resultsContainer}>
         <Text style={styles.scoreText}>{score}/{total}</Text>
         <Text style={styles.percentage} >{percentage}%</Text>
         <Text style={styles.message}>{getMessage()}</Text>
      </View>

      <View style={styles.actionsContainer}>
         <TouchableOpacity style={styles.secondaryButton} onPress={restartQuiz}>
            <Text style = {styles.buttonText}>Try Again</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.secondaryButton} onPress={goHome}>
            <Text style={styles.buttonText}>Back to Home</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  category: {
    fontSize: 20,
    color: '#666',
  },
  resultsContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  percentage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
  },
  actionsContainer: {
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});