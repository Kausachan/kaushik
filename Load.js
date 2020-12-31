import React  from 'react';
import './load.css';

const Load = ()=>{
	return (
	<div>
		<div class="loader">
		    <div class="square"></div>
		    <div class="path">
		        <div></div>
		        <div></div>
		        <div></div>
		        <div></div>
		        <div></div>
		        <div></div>
		        <div></div>
		    </div>
		  <p class="text-load">Loading</p>
	    </div>
	</div>
		)
}

export default Load;