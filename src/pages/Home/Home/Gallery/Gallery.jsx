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
      <div className="columns-1 md:columns-2 lg:columns-4 space-y-3 gap-4 py-12 px-5 lg:mx-32">
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            className="w-full"
            alt="gallery-photo-one"
          >
            <img
              src="https://images.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              className="w-full"
              alt="gallery-photo-one"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1475746812396-2b046c18be0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            className="w-full"
            alt="gallery-photo-two"
          >
            <img
              src="https://images.unsplash.com/photo-1475746812396-2b046c18be0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              className="w-full"
              alt="gallery-photo-two"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1569041032620-2d0ee0b7b673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
            alt="gallery-photo-three"
          >
            <img
              src="https://images.unsplash.com/photo-1569041032620-2d0ee0b7b673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full"
              alt="gallery-photo-three"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80"
            className="w-full"
            alt="gallery-photo-four"
          >
            <img
              src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80"
              className="w-full"
              alt="gallery-photo-four"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80"
            className="w-full"
            alt="gallery-photo-five"
          >
            <img
              src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80"
              className="w-full"
              alt="gallery-photo-five"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="w-full"
            alt="gallery-photo-six"
          >
            <img
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="w-full"
              alt="gallery-photo-six"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
            alt="gallery-photo-seven"
          >
            <img
              src="https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full"
              alt="gallery-photo-seven"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1571415822965-c563f4535eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"
            className="w-full"
            alt="gallery-photo-eight"
          >
            <img
              src="https://images.unsplash.com/photo-1571415822965-c563f4535eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"
              className="w-full"
              alt="gallery-photo-eight"
            />
          </PhotoView>
        </PhotoProvider>
        <PhotoProvider>
          <PhotoView
            src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full"
            alt="gallery-photo-nine"
          >
            <img
              src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-full"
              alt="gallery-photo-nine"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
    </>
  );
};

export default Gallery;
