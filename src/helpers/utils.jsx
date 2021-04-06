import moment from 'moment'

export const formatDate = (date, format = "DD/MM/YYYY") => {
  if (!moment(date).isValid())
            return "Invalid date";

        return moment(date).format(format)

};


export const randomString = (length = 8) => {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

export const shuffle = (arra1) => {
  var ctr = arra1.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

export const searchOption = (array, searchword, keyword) => {

  if (searchword && searchword.toString().trim().length > 0) {
      return [...array.filter(filter => {
          return (
          filter[keyword]
              .toString()
              .toLowerCase()
              .indexOf(searchword.toString().toLowerCase()) > -1
          )
      })];

  } else {

      return [...array];
  }
}