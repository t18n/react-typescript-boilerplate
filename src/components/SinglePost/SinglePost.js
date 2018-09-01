import React from 'react'

const images = [
  'assets/photos/nature-1.jpeg',
  'assets/photos/nature-2.jpeg',
  'assets/photos/nature-3.jpg',
  'assets/photos/animals-1782013.svg',
  'assets/photos/venice.jpeg',
  'assets/photos/nature-1.jpeg',
  'assets/photos/water.png',
  'assets/photos/working.jpeg',
]

const SinglePost = (props) => {
  return (
    <div>
      <div class="container mt-4">
        <span className="text-muted mt-4 mb-4">
          * Images are credited to Unplash and Pixabay
          <br/>
          This section is made to test copy + display images in different formats
        </span>

        <div class="card-columns mt-4">
          {
            images.map((obj, i) =>
            <div class="card">
                <img className="card-img-top"  alt={obj} key={i} src={obj}></img>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export default SinglePost