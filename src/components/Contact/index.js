/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { email } from '@config';
import { srConfig } from '@config/sr';
import { NumberedHeading } from '@common/styles';
import { StyledContactSection } from './styles';

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <NumberedHeading overline>接下来呢?</NumberedHeading>

      <h2 className="title">联系我</h2>

      <p>
          我的收件箱始终开放。无论您有什么问题或只是想打个招呼，我会尽力回复您！
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
