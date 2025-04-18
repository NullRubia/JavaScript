window.onload = function () {
  const ssn1 = document.getElementById("ssn1");
  ssn1.addEventListener("keyup", () => {
    if (ssn1.value.length >= 6) {
      document.getElementById("ssn2").focus();
    }
  });

  const ssn = document.querySelectorAll(".ssn");
  ssn.forEach((s) => {
    s.addEventListener("input", () => {
      document.getElementById("ssncheck").value = "n";
    });
  });
};

function checkssn() {
  const ssn1 = document.getElementById("ssn1");
  const ssn2 = document.getElementById("ssn2");
  const ssn = String(ssn1.value) + String(ssn2.value);
  const checknum = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < checknum.length; i++) {
    sum += parseInt(ssn[i]) * checknum[i];
  }
  sum = (11 - (sum % 11)) % 10;
  if (parseInt(ssn[12]) == sum) {
    alert("유효한 주민등록번호입니다");
    document.getElementById("ssncheck").value = "y";
  } else {
    alert("유효하지 않은 주민등록번호입니다");
  }
}

function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");
  const ssncheck = document.getElementById("ssncheck");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  //영문 1개이상, 숫자 1개이상, 특수문자(!@#$%^&*)8개중 하나 이상(8자~20자)
  const expNameText = /^[가-힣]+$/;
  const exHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-]+\.[A-Za-z]+$/;

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

  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자이상 꼭 포함해야 합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }

  if (!exHpText.test(hp.value)) {
    alert("휴대폰번호 형식이 일치하지 않씁니다.\n-하이픈을 꼭 입력하세요!");
    hp.focus();
    return false;
  }

  if (!expEmailText.test(email.value)) {
    alert("이메일 형식에 맞지 않습니다.");
    email.focus();
    return false;
  }

  if (ssncheck.value == "n") {
    alert("주민등록번호 검증 버튼을 눌러주세요");
    return false;
  }

  return true;
}

//주민등록 번호
//생년월일 성별 시도번호 읍면동번호 접수순서  검증번호
//XXXXXX - X  - XX    - XX      -  X     -  X

//001011 - 3068518

//1. 마지막 번호를 빼놓습니다.
//2. 2,3,4,5,6,7,8,9,2,3,4,5를 각 자리에 곱합니다.
//ex
//  0 0 1 0 1 1 3 0 6 8 5 1
// *2 3 4 5 6 7 8 9 2 3 4 5
//  0 0 4 0 6 7 24 0 12 24 20 5
//3. 각 자리에 결과를 모두 더합니다. 102
//4. 결과에 11로 나누어 나머지 값을 구합니다. 3
//5. 11에서 나머지 값을 뺍니다(단, 결과 숫자가 10이 나오면 0, 11이면 1로 간주) 8
//6. 5번 값이 마지막 번호와 같으면 유요한 주민번호 true
