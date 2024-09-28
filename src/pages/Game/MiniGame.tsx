import ExplainCloud from 'components/Cloud/ExplainCloud';
import NavBar from 'components/Bar/NavBar';
import ShowGame from './ShowGame';

const MiniGame = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar subject="game" />
      <ShowGame name="훈민정음" />
      <ExplainCloud explanation="외국어, 외래어를 사용하지 않는 게임이에요. 시작 버튼을 누르면 제가 타이머를 셀게요!" />
    </div>
  );
};

export default MiniGame;
