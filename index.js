const lightColorInput = document.getElementById('light-color');
const headerTitle = document.querySelector('header h1');
const body = document.body;

// Update background color and adjust header text for visibility
lightColorInput.addEventListener('input', () => {
    const color = lightColorInput.value;
    body.style.backgroundColor = color;

    // Determine text color for better contrast
    const [r, g, b] = [
        parseInt(color.slice(1, 3), 16),
        parseInt(color.slice(3, 5), 16),
        parseInt(color.slice(5, 7), 16)
    ];
    const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

    headerTitle.style.color = luminance > 0.5 ? '#000' : '#FFF';
});

document.querySelectorAll('.appliance-card').forEach((card) => {
    
    // Toggle ON/OFF
    const toggle = card.querySelector('.toggle-switch');
    if (toggle) {
      toggle.addEventListener('change', () => {
        const applianceName = card.querySelector('h2').textContent;
        const state = toggle.checked ? 'ON' : 'OFF';
        alert(`${applianceName} turned ${state}`);
      });
    }
  
    // Fan speed adjustment
    const fanSpeed = card.querySelector('#fan-speed');
    if (fanSpeed) {
      fanSpeed.addEventListener('input', () => {
        console.log(`Fan speed set to ${fanSpeed.value}`);
      });
    }
  
    // AC temperature adjustment
    const acTemp = card.querySelector('#ac-temp');
    if (acTemp) {
      acTemp.addEventListener('input', () => {
        console.log(`AC temperature set to ${acTemp.value}°C`);
      });
    }
  
    // Light brightness adjustment
    const lightBrightness = card.querySelector('#light-brightness');
    if (lightBrightness) {
      lightBrightness.addEventListener('input', () => {
        console.log(`Light brightness set to ${lightBrightness.value}%`);
      });
    }
  
    // Light color adjustment
    const lightColor = card.querySelector('#light-color');
    if (lightColor) {
      lightColor.addEventListener('input', () => {
        console.log(`Light color changed to ${lightColor.value}`);
      });
    }
  });  