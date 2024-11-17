import React, { useState, useEffect } from 'react';
import { Camera, Shield, Award, Star, AlertTriangle, ChevronRight, RefreshCcw } from 'lucide-react';

export default function AIBiasDetective() {
  const [currentCases, setCurrentCases] = useState([]);
  const [gameState, setGameState] = useState('intro');
  const [score, setScore] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [streak, setStreak] = useState(0);
  const [animation, setAnimation] = useState('');

  const allCases = [
    {
      question: "What did Joy Buolamwini discover about facial recognition systems during her MIT research?",
      options: [
        {
          text: "They worked perfectly for everyone",
          correct: false,
          feedback: "Actually, the systems showed significant bias against certain groups."
        },
        {
          text: "They had the highest error rates for darker-skinned females",
          correct: true,
          feedback: "Correct! This was a key finding that led to the Gender Shades study."
        },
        {
          text: "They only worked in bright lighting",
          correct: false,
          feedback: "The bias issues persisted regardless of lighting conditions."
        }
      ],
      context: "From Joy's groundbreaking Gender Shades research",
      icon: "camera"
    },
    {
      question: "What is 'algorithmic justice' according to the book?",
      options: [
        {
          text: "Making algorithms run faster",
          correct: false,
          feedback: "Algorithmic justice is about fairness, not speed."
        },
        {
          text: "Ensuring AI systems serve all of humanity fairly",
          correct: true,
          feedback: "Yes! It's about ensuring AI doesn't perpetuate or amplify social inequalities."
        },
        {
          text: "Writing better code",
          correct: false,
          feedback: "While code quality matters, algorithmic justice focuses on fairness and equity."
        }
      ],
      context: "Core concept from Unmasking AI",
      icon: "shield"
    },
    {
      question: "What happened to Robert Williams due to facial recognition bias?",
      options: [
        {
          text: "He was wrongfully arrested due to a false match",
          correct: true,
          feedback: "Correct! This real case shows the serious consequences of AI bias."
        },
        {
          text: "He lost his job",
          correct: false,
          feedback: "While employment discrimination is a concern, this case involved law enforcement."
        },
        {
          text: "His social media was blocked",
          correct: false,
          feedback: "The case involved wrongful arrest due to facial recognition errors."
        }
      ],
      context: "Real-world case discussed in the book",
      icon: "alert-triangle"
    },
    {
      question: "What is 'power shadows' in AI systems?",
      options: [
        {
          text: "Computer processing power",
          correct: false,
          feedback: "Power shadows refer to societal power structures, not computing power."
        },
        {
          text: "When systemic biases are reflected in AI training data",
          correct: true,
          feedback: "Yes! Power shadows show how historical discrimination can be encoded in AI."
        },
        {
          text: "Battery life issues",
          correct: false,
          feedback: "The concept relates to social power structures, not technical power."
        }
      ],
      context: "Important concept from Unmasking AI",
      icon: "shield"
    },
    {
      question: "What happened when Amazon's AI recruitment tool was tested?",
      options: [
        {
          text: "It worked perfectly without bias",
          correct: false,
          feedback: "Actually, the tool showed significant gender bias."
        },
        {
          text: "It showed bias against resumes that mentioned 'women'",
          correct: true,
          feedback: "Correct! The system learned and amplified historical gender bias in hiring."
        },
        {
          text: "It only had technical glitches",
          correct: false,
          feedback: "The issues were related to systematic bias, not technical problems."
        }
      ],
      context: "Real case study from the book about AI in hiring",
      icon: "alert-triangle"
    },
    {
      question: "What is the 'Algorithmic Justice League'?",
      options: [
        {
          text: "A superhero movie franchise",
          correct: false,
          feedback: "While it has a powerful name, it's a real organization fighting AI bias."
        },
        {
          text: "An organization fighting against AI bias and discrimination",
          correct: true,
          feedback: "Correct! Founded by Joy Buolamwini to combat algorithmic bias."
        },
        {
          text: "A programming competition",
          correct: false,
          feedback: "AJL is focused on justice and fairness in AI systems, not programming contests."
        }
      ],
      context: "Organization founded by Joy Buolamwini",
      icon: "shield"
    }
  ];

  useEffect(() => {
    if (gameState === 'playing' && currentCases.length === 0) {
      setCurrentCases(getRandomCases(allCases, 3));
    }
  }, [gameState]);

  function getRandomCases(allCases, count) {
    const shuffled = [...allCases].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const handleAnswer = (index) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (currentCases[currentCase].options[index].correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
      setAnimation('correct');
    } else {
      setStreak(0);
      setAnimation('wrong');
    }
    
    setTimeout(() => setAnimation(''), 500);
  };

  const handleNext = () => {
    if (currentCase < currentCases.length - 1) {
      setCurrentCase(currentCase + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setGameState('complete');
    }
  };

  const handleRestart = () => {
    setGameState('intro');
    setScore(0);
    setCurrentCase(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setStreak(0);
    setCurrentCases([]);
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'camera':
        return <Camera className="w-16 h-16 text-purple-500" />;
      case 'alert-triangle':
        return <AlertTriangle className="w-16 h-16 text-yellow-500" />;
      case 'shield':
        return <Shield className="w-16 h-16 text-blue-500" />;
      default:
        return <Camera className="w-16 h-16 text-purple-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {gameState === 'intro' ? (
        <div className="h-screen flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center text-white p-8 backdrop-blur-lg bg-white/10 rounded-xl">
            <div className="mb-6 flex justify-center">
              <Shield className="w-20 h-20 text-white animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold mb-6">AI Bias Detective</h1>
            <p className="text-xl mb-8 opacity-90">
              Join the Algorithmic Justice League and investigate cases of AI bias.
              Can you spot the problems and protect digital rights?
            </p>
            <button
              onClick={() => setGameState('playing')}
              className="px-8 py-4 bg-white text-purple-600 rounded-xl text-xl
                       hover:bg-purple-100 transition-all transform hover:scale-105
                       font-bold shadow-lg"
            >
              Begin Investigation
            </button>
          </div>
        </div>
      ) : gameState === 'complete' ? (
        <div className="h-screen flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center text-white p-8 backdrop-blur-lg bg-white/10 rounded-xl">
            <div className="mb-6 flex justify-center">
              <Award className="w-20 h-20 text-yellow-300 animate-bounce" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Investigation Complete!</h1>
            <p className="text-3xl mb-4">Correct Answers: {score} out of {currentCases.length}</p>
            <div className="mb-8">
              {score === currentCases.length ? (
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-6 h-6 text-yellow-300" />
                  <span>Perfect Score! You're a master detective!</span>
                </div>
              ) : score >= (currentCases.length / 2) ? (
                <span>Great job! Keep learning about AI bias!</span>
              ) : (
                <span>Keep investigating! The truth is out there.</span>
              )}
            </div>
            <button
              onClick={handleRestart}
              className="px-8 py-4 bg-white text-purple-600 rounded-xl text-xl
                       hover:bg-purple-100 transition-all transform hover:scale-105
                       font-bold shadow-lg flex items-center gap-2 mx-auto"
            >
              <RefreshCcw className="w-6 h-6" />
              New Investigation
            </button>
          </div>
        </div>
      ) : (
        <div className={`min-h-screen p-8 ${animation}`}>
          <style jsx>{`
            .correct {
              animation: flash-green 0.5s;
            }
            .wrong {
              animation: flash-red 0.5s;
            }
            @keyframes flash-green {
              50% { background-color: rgba(0, 255, 0, 0.2); }
            }
            @keyframes flash-red {
              50% { background-color: rgba(255, 0, 0, 0.2); }
            }
          `}</style>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  <span className="text-xl">Correct: {score}/{currentCases.length}</span>
                </div>
                {streak > 1 && (
                  <div className="flex items-center gap-2 text-yellow-300 animate-pulse">
                    <Star className="w-6 h-6" />
                    <span>Streak: {streak}!</span>
                  </div>
                )}
              </div>
              <div className="text-sm">
                Case {currentCase + 1} of {currentCases.length}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex justify-center items-center py-8 bg-gray-50">
                {renderIcon(currentCases[currentCase]?.icon)}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">
                  {currentCases[currentCase]?.question}
                </h2>

                <div className="space-y-3">
                  {currentCases[currentCase]?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showFeedback}
                      className={`w-full p-4 text-left rounded-xl transition-all transform
                                hover:scale-102 ${
                        showFeedback
                          ? option.correct
                            ? 'bg-green-100 border-green-500'
                            : selectedAnswer === index
                            ? 'bg-red-100 border-red-500'
                            : 'bg-gray-100'
                          : 'border border-gray-200 hover:border-purple-500 hover:bg-purple-50'
                      }`}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>

                {showFeedback && (
                  <div className="mt-6">
                    <div className={`p-4 rounded-lg mb-4 ${
                      currentCases[currentCase].options[selectedAnswer].correct
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {currentCases[currentCase].options[selectedAnswer].feedback}
                    </div>
                    
                    <div className="text-sm text-gray-600 italic mb-4">
                      Context: {currentCases[currentCase].context}
                    </div>

                    <button
                      onClick={handleNext}
                      className="w-full py-3 bg-purple-600 text-white rounded-xl
                               hover:bg-purple-700 transition-all transform hover:scale-102
                               flex items-center justify-center gap-2"
                    >
                      {currentCase < currentCases.length - 1 ? (
                        <>Next Case <ChevronRight className="w-5 h-5" /></>
                      ) : (
                        <>Complete Investigation <Award className="w-5 h-5" /></>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}