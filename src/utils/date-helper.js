import moment from "moment";
import tz from "moment-timezone";

const dateDiff = (endDate, startDate) => {
    return moment(endDate).diff(startDate, "days");
}

const formatDate = (input, format = 'MMMM D, YYYY') => {
    return moment(input).format(format);
}

const parseTime = (input) => {
    return moment(input).format('HH:mm');
};

const parseAsMoment = (input) => {
    return moment(input);
}

export { dateDiff, formatDate, parseTime, parseAsMoment }