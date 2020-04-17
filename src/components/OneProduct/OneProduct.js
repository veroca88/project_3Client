import React from 'react';

class OneProduct extends React.Component {
  render() {
    const { name } = this.props;
    const { summary } = episode;

    const summaryFull = summary.replace(/<p>/g, '').replace(/<\/p>/g, '');
    const summaryShort = summaryFull.slice(0, 70);
    return (
      <div className='card'>
        <img
          src={episode.image.medium}
          className='card-img-top'
          alt={episode.name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{episode.name}</h5>
          <h6 className='card-title'>
            S{episode.season} E{episode.number}
          </h6>
          <p className='card-text'>{summaryShort}</p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default SingleEpisode;