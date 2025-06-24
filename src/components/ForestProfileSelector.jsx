import styles from './ForestProfileSelector.module.css';


export default function ForestProfileSelector({ profiles, selected, onSelect }) {
  return (
    <div className={styles.responsiveGrid}>
      {profiles.map(profile => (
        <div
          key={profile.id}
          className={`${styles.gridItem} ${selected?.id === profile.id ? 'border-blue-500' : ''}`}
          onClick={() => onSelect?.(profile)}
        >
          <img src={profile.image} alt={profile.name} className="h-32 w-full object-cover mb-2" />
          <h3 className="font-bold">{profile.name}</h3>
          <p>{profile.description}</p>
        </div>
      ))}
    </div>
  );
}