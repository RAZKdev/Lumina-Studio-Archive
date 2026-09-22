# Lumina Studio | Browser-Based Video & Audio Editor MVP (NLE)

A high-performance, dark-themed, professional Non-Linear Editor (NLE) interface inspired by DaVinci Resolve and Adobe Premiere Pro. Built with **React 18**, **TypeScript**, **Tailwind CSS**, **HTML5 Canvas**, and **Web Audio API**.

All video and audio processing is performed **100% client-side** in the browser without any backend server.

---

## ✨ Features & Architecture

### 1. Media Bin (Top-Left Panel)
- **HTML5 File API Drag-and-Drop**: Drop local MP4, WebM, MOV, MP3, WAV, AAC media directly into the app.
- **Automatic Video Thumbnail Generation**: Extracts poster frames using an offscreen canvas and video element.
- **Web Audio API Waveform Extraction**: Decodes audio channel data using `AudioContext.decodeAudioData` and samples peaks for instant visualization.
- **Demo Media Generator**: One-click "Load Demo Media" in the header to synthesize test video reels and audio tracks immediately without needing local files.
- **Drag Source**: Drag items directly from the Media Bin onto the Timeline tracks.

### 2. Preview Monitor (Top-Right Panel)
- **Synchronized Playback Engine**: Frame-accurate playback loop with `requestAnimationFrame` delta time calculation.
- **SMPTE Timecode Display**: Real-time `HH:MM:SS:FF` readout at 30 FPS.
- **Transport Controls**: Rewind to Start, Step Backward (1 frame), Play/Pause (Spacebar), Step Forward (1 frame), Volume, and Fullscreen.
- **Aspect Ratio Switcher**: Toggle dynamically between 16:9 Landscape, 9:16 Vertical (Shorts/Reels/TikTok), and 1:1 Square formats.
- **Smooth Scrubbing Sync**: Scrubbing while playing automatically pauses playback and seeks cleanly without stutter.

### 3. High-Performance Canvas Timeline (Bottom Panel)
- **Canvas Time Ruler**: Virtualized tick marks (seconds and sub-frame ticks) with click-and-drag scrubbing.
- **Multi-Track Architecture**:
  - `Track 1 (V1)`: Video track with clip manipulation.
  - `Track 2 (A1)`: Audio track with real-time waveform visualization.
- **Non-Destructive Trimming**:
  - Drag the left edge handle (`In-point`) to adjust start time and source offset.
  - Drag the right edge handle (`Out-point`) to adjust clip duration.
  - Visual timecode tooltips during trimming.
- **Draggable Playhead**: Prominent red needle spanning across tracks with responsive scrubbing.
- **Razor / Split Tool**: Split any clip at the current playhead position (`C` shortcut or Header Split button).
- **Track Controls**: Mute (eye/speaker) and Lock (padlock) controls per track.
- **Smooth Zooming**: Scalable timeline zoom (15px/s to 120px/s) with slider and `+` / `-` buttons.

### 4. Client-Side Video & Audio Exporter
- **Frame-by-Frame Compositor**: Renders active video sequence onto an offscreen canvas.
- **MediaStream & MediaRecorder Engine**: Records canvas frames and audio streams directly into a downloadable video container (`.webm` / `.mp4`).
- **Export Progress Modal**: Displays real-time progress percentage, frame count, status, and direct one-click download.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Space` | Play / Pause playback |
| `←` (Left Arrow) | Step backward 1 frame (1/30s) |
| `→` (Right Arrow) | Step forward 1 frame (1/30s) |
| `Home` | Rewind playhead to start (00:00:00:00) |
| `Delete` / `Backspace` | Delete selected clip |
| `Split (C)` button | Split active clip at playhead |

---

## 🚀 Running the Application

### Option 1: Double-click Start Script
Double-click `start.bat` in the root folder.

### Option 2: Command Line
```powershell
npm run dev
```
Then open `http://localhost:5173` in your browser.

---

## 📦 Building for Production
```powershell
npm run build
```
Generates production-ready, minified assets in `dist/`.
