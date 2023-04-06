// 获取四个分类列表
var downloadButton = document.getElementById('refresh-list');
var oneCharList = document.querySelector('.one-char-list');
var twoCharList = document.querySelector('.two-char-list');
var threeCharList = document.querySelector('.three-char-list');
var fourCharList = document.querySelector('.four-char-list');
var fiveCharList = document.querySelector('.five-char-list');
var sixCharList = document.querySelector('.six-char-list');
var sevenCharList = document.querySelector('.seven-char-list');
var eightCharList = document.querySelector('.eight-char-list');
var otherCharList = document.querySelector('.other-char-list');

// 遍历歌曲列表，将歌曲按照长度分类添加到相应的列表中
songList.forEach(function(song) {
    // 获取歌曲长度
    var len = song.length;
    // 根据歌曲长度添加到相应的列表中
    switch (len) {
        case 1:
            oneCharList.innerHTML += "<li id='one-word-list'>" + song + '</li>';
            break;
        case 2:
            twoCharList.innerHTML += "<li id='two-word-list'>" + song + '</li>';
            // twoCharList.innerHTML += song + ' ';
            break;
        case 3:
            threeCharList.innerHTML += "<li id='three-word-list'>" + song + '</li>';
            // threeCharList.innerHTML += song + ' ';
            break;
        case 4:
            fourCharList.innerHTML += "<li id='four-word-list'>" + song + '</li>';
            // fourCharList.innerHTML += song + ' ';
            break;
        case 5:
            fiveCharList.innerHTML += "<li id='five-word-list'>" + song + '</li>';
            break;
        case 6:
            sixCharList.innerHTML += "<li id='six-word-list'>" + song + '</li>';
            break;
        case 7:
            sevenCharList.innerHTML += "<li id='seven-word-list'>" + song + '</li>';
            break;
        case 8:
            eightCharList.innerHTML += "<li id='eight-word-list'>" + song + '</li>';
            break;
        // default:
        //     console.log(song);
        //     otherCharList.innerHTML += "<li id='other-word-list'>" + song + '</li>';
        //     break;
        default:
            console.log(song);
            otherCharList.innerHTML += "<li id='other-word-list'>" + song + '</li>';
            break;
    }
});


function refreshList() {
    // 重置所有歌单
    oneCharList.innerHTML = '';
    twoCharList.innerHTML = '';
    threeCharList.innerHTML = '';
    fourCharList.innerHTML = '';
    fiveCharList.innerHTML = '';
    sixCharList.innerHTML = '';
    sevenCharList.innerHTML = '';
    eightCharList.innerHTML = '';

    var musicList = JSON.parse(localStorage.getItem('MyMusicList')) || [];
    musicList.forEach(function(song) {
        // 获取歌曲长度
        var len = song.length;
        
        // 根据歌曲长度添加到相应的列表中
        switch (len) {
            case 1:
                oneCharList.innerHTML += "<li id='one-word-list'>" + song + '</li>';
                break;
            case 2:
                twoCharList.innerHTML += "<li id='two-word-list'>" + song + '</li>';
                // twoCharList.innerHTML += song + ' ';
                break;
            case 3:
                threeCharList.innerHTML += "<li id='three-word-list'>" + song + '</li>';
                // threeCharList.innerHTML += song + ' ';
                break;
            case 4:
                fourCharList.innerHTML += "<li id='four-word-list'>" + song + '</li>';
                // fourCharList.innerHTML += song + ' ';
                break;
            case 5:
                fiveCharList.innerHTML += "<li id='five-word-list'>" + song + '</li>';
                break;
            case 6:
                sixCharList.innerHTML += "<li id='six-word-list'>" + song + '</li>';
                break;
            case 7:
                sevenCharList.innerHTML += "<li id='seven-word-list'>" + song + '</li>';
                break;
            case 8:
                eightCharList.innerHTML += "<li id='eight-word-list'>" + song + '</li>';
                break;
            default:
                console.log(song);
                otherCharList.innerHTML += "<li id='other-word-list'>" + song + '</li>';
                break;
        }
    });
}

// 刷新界面
downloadButton.addEventListener('click', function() {
    refreshList();
});