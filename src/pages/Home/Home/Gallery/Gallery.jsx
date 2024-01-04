import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Gallery = () => {
  return (
    <>
      {/* Section Title */}
      <SectionTitle
        heading={"Our Gallary"}
        text={"Discove Our ACraft Photo Gallery"}
      />

      {/* Photos */}
      <div className="columns-1 md:columns-2 lg:columns-4 space-y-3 gap-4 pt-4 px-5 mx-4">
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/hR3Yf8p/photo-1.jpg"
            className="w-full"
            alt="gallery-photo-one"
          >
            <img
              src="https://i.ibb.co/hR3Yf8p/photo-1.jpg"
              className="w-full"
              alt="gallery-photo-one"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/Yk3pXzs/photo-2.jpg"
            className="w-full"
            alt="gallery-photo-two"
          >
            <img
              src="https://i.ibb.co/Yk3pXzs/photo-2.jpg"
              className="w-full"
              alt="gallery-photo-two"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/7KjJ49Z/photo-3.jpg"
            className="w-full"
            alt="gallery-photo-three"
          >
            <img
              src="https://i.ibb.co/7KjJ49Z/photo-3.jpg"
              className="w-full"
              alt="gallery-photo-three"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/p0psSHZ/photo-4.jpg"
            className="w-full"
            alt="gallery-photo-four"
          >
            <img
              src="https://i.ibb.co/p0psSHZ/photo-4.jpg"
              className="w-full"
              alt="gallery-photo-four"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/BBbPmZC/photo-5.jpg"
            className="w-full"
            alt="gallery-photo-five"
          >
            <img
              src="https://i.ibb.co/BBbPmZC/photo-5.jpg"
              className="w-full"
              alt="gallery-photo-five"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/pzydBC8/photo-6.jpg"
            className="w-full"
            alt="gallery-photo-six"
          >
            <img
              src="https://i.ibb.co/pzydBC8/photo-6.jpg"
              className="w-full"
              alt="gallery-photo-six"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/p1fQ9df/photo-7.jpg"
            className="w-full"
            alt="gallery-photo-seven"
          >
            <img
              src="https://i.ibb.co/p1fQ9df/photo-7.jpg"
              className="w-full"
              alt="gallery-photo-seven"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://i.ibb.co/V2zsZKL/photo-8.jpg"
            className="w-full"
            alt="gallery-photo-eight"
          >
            <img
              src="https://i.ibb.co/V2zsZKL/photo-8.jpg"
              className="w-full"
              alt="gallery-photo-eight"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
    </>
  );
};

export default Gallery;
