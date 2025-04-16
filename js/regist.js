function sendit() {
  const userid = document.getElementById("userid");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }

  if (!expIdText.test(userid.value)) {
    alert("아이디 4자이상 20자이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  return true;
}
