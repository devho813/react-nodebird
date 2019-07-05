import React, {useState, useMemo} from 'react';

const Profile = () => {
  const [number, setNumber] = useState(0);

  const onClickNumberButton = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <div>내 프로필</div>
      <button onClick={onClickNumberButton}>버튼</button>
    </>
  )
}

export default Profile;
