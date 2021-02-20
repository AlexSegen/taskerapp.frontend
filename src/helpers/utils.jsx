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