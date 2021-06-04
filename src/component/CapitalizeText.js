import React from 'react';

const CapitalizeText = (props) => {
	let text 
	if(props.capital && props.capital==="ucword"){
		text = props.children.slice(0,1).toUpperCase() + props.children.slice(1, props.children.length);
	}else{
  text = props.children.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});
	}

  return (<>
  {text}
  </>
  );
};

export default CapitalizeText;