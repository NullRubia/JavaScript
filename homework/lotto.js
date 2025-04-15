const lotto = [];

for (let i = 0; i < 6; ) {
  let lottonum = Math.floor(Math.random() * 45) + 1;
  if (lotto.includes(lottonum)) {
    continue;
  }
  lotto[i] = lottonum;
  i++;
}
console.log("로또 번호는 : " + lotto);
