/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHeroSection, StyledBigTitle } from './styles';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>欢迎，我是</h1>;
  const two = <StyledBigTitle>周俊</StyledBigTitle>;
  const three = <StyledBigTitle slate>教师、程序猿</StyledBigTitle>;
  const four = (
    <p>
      我是一名光荣的高校教师，现居重庆。同时，我也是一个程序猿，主要做网页编程。
      一直以来，我都在做一个能让我妈妈满意的项目。
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      联系我
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
