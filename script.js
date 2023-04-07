// 获取页面元素
var addSongInput = document.getElementById('add-song-input');
var addSongButton = document.getElementById('add-song-button');
var removeSongButton = document.getElementById('remove-song-button');
var shuffleButton = document.getElementById('shuffle-button');
var shuffleGetMusic = document.getElementById('shuffle-output');
var shuffleText = document.getElementById('shuffleID');
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
      })
      .catch(error => console.error(error));
}

// 从localStorage把歌单下载到本地
// function downloadMusicList() {
//     let musicList = JSON.parse(localStorage.getItem('MyMusicList'));
//     if (!musicList) {
//       alert('歌单为空！');
//       return;
//     }
  
//     let a = document.createElement('a');
//     a.href = URL.createObjectURL(new Blob([JSON.stringify(musicList)], {type: 'application/json'}));
//     a.download = 'MyMusicList.txt';
//     a.click();
// }


// 更新歌曲列表显示 TODO
function updateSongList() {
    var html = '';
    songs.forEach(function(song) {
        html += '<li>' + song + '</li>';
    });
    songList.innerHTML = html;
}

// 随机打乱歌曲列表 
function shuffleSongs() {

    // 取出随即列表，打乱顺序
    let randomMusicList = JSON.parse(localStorage.getItem('shufferList')) || [];
    randomMusicList.sort(() => Math.random() - 0.5);

    // // 得到用户想要的歌曲顺序
    // let songIndex = shuffleText.value.trim();
    // if(!songIndex || songIndex > randomMusicList.length-1) {
    //   songIndex = 0
    // }

    // // 找到这首歌且把这首歌从列表里删除
    // let goalMusic = randomMusicList[songIndex];
    // randomMusicList.splice(songIndex,1);

    // // 刷新数字框的数字
    // let listLength = randomMusicList.length;
    // const shuffleInput = document.getElementById("shuffleID").placeholder = `输入一个数字(1~${listLength-1})`

    // // 更新 list.js 文件中的歌曲列表
    // message.innerHTML = `你随机到了「${goalMusic}」，唱的开心嗷！`;

    localStorage.setItem('shufferList', JSON.stringify(randomMusicList));
}

// 得出随机的歌
function getShuffleMusic() {
    // 取出localStorage里的随机歌单列表
    let randomMusicList = JSON.parse(localStorage.getItem('shufferList')) || [];

    // 得到用户想要的歌曲顺序
    let songIndex = shuffleText.value.trim();
    songIndex -= 1;
    if(songIndex<0 || songIndex > randomMusicList.length-1) {
      songIndex = 0;
      songIndex = Math.floor(Math.random() * randomMusicList.length);
      console.log('第 ', songIndex, " 首歌")
    }

    // // 找到这首歌且把这首歌从列表里删除
    let goalMusic = randomMusicList[songIndex];
    // randomMusicList.splice(songIndex,1);

    // // 刷新数字框的数字
    // let listLength = randomMusicList.length;
    // const shuffleInput = document.getElementById("shuffleID").placeholder = `输入一个数字(1~${listLength-1})`

    // 更新 list.js 文件中的歌曲列表
    message.innerHTML = `你随机到了「${goalMusic}」，唱的开心嗷！`;
    // message.innerHTML = `你随机到了「${goalMusic}」，唱的开心嗷！<br><br>(对啦，这首歌你复制成功了，直接去直播间粘贴吧~)`;
    // event.preventDefault();
    // copyToClipboard(goalMusic);
    copyTheMusic(goalMusic);

    // 歌单放回localStorage
    localStorage.setItem('shufferList', JSON.stringify(randomMusicList));
    shuffleText.value = "";
}

// function copyToClipboard(text) {
//   // 创建一个临时input元素，用于复制内容
//   const tempInput = document.createElement("input");
//   tempInput.value = `点歌 ${text}`;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand("copy"); // 执行复制命令
//   document.body.removeChild(tempInput);
//   // alert('你已经复制成功：' + text);
// }

function copyTheMusic(copyText) {
  // 创建一个临时的textarea元素，设置文本内容并添加到页面中
  // var copyText = '呀哈'
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = '点歌 ' + copyText;
  // tempTextArea.value = copyText;
  document.body.appendChild(tempTextArea);

  // 选中文本内容并复制到剪贴板中
  tempTextArea.select();
  document.execCommand('copy');

  // 删除临时元素并在控制台输出提示信息
  document.body.removeChild(tempTextArea);
  message.innerHTML += '<br><br>这首歌复制好啦，快去直播间粘贴吧~';
  message.innerHTML += '<br>复制内容：「点歌 '+copyText+'」';
  console.log('复制成功：' + copyText);
}



// ----- 触碰区 ----- //
// TODO ↓

// 添加歌曲按钮，加歌
// addSongButton.addEventListener('click', function() {
//     addMusic();
// });

// 删除歌曲按钮，删歌
// removeSongButton.addEventListener('click', function() {
//     removeMusic();
// });

// 添加到localStorage按钮, 把本地文件json的歌添加到localStorage
// storeLocalButton.addEventListener('click', function() {
//     loadMusicList();
//     alert('歌单加载成功！');
// });

// 下载按钮, 从localStorage把歌单下载到本地
// downloadButton.addEventListener('click', function() {
//     downloadMusicList();
// })

// 输入框按回车出发，   TODO    TODO
// addSongInput.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         addSong();
//     }
// });

// 点一下「出！」按钮，得到这个位置的歌
shuffleGetMusic.addEventListener('click', function() {
  getShuffleMusic();
  // console.log('试试');
})
// 点一下「打乱」按钮，顺序打乱
shuffleButton.addEventListener('click', function() {
    shuffleSongs();
    alert('歌曲顺序打乱啦~');
});

// 「随机歌的框框」里，按一下回车触发，出一首歌，删一首歌
shuffleText.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      console.log('啊哈！随机啦！');
      getShuffleMusic();
  }
});


// ----- 加载区 ----- //
// 先加载一次歌单到LocalStorage里去，省去开头手动
loadMusicList();
// 先更新随即列表里显示有多少歌
function resetMusicLength() {
  let musicList = JSON.parse(localStorage.getItem('shufferList')) || [];
  let shuffleInput = document.getElementById("shuffleID").placeholder = `输入一个数字(1~${musicList.length})`
}
resetMusicLength()