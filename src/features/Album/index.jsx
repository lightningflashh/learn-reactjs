import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

const AlbumFeature = () => {
    const albumList = [
        {
            id: 1,
            name: 'Chịu (Single)',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/f/1/2/cf120892ab8c7e46a001ba462e65f6c2.jpg'
        },

        {
            id: 2,
            name: 'Thanh Xuân Và Nuối Tiếc (Single)',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/6/d/7/66d712eaeda5161fe5d6308558440905.jpg'
        },

        {
            id: 3,
            name: 'Có Những Ngày Mưa Như Thế (Single)',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/c/1/fdc129dd459dbf4f503c5e871b112e62.jpg'
        }
    ];
    return (
        <div>
            <h2>You like it?</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
};

export default AlbumFeature;
