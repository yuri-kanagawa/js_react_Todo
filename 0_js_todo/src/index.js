import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIcompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIcompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);
  //alert(inputText);
  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li);

  //divタグの子要素に各要素設定
  div.appendChild(li);
  // console.log(div);

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIcompleteList(addTarget);
    //todo 内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div を初期化
    addTarget.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIcompleteList(text);
    });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    //alert("削除");
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIcompleteList(deleteTarget);
  });
  //未完了リストに追加
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(div);
  // console.log(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
