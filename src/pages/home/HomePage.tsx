import { useDispatch, useSelector } from 'react-redux';
import { allActions } from '../../store/slices';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((rootState) => (rootState as any)?.user);
  const { logUserName } = allActions;
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome To ERP {user}</p>
      <button
        onClick={() => {
          dispatch(logUserName());
        }}
      >
        Change State
      </button>
    </div>
  );
};

export default HomePage;
