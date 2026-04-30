interface Props {
  onClose: () => void;
}

export default function ModalImage({ onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      {/* CONTENEDOR IMAGEN */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
      >
        <img
          src="/public/imCard.jpeg"
          alt="imagen modal"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}