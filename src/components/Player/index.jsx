import { useState } from 'react';

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState();
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };
  let buttonLabel = isEditing ? 'Save' : 'Edit';

  const handleOnChange = (event) => {
    setPlayerName(event.target.value);
  };

  const classNames = isActive ? 'active' : '';

  return (
    <li className={classNames}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleOnChange}
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{buttonLabel}</button>
    </li>
  );
};

export default Player;
