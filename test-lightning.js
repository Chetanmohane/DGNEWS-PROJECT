
try {
    const lightning = require('lightningcss');
    console.log('LightningCSS loaded successfully');
    console.log('Version:', lightning.browserslistToTargets ? 'OK' : 'FAIL');
} catch (e) {
    console.error('Error loading LightningCSS:', e.message);
    console.error('Stack:', e.stack);
}
