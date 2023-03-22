/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>关于我</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>你好，我是周俊，我在中国重庆出生长大。</p>
            <p>
            我搬到美国接受教育。
            </p>
            <p>我本科毕业于拉斐特学院，获得学士学位，在塔夫茨大学获得硕士学位。</p>
            <p>我唱歌不是特别好听，但我喜欢唱歌，正在学习弹吉他。</p>
            <p>我看了很多电影，我曾经每周举办一次电影之夜。</p>
            <p>我不工作的时候就痴迷于阅读，契诃夫是我最喜欢的作家。</p>
            <p>我写 程序 并且（曾经）写关于我看到的东西的蠢文章。</p>
            <p>我很想念那里，但有时还会梦想着那里。</p>
            <p>我现在重庆一所高校当讲师。</p>
            <p>我的学生们很可爱，比我当年学习更认真。</p>
            <p>我的朋友们遍布世界各地，也希望找更多的新朋友</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} blu src="/avatar.png" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
