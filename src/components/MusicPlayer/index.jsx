import { useState, useRef, useEffect } from "react";

import { FaPause, FaPlay, FaPlus, FaMinus } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

import "./styles.sass";

const MusicPlayer = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const toggleMusicPlayer = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.currentTime = 0;
        audioRef.current.play();
        setVolume(0.5);
    }
  }, [isDarkMode, isPlaying]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 200);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    isPlaying ? audio.pause() : audio.play();

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      {isVisible && (
        <div className={`cassette-body ${isOpen ? "show" : "hide"}`}>
          <div className="cassette-top">
            <div className="cassette-window">
              <div className={`reel left-reel ${isPlaying ? "" : "remove"}`}>
                <div className="reel-center"></div>
              </div>
              <div className={`reel right-reel ${isPlaying ? "" : "remove"}`}>
                <div className="reel-center"></div>
              </div>
            </div>

            <div className="cassette-label">
              <div className="track-info">
                <span className="track-name">
                  {isDarkMode ? "Memory Bank" : "Frozen Waters"}
                </span>
                <span className="track-subtitle">
                  {isDarkMode ? "Synthwave Radio 🌌" : "lofi hip hop radio 📚"}
                </span>
              </div>
            </div>
          </div>

          <div className="cassette-controls">
            <audio
              ref={audioRef}
              src={
                isDarkMode
                  ? "./music/MemoryBank.mp3"
                  : "./music/FrozenWaters.mp3"
              }
              preload="auto"
            />

            <button
              className="control-btn play"
              aria-label={isPlaying ? "Pausar música" : "Tocar música"}
              onClick={togglePlay}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button
              className="control-btn"
              onClick={() => setVolume((prev) => Math.max(0, prev - 0.1))}
            >
              <FaMinus />
            </button>
            <button
              className="control-btn"
              onClick={() => setVolume((prev) => Math.min(1, prev + 0.1))}
            >
              <FaPlus />
            </button>
          </div>

          <div className="cassette-details">
            <div className="cassette-holes">
              <div className="hole"></div>
              <div className="hole"></div>
            </div>
          </div>
        </div>
      )}

      <button className="btn-show-hide" onClick={() => toggleMusicPlayer()}>
        <FaHeadphones className="icon" />
      </button>
    </div>
  );
};

export default MusicPlayer;
