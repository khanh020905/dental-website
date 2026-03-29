"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, CheckCircle2 } from "lucide-react";

interface SecureVideoPlayerProps {
  src: string;
  onComplete?: () => void;
}

export function SecureVideoPlayer({ src, onComplete }: SecureVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [maxPlayedTime, setMaxPlayedTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  // Format seconds to mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      setCurrentTime(current);

      // Smart Anti-Cheat: Track maximum naturally played time
      // We allow a small 1-second buffer for natural browser updates
      if (current > maxPlayedTime && current - maxPlayedTime < 1.0) {
        setMaxPlayedTime(current);
      }

      // Check if 90% completed
      if (duration > 0 && current / duration >= 0.9 && !isCompleted) {
        setIsCompleted(true);
        onComplete?.();
      }
    }
  };

  // The core anti-cheat restriction:
  const handleSeeked = () => {
    if (videoRef.current) {
      // If user skipped artificially into the future beyond their max played time
      if (videoRef.current.currentTime > maxPlayedTime + 1) {
        videoRef.current.currentTime = maxPlayedTime; // Snap back
      }
    }
  };

  const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    // Only allow seeking backwards or within already watched territory
    if (newTime <= maxPlayedTime && videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
    // If they attempt to scrub forward into unseen territory, we ignore it to prevent the UI from glitching
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleSpeed = () => {
    if (videoRef.current) {
      const newRate = playbackRate === 1 ? 1.5 : 1;
      videoRef.current.playbackRate = newRate;
      setPlaybackRate(newRate);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.parentElement?.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative group w-full bg-black rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/10">
      <video
        ref={videoRef}
        src={src}
        className="w-full aspect-video object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
        onSeeked={handleSeeked}
        onEnded={() => {
          setIsCompleted(true);
          onComplete?.();
        }}
        onClick={togglePlay}
      />

      {/* Anti-cheat Alert Overlay if they hit 90% */}
      {isCompleted && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-green-500/90 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-semibold text-sm">Đủ điều kiện hoàn thành</span>
        </div>
      )}

      {/* Custom Control Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        {/* Timeline Slider */}
        <div className="relative w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer">
          {/* Progress fill representing played time */}
          <div 
            className="absolute top-0 left-0 h-full bg-primary rounded-full" 
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          {/* Safe-zone fill representing max watched time */}
          <div 
            className="absolute top-0 left-0 h-full bg-white/30 rounded-full" 
            style={{ width: `${(maxPlayedTime / duration) * 100}%` }}
          />
          
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleTimelineChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="hover:text-primary transition-colors focus:outline-none">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <div className="text-sm font-medium tabular-nums shadow-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button 
              onClick={toggleSpeed} 
              className="text-sm font-bold w-9 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded transition-colors focus:outline-none"
            >
              {playbackRate}x
            </button>
            
            <button onClick={toggleMute} className="hover:text-primary transition-colors focus:outline-none">
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <button onClick={toggleFullScreen} className="hover:text-primary transition-colors focus:outline-none">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
