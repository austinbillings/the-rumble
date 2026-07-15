"use client";

import {
  createContext, useContext, useRef, useState, useEffect, useCallback,
} from "react";
import { tracks, featuredTrackId } from "@/content/site";

const AudioCtx = createContext(null);

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within <AudioProvider>");
  return ctx;
}

// Single, app-wide audio instance. Lives in the root layout so playback
// survives route changes. No autoplay — playback only starts on user action.
export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const play = useCallback((track) => {
    const el = audioRef.current;
    if (!el || !track || !track.src) return;
    if (current && current.id === track.id) {
      el.paused ? el.play().catch(() => {}) : el.pause();
      return;
    }
    setCurrent(track);
    el.src = track.src;
    el.play().catch(() => {});
  }, [current]);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el || !current) return;
    el.paused ? el.play().catch(() => {}) : el.pause();
  }, [current]);

  const seek = useCallback((frac) => {
    const el = audioRef.current;
    if (el && el.duration) el.currentTime = frac * el.duration;
  }, []);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () =>
      setProgress(el.duration ? el.currentTime / el.duration : 0);
    const onEnd = () => { setPlaying(false); setProgress(0); };
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  return (
    <AudioCtx.Provider value={{ current, playing, progress, play, toggle, seek }}>
      {children}
      <audio ref={audioRef} preload="none" />
    </AudioCtx.Provider>
  );
}

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" /></svg>
);

// Compact player that appears in the header once something is playing.
export function HeaderPlayer() {
  const { current, playing, toggle, progress } = useAudio();
  if (!current) return null;
  return (
    <div className="miniplayer">
      <button
        type="button"
        className="miniplayer__btn"
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div className="miniplayer__meta">
        <span className="miniplayer__title">{current.title}</span>
        <span className="miniplayer__bar">
          <span style={{ width: `${Math.round(progress * 100)}%` }} />
        </span>
      </div>
    </div>
  );
}

// "Listen" trigger. Plays the featured track through the one global player.
// Until a real audio `src` is set in content/site.js, it links to /music.
export function ListenButton({ className, label = "Listen" }) {
  const { play, toggle, current, playing } = useAudio();
  const track = tracks.find((t) => t.id === featuredTrackId) || tracks[0];
  const isCurrent = current && track && current.id === track.id;

  if (!track || !track.src) {
    return <a href="/music" className={className}>{label}</a>;
  }
  return (
    <button
      type="button"
      className={className}
      onClick={() => (isCurrent ? toggle() : play(track))}
    >
      {isCurrent && playing ? "Pause" : label}
    </button>
  );
}
