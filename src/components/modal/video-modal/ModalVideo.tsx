interface Props {
  videoId: string | null;
  onClose: () => void;
}

export default function ModalVideo({ videoId, onClose }: Props) {
  if (!videoId) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      {/* VIDEO CONTAINER */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
      >
        <video
          className="w-full h-full"
          controls
          autoPlay
        >
          <source src='VideoPortfolio.mp4' type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      </div>
    </div>
  );
}