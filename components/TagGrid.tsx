import React from 'react';
import styles from '../styles/components/twoLevelSidebarComponents.module.scss';

interface TagGridProps {
  tags: string[];
  onRemove: (tag: string) => void;
}

const TagGrid: React.FC<TagGridProps> = ({ tags, onRemove }) => {
  return (
    <div className={styles.tagGridWrapper}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tagItem}>
          {tag}
          <span onClick={() => onRemove(tag)} className={styles.removeIcon} title="Remove">
            ×
          </span>
        </div>
      ))}
    </div>
  );
};

export default TagGrid;
