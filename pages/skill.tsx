import Frame from '@/components/frame';
import SkillItem from '@/components/skill/SkillItem';
import { SkillType } from '@/types/skill';
import { PageList } from '@/utils/constants/pagelist';
import { SkillList } from '@/utils/constants/skill';

const Skill = () => {
  return (
    <Frame status="사용 스킬">
      {SkillList.map((element: SkillType) => (
        <SkillItem key={element.id} {...element} />
      ))}
    </Frame>
  );
};

export default Skill;
