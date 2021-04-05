import React from "react";

const images = {
  onlyYouCanPlay: "only-you-can-play.png",
  trickyGif: "wildfire-success-modal.gif",
  fireEmoji: "wildfire-fire_magnify.png",
  titleScreenGif: "wildire-worldmap-idle.2019-10-03 21_33_13.gif",
  world1LevelNamesGif: "wildfire-worldmap.gif",
  windyRoundaboutGif: "windy-roundabout-fail.2019-08-19 09_56_12.gif",
  tallGrassGif: "wildfire-locked-tile.gif",
  titleWithByline: "wildfire-title-with-byline.png",
  title: "wildfire-title-trimmed.png",
  world1: "world1-still.png",
  world2: "tall-grass-ash-world2.png",
  world3: "image-windy-world3.png",
  sixAward: "six_award_2019.png",
  titleScreen: "wildfire-title-with-background.png",
  titleWithBylineWhite: "wildfire-title-with-byline-white.png",
  titleWhite: "wildfire-title-white.png",
  titleWithLogo: "wildfire-title-with-logo-trimmed.png",
};

const Image = ({ src, alt }) => (
  <img src={`assets/images/${images[src]}`} alt={alt} />
);

export default Image;
