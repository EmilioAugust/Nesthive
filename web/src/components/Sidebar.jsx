import React, { useState, useEffect } from 'react'
import { getTagColor } from '../utils/helpers'

const Sidebar = ({ 
  allTags, 
  bookmarks, 
  currentFilter, 
  isFavoritesActive,
  onFilterChange, 
  onShowAllBookmarks, 
  onShowFavorites 
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Следим за изменением темы
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.body.classList.contains('dark'))
    }
    
    // Проверяем начальное состояние
    checkTheme()
    
    // Создаем MutationObserver для отслеживания изменений класса на body
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  const getTagCount = (tag) => {
    return bookmarks.filter(bookmark => 
      bookmark.tags && bookmark.tags.includes(tag)
    ).length
  }

  const fontFamily = "'Google Sans Flex', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

  return (
    <div className="sidebar" style={{ fontFamily }}>
      <div className="logo">
        <div 
          className="logo-icon"
          style={{
            width: '64px',
            height: '64px',
            background: 'none',
            backgroundImage: `url(${isDarkMode ? '/logo-dark.png' : '/logo-light.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="logo-text">
          <h3 style={{ fontFamily, fontSize: '16px' }}>Nesthive</h3>
          <p style={{ fontFamily, fontSize: '12px', color: '#8a94a6' }}>Bookmark Manager</p>
        </div>
      </div>

      {/* Остальной код sidebar без изменений */}
      <div className="menu">
        <div 
          className={`menu-item ${!isFavoritesActive && currentFilter === 'all' ? 'active' : ''}`}
          onClick={onShowAllBookmarks}
          style={{ fontFamily }}
        >
          <div className="icon"></div>
          All Bookmarks
        </div>
        <div 
          className={`menu-item ${isFavoritesActive ? 'active' : ''}`}
          onClick={onShowFavorites}
          style={{ fontFamily }}
        >
          <div className="icon"></div>
          Favorites
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <span style={{ fontFamily, fontSize: '12px', color: '#8a94a6' }}>TAGS</span>
        </div>

        <div className="tags-list">
          {allTags.length === 0 ? (
            <div style={{ padding: '10px', color: '#8a94a6', fontSize: '12px', fontFamily }}>
              No tags yet
            </div>
          ) : (
            allTags.map(tag => (
              <div 
                key={tag}
                className="tag"
                style={{ cursor: 'pointer', fontFamily, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 2px', fontSize: '14px', color: '#4a5568' }}
                onClick={() => onFilterChange(tag)}
              >
                <div className="tag-left" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div 
                    className="dot" 
                    style={{ 
                      background: getTagColor(tag),
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%'
                    }} 
                  />
                  <span style={{ fontFamily }}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
                </div>
                <span style={{ fontFamily }}>{getTagCount(tag)}</span>
              </div>
            ))
          )}
        </div>

        <div className="info-card" style={{ fontFamily }}>
          <div className="info-icon">🪹</div>
          <h4 style={{ fontFamily, fontSize: '14px', fontWeight: 600 }}>Keep everything in one nest.</h4>
          <p style={{ fontFamily, fontSize: '12px', color: '#8a94a6' }}>Add bookmarks and organize</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar