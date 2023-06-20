import './styles.css';

export const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <svg className="loading-spinner" viewBox="0 0 50 50">
        <circle
          className="spinner-path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
      <p className="loading-text text-white">Carregando...</p>
    </div>
  );
};