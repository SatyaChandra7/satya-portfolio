const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/video-edits/mb bloods ad2.mp4');
const outputPath = path.join(__dirname, '../public/video-edits/mbbloods-ad.mp4');

console.log('Starting video compression using ffmpeg-static...');
console.log('Input:', inputPath);
console.log('Output:', outputPath);

const args = [
  '-i', inputPath,
  '-vcodec', 'libx264',
  '-crf', '26',
  '-preset', 'fast',
  '-acodec', 'aac',
  '-b:a', '128k',
  '-movflags', '+faststart',
  '-vf', 'scale=-2:720',
  '-y',
  outputPath
];

const processChild = spawn(ffmpegPath, args);

processChild.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

processChild.stderr.on('data', (data) => {
  const text = data.toString();
  if (text.includes('time=')) {
    const timeMatch = text.match(/time=(\d{2}:\d{2}:\d{2}\.\d{2})/);
    if (timeMatch) {
      console.log(`Progress: time = ${timeMatch[1]}`);
    }
  }
});

processChild.on('close', (code) => {
  console.log(`ffmpeg process exited with code ${code}`);
  if (code === 0) {
    const origStats = fs.statSync(inputPath);
    const newStats = fs.statSync(outputPath);
    console.log(`Compression Successful!`);
    console.log(`Original Size: ${(origStats.size / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`New Size: ${(newStats.size / (1024 * 1024)).toFixed(2)} MB`);
  }
});
