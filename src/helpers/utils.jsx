// import moment from 'moment'

export const formatDate = (date, format = "DD/MM/YYYY") => {
  /* if (!moment(str).isValid())
            return "Invalid date";

        return moment(str).format(format) */
  var d = new Date(date);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
