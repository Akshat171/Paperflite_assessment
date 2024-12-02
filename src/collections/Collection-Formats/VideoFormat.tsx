
const VideoFormat = ({ src }: { src: string }) => {
  return (
    <>
      <video src={src} className="w-full h-full object-cover" controls />
    </>
  );
};

export default VideoFormat;
