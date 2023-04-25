export type StatusType = '자기소개' | '참여활동' | '사용 스킬' | '참여한 프로젝트';

export interface UpperListType {
  id: number;
  title: string;
  link: string;
}

export interface UpperType {
  status: StatusType;
  list: UpperListType[];
}
