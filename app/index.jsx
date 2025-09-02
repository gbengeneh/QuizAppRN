import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const quizCategories = [
  { id: 1, name: 'General Knowledge', questions: 10, color: '#FF6B6B' },
  { id: 2, name: 'Science', questions: 15, color: '#4ECDC4' },
  { id: 3, name: 'History', questions: 12, color: '#45B7D1' },
  { id: 4, name: 'Sports', questions: 8, color: '#96CEB4' },
  { id: 5, name: 'Geography', questions: 10, color: '#FECA57' },
  { id: 6, name: 'Movies', questions: 12, color: '#FF9FF3' },

];

const HomeScreen = () => {
   const router = useRouter();
   
   const startQuiz = (category) => {
      router.push({
            pathname: '/quiz',
            params: { category: category.name }
      });
    }


  return (
    <ScrollView style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>Quiz App</Text>
            <Text style={styles.subtitle}>Choose a category to start</Text>
         </View>

            <View style={styles.categoriesContainer}>
                 {quizCategories.map((category)=> (
                  <TouchableOpacity
                  key={category.id}
                  style={[styles.categoryCard, { backgroundColor: category.color }]}
                  onPress={() => startQuiz(category)}
                  >
                    <Text style={styles.categoryName}>{category.name}</Text>
                    <Text style={styles.categoryQuestions}>{category.questions} Questions</Text>
                  </TouchableOpacity>
                 ))}
            </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryCard: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  categoryQuestions: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
});