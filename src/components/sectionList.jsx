import React from 'react';
import sectionListStyles from './sectionList.module.scss';
import Image from './images';

const SectionList = ({ links }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'block', flexShrink: '0', marginRight: '3rem' }}>
        <div className={sectionListStyles.header}>
          {links.map(({ label, link }) => (
            <a href={link}>{label}</a>
          ))}
        </div>
      </div>
      <div className={sectionListStyles.imageContainer}>
        <Image src="titleScreenGif" alt="Wildfire title screen" />
      </div>
    </div>
  );
};

export default SectionList;
