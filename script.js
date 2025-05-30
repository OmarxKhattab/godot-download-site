document.getElementById('standardBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/godotengine/godot/releases/download/4.4.1-stable/Godot_v4.4.1-stable_win64.exe.zip';
  link.download = 'Godot_v4.4.1-stable_win64.exe.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.getElementById('dotnetBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/godotengine/godot-builds/releases/download/4.4.1-stable/Godot_v4.4.1-stable_android_editor.apk';
  link.download = 'Godot_v4.4.1-stable_android_editor.apk';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});