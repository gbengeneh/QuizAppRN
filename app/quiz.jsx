import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import {quizData} from './data/question'



export default function QuizScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [questions] = useState(quizData[category] || []);

  useEffect(() => {
    if (questions.length === 0) {
      Alert.alert('Error', 'No questions available for this category');
      router.back();
    }
  }, [questions]);

  const handleAnswer = (selectedIndex) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(selectedIndex);
    
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        router.replace({
          pathname: '/results',
          params: { score: score + (selectedIndex === questions[currentQuestion].correct ? 1 : 0), total: questions.length, category }
        });
      }
    }, 1000);
  };

  if (questions.length === 0) {
    return null;
  }

  const question = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.progress}>
          Question {currentQuestion + 1} of {questions.length}
        </Text>
      </View>
      
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question.question}</Text>
      </View>
      
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) =>(
            <TouchableOpacity
               key={index}
               style={[
                styles.option,
                selectedAnswer !== null &&{
                    backgroundColor: index === question.correct ? '#4caf50':
                    index === selectedAnswer ? '#f44334' : '#e0e0e0'
                }
               ]}
               onPress={() => handleAnswer(index)}
               disabled ={selectedAnswer !== null}
            >
                <Text style={[
                    styles.optionText,
                    selectedAnswer !== null &&{
                        color: index === question.correct || index === selectedAnswer ? '#fff' : '#333'
                    }
                ]}>
                    {option}

                </Text>

            </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Score: {score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  progress: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  questionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 30,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
