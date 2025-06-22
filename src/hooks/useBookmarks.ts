
import { useState, useEffect } from 'react';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('hr-bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (employeeId: string) => {
    const newBookmarks = bookmarks.includes(employeeId)
      ? bookmarks.filter(id => id !== employeeId)
      : [...bookmarks, employeeId];
    
    setBookmarks(newBookmarks);
    localStorage.setItem('hr-bookmarks', JSON.stringify(newBookmarks));
  };

  return { bookmarks, toggleBookmark };
};
