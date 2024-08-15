/** @format */

import './App.css';
import UseCallback from './hooks/UseCallback';
import UseContext from './hooks/UseContext';
import UseEffect from './hooks/UseEffect';
import UseImperativeHandle from './hooks/UseImperativeHandle';
import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseMemo from './hooks/UseMemo';
import UseReducer from './hooks/UseReducer';
import UseRef from './hooks/UseRef';
import UseRef2 from './hooks/UseRef2';
import UseState from './hooks/UseState';
import UseId from './hooks/UseId';
import CustomHook from './custom-hooks/CustomHook';
import UseDebugValue from './hooks/UseDebugValue';

function App() {
	return (
		<div>
			{/* <UseState /> */}
			{/* <UseReducer /> */}
			{/* <UseEffect /> */}
			{/* <UseLayoutEffect /> */}
			{/* <UseContext /> */}
			{/* <UseRef /> */}
			{/* <UseRef2 /> */}
			{/* <UseImperativeHandle /> */}
			{/* <UseMemo /> */}
			{/* <UseCallback /> */}
			{/* <UseId/> */}
			<CustomHook />
			{/* <UseDebugValue /> */}
		</div>
	);
}

export default App;