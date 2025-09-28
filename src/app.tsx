import { signal } from '@preact/signals'
import { originalSoundTracks, characterSongs } from './components/data'
import { Share } from './components/Share'
import { WorkFilter } from './components/WorkFilter'
import styles from './App.module.css'

type ContentType = 'original' | 'character'

const contentType = signal<ContentType>('original')

export function App() {
  const currentTracks = contentType.value === 'original' ? originalSoundTracks : characterSongs

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>ゆずソフトサブスク配信曲まとめ</h1>
      </header>

      <div className={styles.notice}>
        <p>⚠️ 現在 Spotify のみ「喫茶ステラと死神の蝶 オリジナルサウンドトラック」で全曲が表示されません (Spotify 側の問題と思われます)</p>
      </div>

      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${contentType.value === 'original' ? styles.active : ''}`}
          onClick={() => contentType.value = 'original'}
        >
          オリジナルサウンドトラック
        </button>
        <button
          className={`${styles.toggleButton} ${contentType.value === 'character' ? styles.active : ''}`}
          onClick={() => contentType.value = 'character'}
        >
          キャラクターソング
        </button>
      </div>

      <div className={styles.contentContainer}>
        {contentType.value === 'original' ? (
          <>
            {currentTracks.map((track) => (
              <Share key={`${track.title}-${track.artist}`} {...track} />
            ))}
            <div className={styles.notice}>
              <p>ライムライト・レモネードジャムのオリジナルサウンドトラック は 公式が出している <a href="https://nex-tone.link/A00201738" target="_blank" rel="noopener noreferrer">NexTone.Link</a> を参照してください。</p>
            </div>
          </>
        ) : (
          <WorkFilter />
        )}
      </div>

      <footer className={styles.footer}>
        <p>リスト制作: <a href="https://x.com/Te3p4V" target="_blank" rel="noopener noreferrer">Teepa</a></p>
        <p>何かあれば連絡してください</p>
      </footer>
    </div>
  )
}