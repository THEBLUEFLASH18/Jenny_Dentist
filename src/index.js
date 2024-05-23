import Atropos from 'atropos';
import 'atropos/atropos.css'; 
import './styles.css';
import { Application } from '@splinetool/runtime';


// Initialize Spline Canvas 
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/PNG2kyRn4x1rdnLt/scene.splinecode');

// Initialize Atropos
document.querySelectorAll('.my-atropos').forEach(atroposElement => {
  Atropos({
    el: atroposElement,
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const logoImage = document.getElementById('logo');
  if (logoImage) {
    logoImage.src = jennyLogo;
  } else {
    console.error('Logo image element not found');
  }
});
