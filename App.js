/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
// import * as Font from 'expo-font';
// import {AppLoading} from 'expo';

// const fetchFonts = () => {
//   Font.loadAsync({
//     'open-sans': require('./fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./fonts/OpenSans-Bold.ttf'),
//   });
// };

const App: () => React$Node = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  //   const [dataLoaded, setDataLoaded] = useState(false);

  //   if (!dataLoaded) {
  //     return (
  //       <AppLoading
  //         startAsync={fetchFonts}
  //         onFinish={() => setDataLoaded(true)}
  //         onError={err => console.log(err)}
  //       />
  //     );
  //   }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    console.log('inside gameOverHandler');
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
