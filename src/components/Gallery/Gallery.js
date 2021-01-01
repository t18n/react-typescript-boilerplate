import React from 'react';
import LazyLoad from 'react-lazyload';

import { importAllImages, classes, generateKey } from 'src/utils/common';

import appStyles from 'src/styles/app.sass';
import styles from './Gallery.sass';

const photos = importAllImages(require.context('src/assets/photos', false, /\.(png|jpe?g|svg)$/));

// TODO: Update lazyload to Babel 7 compatible
const Gallery = () => (
  <div>
    <div className={classes([appStyles.box, appStyles.mt30])}>
      <span className={appStyles.mt30}>
        * Images are credited to Unplash and Pixabay
        <br />
        This section is made to test copy + display images in different formats
      </span>

      <div className={classes([styles.masonryColumns, appStyles.mt30])}>

        { photos.map((obj) => (
          <LazyLoad offset={100} height={100} key={generateKey()}>
            <div className={styles.masonryItem} key={generateKey()}>
              <img className={styles.masonryImg} key={generateKey()} alt={obj} src={obj} />
            </div>
          </LazyLoad>
        )) }

      </div>
    </div>
  </div>
);
export default Gallery;
