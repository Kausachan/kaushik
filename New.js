import React from 'react';   
import './newyear.css';

const New = () =>{
	return (
		<div>
			<div className="feliz">Happy new year</div>
			<div className="ano_novo">
			  <span>202</span>
			  <span className="seis">0</span>
			  <span className="sete">1</span>
			  <div className="balao"></div>
			</div>
			<div className="fogos">
			  <div className="f1">
			    <span><i></i></span>
			    <span><i></i></span>
			    <span><i></i></span>
			  </div>
			  <div className="f2">
			    <span><i></i></span>
			    <span><i></i></span>
			    <span><i></i></span>
			  </div>
			  <div className="f3">
			    <span><i></i></span>
			    <span><i></i></span>
			    <span><i></i></span>
			  </div>
			  <div className="f4">
			    <span><i></i></span>
			    <span><i></i></span>
			    <span><i></i></span>
			  </div>
			</div>
		</div>
		)
}

export default New;