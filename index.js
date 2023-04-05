// 加载歌单到 localStorage
function loadMusicList() {
  fetch('./list.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('MyMusicList', JSON.stringify(data));
      alert('歌单加载成功！');
    })
    .catch(error => console.error(error));
}

// 添加歌曲到 localStorage
function addMusic() {
  let input = document.getElementById('musicInput');
  let musicName = input.value.trim();
  if (!musicName) {
    alert('请输入歌曲名称！');
    return;
  }

  let musicList = JSON.parse(localStorage.getItem('MyMusicList')) || [];
  let music = musicList.find(m => m === musicName);
  if (music) {
    alert('歌曲已存在！');
    return;
  }

  musicList.push(musicName);
  localStorage.setItem('MyMusicList', JSON.stringify(musicList));
  alert('歌曲添加成功！');
  input.value = '';
}

// 从 localStorage 删除歌曲
function removeMusic() {
  let input = document.getElementById('musicInput');
  let musicName = input.value.trim();
  if (!musicName) {
    alert('请输入歌曲名称！');
    return;
  }

  let musicList = JSON.parse(localStorage.getItem('MyMusicList')) || [];
  let index = musicList.findIndex(m => m === musicName);
  if (index < 0) {
    alert('歌曲不存在！');
    return;
  }

  musicList.splice(index, 1);
  localStorage.setItem('MyMusicList', JSON.stringify(musicList));
  alert('歌曲删除成功！');
  input.value = '';
}

// 下载 localStorage 中的歌单
function downloadMusicList() {
  let musicList = JSON.parse(localStorage.getItem('MyMusicList'));
  if (!musicList) {
    alert('歌单为空！');
    return;
  }

  let a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(musicList)], {type: 'application/json'}));
  a.download = 'MyMusicList.json';
  a.click();
}
