import { signal, computed } from '@preact/signals'
import { type CharacterSongs, characterSongs, getUniqueWorks } from './data'
import { Share } from './Share'
import styles from './WorkFilter.module.css'

const uniqueWorks = getUniqueWorks()
const selectedWorks = signal<Set<string>>(new Set(uniqueWorks))

const filteredSongs = computed<CharacterSongs[]>(() =>
  characterSongs.filter(song => selectedWorks.value.has(song.work))
)

export function WorkFilter() {
  const handleWorkToggle = (work: string) => {
    const newSelectedWorks = new Set(selectedWorks.value)
    if (newSelectedWorks.has(work)) {
      newSelectedWorks.delete(work)
    } else {
      newSelectedWorks.add(work)
    }
    selectedWorks.value = newSelectedWorks
  }

  const handleSelectAll = () => {
    selectedWorks.value = new Set(uniqueWorks)
  }

  const handleDeselectAll = () => {
    selectedWorks.value = new Set()
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterSection}>
        <h2 className={styles.filterTitle}>作品でフィルタリング</h2>
        <div className={styles.filterControls}>
          <button
            className={styles.controlButton}
            onClick={handleSelectAll}
          >
            すべて選択
          </button>
          <button
            className={styles.controlButton}
            onClick={handleDeselectAll}
          >
            すべて解除
          </button>
        </div>
        <div className={styles.checkboxContainer}>
          {uniqueWorks.map(work => (
            <label key={work} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedWorks.value.has(work)}
                onChange={() => handleWorkToggle(work)}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>{work}</span>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.resultsSection}>
        <h3 className={styles.resultsTitle}>
          表示中: {filteredSongs.value.length} 曲
        </h3>
        <div className={styles.songsContainer}>
          {filteredSongs.value.map((song) => (
            <Share
              key={`${song.title}-${song.artist}`}
              title={song.title}
              artist={song.artist}
              imageUrl={song.imageUrl}
              spotifyLink={song.spotifyLink}
              appleMusicLink={song.appleMusicLink}
              youtubeLink={song.youtubeLink}
              youtubeMusicLink={song.youtubeMusicLink}
              amazonMusicLink={song.amazonMusicLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}