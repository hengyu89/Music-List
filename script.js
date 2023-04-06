// 获取页面元素
var addSongInput = document.getElementById('add-song-input');
var addSongButton = document.getElementById('add-song-button');
var removeSongButton = document.getElementById('remove-song-button');
var shuffleButton = document.getElementById('shuffle-button');
var storeLocalButton = document.getElementById('store-to-local');
var downloadButton = document.getElementById('download-to-local');
var message = document.getElementById('message');
var songList = document.getElementById('song-list');

// 添加歌曲到列表
function addMusic() {
    let input = addSongInput;
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


// 从列表中删除歌曲
function removeMusic() {
    let input = addSongInput;
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

// 把本地文件json的歌添加到localStorage
function loadMusicList() {
    fetch('list.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('MyMusicList', JSON.stringify(data));
        localStorage.setItem('shufferList', JSON.stringify(data));
        alert('歌单加载成功！');
      })
      .catch(error => console.error(error));
}

// 从localStorage把歌单下载到本地
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


// 更新歌曲列表显示 TODO
function updateSongList() {
    var html = '';
    songs.forEach(function(song) {
        html += '<li>' + song + '</li>';
    });
    songList.innerHTML = html;
}

// 随机打乱歌曲列表 
//                  TODO
function shuffleSongs() {
    songs.sort(function() {
        return 0.5 - Math.random();
    });
    // 更新歌曲列表显示
    updateSongList();
    // 更新 list.js 文件中的歌曲列表
    list.setItems(songs);
    message.innerHTML = '';
}

// TODO ↓

// 添加歌曲按钮，加歌
addSongButton.addEventListener('click', function() {
    addMusic();
});

// 删除歌曲按钮，删歌
removeSongButton.addEventListener('click', function() {
    removeMusic();
});

// 添加到localStorage按钮, 把本地文件json的歌添加到localStorage
storeLocalButton.addEventListener('click', function() {
    loadMusicList();
});

// 下载按钮, 从localStorage把歌单下载到本地
downloadButton.addEventListener('click', function() {
    downloadMusicList();
})

// 输入框按回车出发，   TODO    TODO
addSongInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addSong();
    }
});

// 监听打乱歌曲列表按钮的点击事件
shuffleButton.addEventListener('click', function() {
    shuffleSongs();
});