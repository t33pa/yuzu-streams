# YUZU SOFT Streaming Music Collection

A comprehensive web application that catalogs and provides streaming links for YUZU SOFT visual novel soundtracks and character songs across multiple platforms.

## Overview

This project collects and displays music from YUZU SOFT games available on streaming platforms including Spotify, Apple Music, YouTube, YouTube Music, and Amazon Music. It features both original soundtracks (OSTs) and character songs with filtering capabilities.

## Features

- **Multi-platform Support**: Direct links to Spotify, Apple Music, YouTube, YouTube Music, and Amazon Music
- **Game Filtering**: Filter character songs by specific game titles

## Tech Stack

- **Framework**: Preact
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **State Management**: Preact Signals

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd yuzu-streams
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
pnpm build
```

## Project Structure

```
src/
├── components/
│   ├── Share.tsx           # Music track display component
│   ├── Share.module.css    # Styles for music tracks
│   ├── WorkFilter.tsx      # Game filtering component
│   ├── WorkFilter.module.css # Filter styles
│   ├── images/
│   │   └── Icons.tsx       # Icon components
│   └── data.ts             # Music data and types
├── App.module.css          # Main app styles
├── app.tsx                 # Main application component
├── main.tsx               # Entry point
└── ...
```

## Data Management

Music data is stored in `src/components/data.ts` with the following structure:

```typescript
type CharacterSongs = {
    title: string
    artist: string
    imageUrl: string
    spotifyLink: string
    appleMusicLink: string
    youtubeLink: string
    youtubeMusicLink: string
    amazonMusicLink: string
    work: string  // Game title
}
```

## Contributing

Contributions are welcome! Please feel free to:

- Add missing game soundtracks
- Update streaming links
- Improve the user interface
- Fix bugs or issues

## Credits

- **Creator**: Teepa ([@Te3p4V on Twitter](https://x.com/Te3p4V))
- **Game Publisher**: YUZU SOFT
- **Music Platforms**: Spotify, Apple Music, YouTube, YouTube Music, Amazon Music

## Note

⚠️ Currently, the "Cafe Stella and the Reaper's Butterflies Original Soundtrack" may not display all tracks on Spotify (appears to be a platform-side issue).

For "Lime Light Lemonade Jam Original Soundtrack", please refer to the official [NexTone.Link](https://nex-tone.link/A00201738).
