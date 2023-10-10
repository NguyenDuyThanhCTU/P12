export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/UI%2Ftau-cao-toc-superdong.jpeg?alt=media&token=956079e5-2c2d-42a0-b732-0c1cb9da0818"
          alt="Introduce Header"
          className="w-[100vw]"
        />
      </div>
      {children}
    </>
  );
}
