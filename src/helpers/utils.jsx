import moment from 'moment'

export const formatDate = (date, format = "DD/MM/YYYY") => {
  if (!moment(date).isValid())
            return "Invalid date";

        return moment(date).format(format)

};
