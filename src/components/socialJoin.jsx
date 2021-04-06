import styles from "./socialJoin.module.scss";

const channels = {
  discord: {
    imageStyles: styles.discordImage,
    logo: "assets/images/Discord-Logo-Black.svg",
    text: "Join us on Discord!",
    link: "https://discord.gg/yWV2BZJhwx",
  },
  twitter: {
    imageStyles: styles.twitterImage,
    logo: "assets/images/twitter-logo-black.svg",
    text: "Follow me on Twitter!",
    link: "https://twitter.com/ryrykubes",
  },
};

const SocialJoin = ({ channel }) => {
  const social = channels[channel];

  return (
    <div className={styles.container}>
      <img
        className={`${styles.image} ${social.imageStyles}`}
        src={social.logo}
      />
      <a href={social.link}>{social.text}</a>
    </div>
  );
};

export default SocialJoin;
