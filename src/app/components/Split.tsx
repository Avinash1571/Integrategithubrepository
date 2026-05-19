import { useRef, useEffect, useState } from 'react';
import { Play, Pause, X, Maximize2 } from 'lucide-react';
import ramsvideo from '../../assets/ramsdemo.mp4';

export function Split() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const popupVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setTimeout(() => {
      if (popupVideoRef.current) {
        popupVideoRef.current.load();
        popupVideoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    if (popupVideoRef.current) {
      popupVideoRef.current.pause();
    }
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  };

  return (
    <>
      <section
        id="platform"
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[260px]"
      >

        {/* ✅ LEFT — FULL BLEED VIDEO */}
        <div className="relative w-full h-full min-h-[350px] lg:min-h-[260px] overflow-hidden group cursor-pointer">

          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={ramsvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-10 group-hover:scale-110"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" fill="white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            )}
          </button>

          {/* Expand Button */}
          <button
            onClick={openPopup}
            className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-10"
            aria-label="Expand video"
          >
            <Maximize2 className="w-5 h-5 text-white" />
          </button>
        </div>

      {/* ✅ RIGHT — FIXED CONTENT WIDTH */}
      <div className="bg-[var(--rams-primary-deep)] text-white flex items-center">
        
        {/* Inner container to prevent stretch */}
        <div className="max-w-[560px] px-10 lg:px-14 py-12">
          
          <p className="text-[0.92rem] text-white/60 leading-[1.7] mb-8">
            Our platform is built so engineers can focus on analysis, not on fighting tools. And you're never
            alone when it comes to questions or decisions:
          </p>

          <h3
            className="text-[1rem] uppercase tracking-[0.04em] mb-2"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            Built for Real Engineering Teams
          </h3>

          <p className="text-[0.88rem] text-white/55 leading-[1.7] mb-8">
            Role-based access control with Super Admin, Company Admin, and Employee roles. Granular read/write
            permissions at module level. Connected libraries that link data within and across modules
            automatically.
          </p>

          <h3
            className="text-[1rem] uppercase tracking-[0.04em] mb-2"
            style={{ fontFamily: 'var(--ff-head)', fontWeight: 700 }}
          >
            Excel-Native Workflows
          </h3>

          <p className="text-[0.88rem] text-white/55 leading-[1.7]">
            Import your existing spreadsheet data. Export structured reports for PBS, Reliability, FMECA,
            Maintenance, Spares, and Safety. Works the way your team already works.
          </p>

        </div>
      </div>
    </section>

    {/* Video Popup Modal */}
    {isPopupOpen && (
      <div className="fixed inset-0 z-[500] bg-black/90 flex items-center justify-center p-4 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="Close video"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video Container */}
        <div className="relative w-full max-w-[1200px] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <video
            ref={popupVideoRef}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={ramsvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )}
    </>
  );
}