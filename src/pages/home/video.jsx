import { Video } from "../../assets/images";

export default function VideoSection() {
  return (
    <section className="w-full h-[500px] flex justify-center items-center bg-black">
      <div className="w-full h-full ">
        <video
          src={Video}
          controls
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
