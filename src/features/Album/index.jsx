import React from 'react';
import PropType from 'prop-types';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhac 1',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg',
    },
    {
      id: 2,
      name: 'Nhac 2',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg',
    },
    {
      id: 3,
      name: 'Nhac 3',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
    },
  ];

  return (
    <div>
      <h1>Danh sach nhac</h1>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
