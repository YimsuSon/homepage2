import React, { useContext } from 'react';

import GlobalStateContext from '@context/globalStateContext';
import { footerEnglish, footerKorean } from '@data/language/footer';

import { Container } from './styles';

export default function Footer() {
  const { language } = useContext(GlobalStateContext);

  // const currentLanguage = language === 'korea' ? footerKorean : footerEnglish;
 const currentLanguage = language === 'korea' ? footerEnglish : footerEnglish;

  return (
    <Container>
      <ul>
        <li>
          <span>{currentLanguage.company}</span>
        </li>
        <li>
          <span>{currentLanguage.ceo}</span>
        </li>
        <li>
          <span>{currentLanguage.address}</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>TEL : </span>
          <a href='tel:02.403.1160'>
            <span> 02.403.1190</span>
          </a>
        </li>
        <li>
          <span>FAX : </span>
          <span> {currentLanguage.fax}</span>
        </li>
        <li>
          <span>Email : </span>
          <a href='mailto:lodic_recruit@lodic.com'>
            <span> lodic_recruit@lodic.com</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <span>COPYRIGHT © 2018 LoDiC. CO., LTD. ALL RIGHTS RESERVED.</span>
        </li>
      </ul>
    </Container>
  );
}
