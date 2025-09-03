function dateConverter(data) {
    // YYYY-MM-DD
    const date = data.split("/");
    return new Date(date[2], (date[1]-1), date[0])
}

module.exports = {
    dateConverter
}