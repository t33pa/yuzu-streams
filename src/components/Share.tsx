import { Spotify, AppleMusic, YouTube, YouTubeMusic, AmazonMusic } from './images/Icons'
import styles from './Share.module.css'

export interface ShareProps {
    title: string
    artist: string
    imageUrl: string
    spotifyLink: string
    appleMusicLink: string
    youtubeLink: string
    youtubeMusicLink: string
    amazonMusicLink: string
}

export function Share({
    title,
    artist,
    imageUrl,
    spotifyLink,
    appleMusicLink,
    youtubeLink,
    youtubeMusicLink,
    amazonMusicLink
}: ShareProps) {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.albumCover}>
                    <img
                        src={imageUrl}
                        alt={title}
                        className={styles.albumImage}
                    />
                </div>
                <div className={styles.trackInfo}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.artist}>{artist}</p>
                </div>
            </div>
            <div className={styles.streamingLinks}>
                <div className={styles.services}>
                    <a href={spotifyLink} className={styles.serviceLink} target="_blank" rel="noopener noreferrer">
                        <Spotify />
                        <span>Spotify</span>
                    </a>
                    <a href={appleMusicLink} className={styles.serviceLink} target="_blank" rel="noopener noreferrer">
                        <AppleMusic />
                        <span>Apple Music</span>
                    </a>
                    <a href={youtubeLink} className={styles.serviceLink} target="_blank" rel="noopener noreferrer">
                        <YouTube />
                        <span>YouTube</span>
                    </a>
                    <a href={youtubeMusicLink} className={styles.serviceLink} target="_blank" rel="noopener noreferrer">
                        <YouTubeMusic />
                        <span>YouTube Music</span>
                    </a>
                    <a href={amazonMusicLink} className={styles.serviceLink} target="_blank" rel="noopener noreferrer">
                        <AmazonMusic />
                        <span>Amazon Music</span>
                    </a>
                </div>
            </div>
        </div>
    )
}