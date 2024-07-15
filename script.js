function updateClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').textContent = timeString;
  
  var year = now.getFullYear(); // 年を取得
  var month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月を取得（0始まりのため +1）
  var day = now.getDate().toString().padStart(2, '0'); // 日を取得
  var dateString = year + '/' + month + '/' + day;
  document.getElementById('date').textContent = dateString; // 日付を表示する要素にセット
}

// 初回の時計更新
updateClock();

// 1秒ごとに時計を更新する
setInterval(updateClock, 1000);
