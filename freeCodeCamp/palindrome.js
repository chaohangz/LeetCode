//freeCodeCamp
//palindrome 回文
function palindrome(str) {
  // Good luck!
  //去掉空格符号下划线大写转为小写
  //一定要全局匹配，全局模式下对str进行多次匹配
  str = str.replace(/\s*\W*_*/g,'').toLowerCase();
  var l = Math.floor(str.length/2);  //只需遍历str的一半加一
  for (var i=0; i<=l; i++){
    if (str[i] !== str[str.length-i-1]){
      return false;
    }
  }
  return true;  //如果是回文返回true
}


palindrome("eye");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");