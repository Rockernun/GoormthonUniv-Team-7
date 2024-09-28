import NavBar from 'components/NavBar';
import React, { useEffect, useState } from 'react';
import ShowGame from './Game/ShowGame';
import ExplainCloud from 'components/Cloud/ExplainCloud';
import ButtonCloud from 'components/Cloud/ButtonCloud';
import RandomCloud from 'components/Cloud/RandomCloud';
import GameModal from 'components/Modal/GameModal';
import { useQuery } from 'react-query';
import { MinigameResponse } from 'types/MinigameResponse.type';
import { getMinigames } from 'hooks/useGame';
import { Minigame } from 'types/Minigame.type';

const MiniGame: React.FC = () => {
  const { data, error, isLoading } = useQuery<MinigameResponse, Error>('minigames', getMinigames);

  const gameList: Minigame[] = data?.minigames || [];
  const [gameType, setGameType] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  if (error) {
    return <div>Error: {error.message}</div>; // UI에 에러 메시지 표시
  }
  const handleModalOpen = (action: () => void) => {
    setPendingAction(() => action);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmAction = () => {
    if (pendingAction) {
      pendingAction();
    }
    setIsModalOpen(false);
    setPendingAction(null);
  };

  const handleToggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const handlePreviousGame = () => {
    const currentIndex = gameList.findIndex((game) => game.name === gameType);
    const newGameType =
      currentIndex > 0 ? gameList[currentIndex - 1].name : gameList[gameList.length - 1].name;
    setGameType(newGameType);
    setIsRunning(false);
  };

  const handleNextGame = () => {
    const currentIndex = gameList.findIndex((game) => game.name === gameType);
    const newGameType =
      currentIndex < gameList.length - 1 ? gameList[currentIndex + 1].name : gameList[0].name;
    setGameType(newGameType);
    setIsRunning(false);
  };

  const currentGameDescription = gameList.find((game) => game.name === gameType)?.description || '';

  return (
    <div className="flex flex-col items-center">
      <NavBar subject="game" />
      <ShowGame
        name={gameType}
        onButtonClick={isRunning ? () => handleModalOpen(handleNextGame) : handleNextGame}
        onPrevious={handlePreviousGame}
        onNext={handleNextGame}
      />
      {gameType === '훈민정음' || gameType === '반말 모드' ? (
        <ButtonCloud
          key={gameType}
          name={gameType}
          explanation={currentGameDescription}
          isRunning={isRunning}
          onToggleRunning={handleToggleRunning}
        />
      ) : gameType === '초성 퀴즈' ? (
        <RandomCloud />
      ) : (
        <ExplainCloud explanation={currentGameDescription} />
      )}
      <GameModal isOpen={isModalOpen} onClose={handleModalClose} onConfirm={handleConfirmAction} />
    </div>
  );
};

export default MiniGame;
