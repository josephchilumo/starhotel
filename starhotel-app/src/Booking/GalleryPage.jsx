import React, { useState } from "react";

function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210a0",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    "https://images.unsplash.com/photo-1551887373-6b6b6b6b6b6b",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold">Our Gallery</h1>
        <p className="text-gray-600 mt-2">
          A glimpse of luxury, comfort, and elegance
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={img}
              alt="Gallery"
              onClick={() => setSelectedImage(img)}
              className="w-full h-64 object-cover cursor-pointer transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-4xl max-h-[80vh] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}

export default GalleryPage;