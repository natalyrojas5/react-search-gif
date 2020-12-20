import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Spinner } from './Spinner';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="grid_title">{category}</h2>
      {loading && <Spinner />}

      {images.length > 0 && !loading && (
        <div className="card_grid">
          {images.map((img) => (
            <GifGridItem
              key={img.id}
              // Enviando las propiedades de img
              {...img}
            />
          ))}
        </div>
      )}
      {images.length === 0 && !loading && <p>No se encontraron resultados</p>}
    </>
  );
};
