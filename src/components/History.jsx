const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove === index ? 'active' : ''}`}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'Go to Game Start' : `Go to Move #${index}`}
            </button>
          </li>
        ))}
        {console.log(history)}
      </ul>
    </div>
  );
};

export default History;
