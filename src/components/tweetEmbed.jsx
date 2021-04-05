import React from 'react';
import TweetEmbed from 'react-tweet-embed';
import tweetEmbedStyles from './tweetEmbed.module.scss';

export default ({ id }) => (
  <div className={tweetEmbedStyles.tweet}>
    <TweetEmbed id={id} options={{ width: 290 }} />
  </div>
);
