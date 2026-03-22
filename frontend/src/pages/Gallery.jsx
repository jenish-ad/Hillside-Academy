import { useEffect, useState } from "react";
import { getGalleryAlbums, getGalleryAlbum } from "../services/api";
import { mediaUrl } from "../services/media";
import SectionHeader from "../components/common/SectionHeader";
import useTitle from "../hooks/useTitle";


export default function Gallery() {
  useTitle("Gallery");
  const [albums, setAlbums]           = useState([]);
  const [selected, setSelected]       = useState(null);
  const [albumData, setAlbumData]     = useState(null);
  const [lightbox, setLightbox]       = useState(null);

  useEffect(() => {
    getGalleryAlbums()
      .then((r) => setAlbums(r.data?.results ?? r.data))
      .catch(() => {});
  }, []);

  const openAlbum = (album) => {
    setSelected(album);
    getGalleryAlbum(album.id)
      .then((r) => setAlbumData(r.data))
      .catch(() => {});
  };

  return (
    <main className="bg-amber-50 min-h-screen">

      {/* Banner */}
      <section className="bg-blue-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-extrabold text-white">Gallery</h1>
          <p className="mt-2 text-blue-200 text-sm">Home &rsaquo; Gallery</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Album view */}
          {!selected ? (
            <>
              <SectionHeader
                title="Photo Gallery"
                subtitle="Memories from events, activities, and daily life at Hillside Academy."
              />
              {albums.length === 0 ? (
                <p className="text-center text-gray-400 text-sm py-20">
                  No albums yet. Add them from the Admin Panel.
                </p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {albums.map((album) => (
                    <button
                      key={album.id}
                      onClick={() => openAlbum(album)}
                      className="group rounded-2xl overflow-hidden border
                                 border-yellow-200 bg-white hover:shadow-md
                                 transition text-left"
                    >
                      {album.cover_image ? (
                        <img loading="lazy"
                          src={mediaUrl(album.cover_image)}
                          alt={album.title}
                          className="w-full h-48 object-cover group-hover:scale-105
                                     transition duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-yellow-100 flex items-center
                                        justify-center text-yellow-400 text-sm">
                          No Cover
                        </div>
                      )}
                      <div className="p-4">
                        <p className="font-bold text-blue-900">{album.title}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {album.image_count} photos
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Album detail */
            <>
              <button
                onClick={() => { setSelected(null); setAlbumData(null); }}
                className="mb-6 flex items-center gap-2 text-blue-900
                           font-semibold text-sm hover:text-yellow-600 transition"
              >
                &#8592; Back to Albums
              </button>
              <h2 className="text-2xl font-extrabold text-blue-900 mb-8">
                {selected.title}
              </h2>
              {!albumData ? (
                <div className="flex justify-center py-20">
                  <div className="w-8 h-8 border-4 border-yellow-400
                                  border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {albumData.images.map((img) => (
                    <button
                      key={img.id}
                      onClick={() => setLightbox(img)}
                      className="rounded-xl overflow-hidden border border-yellow-200
                                 hover:shadow-md transition"
                    >
                      <img loading="lazy"
                        src={mediaUrl(img.image)}
                        alt={img.caption}
                        className="w-full h-40 object-cover hover:scale-105
                                   transition duration-300"
                      />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center
                     justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img loading="lazy"
            src={mediaUrl(lightbox.image)}
            alt={lightbox.caption}
            className="max-w-full max-h-[90vh] rounded-2xl"
          />
        </div>
      )}

    </main>
  );
}