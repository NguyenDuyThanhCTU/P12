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
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVrkOp0omYxaxs3IQspJRZwra0pev3PIavTd3jlZ3zbspUtMofPYU5fb_csTX0pXvVpFQ2oRpwJO9qfgRRYTVHXPvuY1TnCVHWe4DvffScCpsimkjCfhmN6PksnzGaeZjg-KPkl7n2iuLsbhCQOQIJicvt6aVrnw-CSge3oUcpen46NFX70GLLzWx0/s16000/Tau-cao-toc-hai-than-Trung-Trac.JPG"
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover"
        />
      </div>
      {children}
    </>
  );
}
