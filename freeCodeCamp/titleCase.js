function titleCase(str) {
  var arr = str.split(" ");
  for (var i=0; i<arr.length; i++) {
    arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  return arr.join(" ");
}

titleCase("I'm a little tea pot");

//如果字符串中没有单引号分隔符，可以用 \b 匹配单词边界；
function titleCase2(str) {
	str = str.replace(/\b\w*\b/g, function(word){
		return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
	});
	return str;
}

titleCase2("sHoRt AnD sToUt");

//在正则中加一个单引号可以解决这个问题
//？ 匹配0次或1次 非贪婪模式
function titleCase3(str) {
	str = str.replace(/\b\w*'?\w*\b/g, function(word){
		return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
	});
	return str;
}

titleCase3("I'm a little tea pot");

