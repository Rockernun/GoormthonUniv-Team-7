import { titleContents } from 'types/titleContents';

const titleContentsData: { [key: string]: titleContents } = {
  iceBraking: {
    title: '아이스 브레이킹',
    content:
      '간단한 게임을 통해 자연스럽게 대화를 \n시작하고, 서로를 더 빠르게 알아갈 수 \n있어요!',
  },
  situation: {
    title: '상황별 컨텐츠 추천',
    content:
      '현재 처해 있는 상황에 따라서 \n질문과 게임등을 추천해드릴게요! \n어색한 상황을 피해보세요~',
  },
  vs: {
    title: '밸런스 게임',
    content:
      'A와 B 둘 중 하나를 선택하고,\n 자유롭게 대화를 나눠보세요.\n 짧은 시간 내에 서로의 취향과\n 성격을 파악할 수 있어요!',
  },
  cloud: {
    title: '스몰토크 주제',
    content:
      '제시된 주제를 통해 가볍고 즐거운 \n이야기를 나누며 서로를 알아가는 \n시간을 가져보세요!',
  },
  game: {
    title: '미니 게임',
    content:
      '간단한 게임으로 어색함을 풀고, \n함께 웃으며 즐겨보세요! \n벌칙을 자유롭게 정해서 진행하면 \n더욱 재미있게 즐길 수 있어요.',
  },
  drink: {
    title: '술자리',
    content:
      '술자리에서 즐길 수 있는 스몰토크 주제, \n밸런스 게임, 미니 게임을 랜덤으로 \n추천해드려요. \n지루할 틈 없이 분위기를 200%까지 \n끌어올려요!',
  },
  team: {
    title: '팀플/프로젝트',
    content:
      '팀플 등 학우들과 처음 만난 자리에서 \n나눌 수 있는 대화 주제를 추천해 드려요! \n성공적인 팀플을 위해 Good Luck...☘️',
  },
  networking: {
    title: '네트워킹 파티',
    content:
      '같은 업계, 혹은 다른 업계의 사람들과 \n함께 만나는 자리에서 아이스브레이킹해요. \n업무/커리어와 관련된 질문을 \n추천해드릴게요!',
  },
};

export default titleContentsData;
