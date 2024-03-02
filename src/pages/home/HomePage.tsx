import { useDispatch, useSelector } from 'react-redux';
import { allActions } from '../../store/slices';
import LoginPage from '../login/login';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((rootState) => rootState?.user);
  let hey;
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
