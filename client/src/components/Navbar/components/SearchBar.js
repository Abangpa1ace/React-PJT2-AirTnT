import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className='search-bar-container'>
      <div className='input1'>
        <span>위치</span>
        <input type="text" placeholder="어디로 여행가세요?" />
      </div>
      <div className='input2 focus'>
        <span>체크인</span>
        <p>날짜 추가</p>
      </div>
      <div className='input3'>
        <span>체크아웃</span>
        <p>날짜 추가</p>
      </div>
      <div className='input4'>
        <span>인원</span>
        <p>게스트 추가</p>
      </div>
    </div>
  )
}
