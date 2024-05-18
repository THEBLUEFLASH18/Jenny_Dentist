import Atropos from 'atropos';
import 'atropos/atropos.css'; 
import './styles.css'
import { Application } from '@splinetool/runtime';




// Initialize

// Spline Canvas 
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/PNG2kyRn4x1rdnLt/scene.splinecode');


// Atropos Settings 

const myAtropos = Atropos({
  el: '.my-atropos',
});

document.querySelectorAll('.my-atropos').forEach(atroposElement => {
  Atropos({
    el: atroposElement,
  });
});
