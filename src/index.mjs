import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").Value;
  alert(inputText);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
