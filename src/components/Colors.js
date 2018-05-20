import React from 'react';

const Colors = ({colorChange}) => {
	return (
		<div className="ma8 dim">
			<input id="color1" className="br3 br--left pa1" type="color"  defaultValue = "#FFDF00" onChange = {colorChange}/>
			<input id="color2" className="br3 br--right pa1" type="color" defaultValue = "#00C032" onChange = {colorChange}/>
		</div>
	);
}

export default Colors;