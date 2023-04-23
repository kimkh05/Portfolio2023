import { AppJamPoster, KosaMidasPoster } from '@/assets';
import { ContestType } from '@/types/contest';

export const OtherContest: ContestType[] = [
  {
    id: 1,
    imageUrl: AppJamPoster,
    title: 'APPJAM',
    period: '2022. 12. 17 ~ 2022. 12. 18',
    topic: '믹스(MIX)',
    numberOfPeople: 6,
    field: ['기획', '디자인'],
    introduce: '서로 간의 문화를 공유하자',
    award: '우수상',
  },
  {
    id: 2,
    imageUrl: KosaMidasPoster,
    title: 'KOSA-MIDAS-YOUNG TALENT CHALLENGE 2022',
    period: '2022. 11. 03 ~ 2022. 11. 04',
    topic: '유연근무제',
    numberOfPeople: 4,
    field: ['프론트엔드', '디자인'],
    introduce: '언제 어디서든 근무시간 측정과 제택근무 신청을 통해 유연하게 근무할 수 있는 서비스',
  },
];
