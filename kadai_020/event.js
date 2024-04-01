// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行し、'ボタンをクリックしました'と表示する
btn.addEventListener( 'click', () => {

  // li要素を新しく追加する
  const childList = document.createElement('li')

  // li要素にテキストを追加する
  childList.textContent = 'ボタンをクリックしました';

  // 作成したli要素をul要素の子要素として末尾に追加する
  text.appendChild(childList);

  text.textContent = 'ボタンをクリックしました';

});