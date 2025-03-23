import React from 'react';
import { FaTag } from 'react-icons/fa';

export default function Tag({ tag, activeTag, handleTagFilter }) {
  return (
    <div
      onClick={() => handleTagFilter(tag)}
      className={`flex items-center space-x-2 cursor-pointer hover:text-blue-600 ${activeTag === tag ? 'text-blue-600 font-semibold' : ''}`}
    >
      <FaTag className="text-gray-500" />
      <span>{tag}</span>
    </div>
  );
}
