import React from 'react';
import '../../scss/TodoHeader.scss';

const TodoHeader = ({ count }) => {
  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit', // 숫자앞에 0 붙어있게하는것
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long', // 요일까지나오게
  });

  return (
    <header>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>
        {count() === 0 ? (
          <span className='none'>
            할 일을 추가해주세요!
          </span>
        ) : (
          <span>할 일 {count()}개 남음</span>
        )}
      </div>
    </header>
  );
};

export default TodoHeader;
