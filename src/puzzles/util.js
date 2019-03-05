/* eslint-disable */

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomChar() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
  const rnum = Math.floor(Math.random() * chars.length);
  return chars[rnum];
}

export function toUnsignedVietnamese(text) {
  var str = text;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  );
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  return str;
}

export function distinct(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}

export function distinctNotCaseSensitive(array) {
  return array.filter((value, index, self) => {
    const foundIndex = self.findIndex(
      x => x.toLowerCase() === value.toLowerCase()
    );
    return foundIndex === index;
  });
}
