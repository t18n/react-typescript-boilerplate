import React from 'react'
import { importAllImages, classes } from 'Includes/ultilities'

import appStyles from 'Sass/app.sass'
import styles from './Gallery.sass'

const photos = importAllImages(require.context('Assets/photos', false, /\.(png|jpe?g|svg)$/));

const Gallery = (props) => {
  return (
    <div>
      <div className={ classes([appStyles.box, appStyles.mt30]) }>
        <span className={ appStyles.mt30 }>
          * Images are credited to Unplash and Pixabay
          <br/>
          This section is made to test copy + display images in different formats
        </span>

        <div className={ classes([styles.masonryColumns, appStyles.mt30])}>
          {
            photos.map((obj, i) =>
              <div className={styles.masonryItem} key={i}>
                <img className={styles.masonryImg}  alt={obj} key={i} src={obj}></img>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export default Gallery