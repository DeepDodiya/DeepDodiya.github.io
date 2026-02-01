import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { SetupScreen } from './screens/SetupScreen';
import { Dashboard } from './screens/Dashboard';
import { EndGameScreen } from './screens/EndGameScreen';
import { SessionManager } from './components/SessionManager';

const GameRouter: React.FC = () => {
  const { state } = useGame();

  switch (state.phase) {
    case 'SETUP':
      return <SetupScreen />;
    case 'GAME_OVER':
      return <EndGameScreen />;
    case 'PLAYING':
    case 'SESSION_RECONCILIATION':
    case 'SESSION_SUMMARY':
      return <Dashboard />;
    default:
      return <Dashboard />;
  }
};

const AppContent: React.FC = () => {
     return (
         <>
            <GameRouter />
            <SessionManager />
         </>
     )
}

const App: React.FC = () => {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
};

export default App;