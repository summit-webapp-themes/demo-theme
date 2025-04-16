'use client';
import TagGrid from '../../../TagGrid';
import styles from '../../../../styles/components/twoLevelSidebarComponents.module.scss';

interface InputProps {
  label: string;
  tags: string[];
  setTags: (tags: string[]) => void;
}

function Input({ label, tags, setTags }: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      e.currentTarget.value = '';
    }
  };

  const handleRemove = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.label}>{label}</div>
      <div className={styles.inputContainer}>
        <div className={styles.inputBox}>
          <input type="text" placeholder="Search or select" onKeyDown={handleKeyDown} className={styles.inputField} />
        </div>
        <TagGrid tags={tags} onRemove={handleRemove} />
      </div>
    </div>
  );
}

export default Input;
