import React, { useEffect } from 'react';
import './style.css';

const Fractal = () => {
    return (
        <div>


<canvas class="col-12" id="my_canvas" width="1000" height="800"></canvas>

 

{/* 
<!-- 
color --> */}
<section class=" row" id="control-panel">

<div class="col-6" id="right-controls">
<dropdown></dropdown>
{/* <!-- width length angle 
 right orient="vertical" --> */}
<p>Right side of trunk</p>
<label for=""> branch width (between 0.8 and 0.9):
    <input value="0.8" type="range" name="" min="0.80" max="0.90" step='0.01' id="r-w-branch" value="0.8" list="angle-tickmarks"> 
</label>
<label for=""> branch length (between 0.8 and 0.9):
    <input value="0.8" type="range" name="" min="0.80" max="0.90" step='0.01' value="0.8" id="r-l-branch">
</label>
<label for=""> angle (between 0 and 500):
    <input type="range" name="" min="0" max="50" value="15" id="r-a-branch">
</label>

{/* <!-- <datalist id="angle-tickmarks">
    <option value="0.90" label="0.9"></option>
    <option value="0.85" label="0.85"></option>
    <option value="0.8" label="0.8"></option>
</datalist> --> */}
</div>

<div  class="col-6" id="left-controls">
{/* <!-- left --> */}
<p>Left side of trunk</p>
<label for=""> branch width (between 0.8 and 0.9):
    <input value="0.8" type="range" name="" min="0.80" max="0.90" step='0.01' value="0.8" id="l-w-branch">
</label>
<label for=""> branch length (between 0.8 and 0.9):
    <input value="0.8" type="range" name="" min="0.80" max="0.90" step='0.01' id="l-l-branch" value="0.8" step="any">
</label>
<label for=""> angle (between 0 and 50):
    <input type="range" name="" min="0" max="50" value="15" id='l-a-branch'>
</label>
</div>

<div class="col-12" id="mid-controls">
<p>Special params</p>




<label for=""> rotation (between 0 and 360 degrees): <input  type="range" name="" min="0" max="360" value="180" id="rotate">
</label>


{/* 
<!-- 
<label for=""> matrix param?? (between 0 and 50):
    <input type="range" name="" min="0" max="50" id="matrix">
</label>
<label for=""> interations (between 8 and 10): <input type="range" name="" min="8" max="10" value="10" id="iterations">
</label> --> */}
{/* <!-- <label for=""> (between 0 and 50): <input type="range" name="" min="0" max="50" id=""> </label> --> */}
<button id="render" >Render Fractal</button>
</div>

</section>


        </div>
    )
}

export default Fractal;