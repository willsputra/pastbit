
class dateUtils {

    getTodayDate() {
      const currDateTime = new Date()
      const todayDate = `${currDateTime.getFullYear()}-${(
        "0" +
        (currDateTime.getMonth() + 1)
      ).slice(-2)}-${("0" + currDateTime.getDate()).slice(-2)}`

      return todayDate
    }

    getLastYearDate() {
      const currDateTime = new Date()
      const lastYear = currDateTime.getFullYear() - 1
      const lastYearDate = `${lastYear}-${(
        "0" +
        (currDateTime.getMonth() + 1)
      ).slice(-2)}-${("0" + currDateTime.getDate()).slice(-2)}`
  
      return lastYearDate
    }
  
    getLastMonthDate() {
      const currDateTime = new Date()
      const lastMonthDate = `${currDateTime.getFullYear()}-${(
        "0" + currDateTime.getMonth()
      ).slice(-2)}-${("0" + currDateTime.getDate()).slice(-2)}`
  
      return lastMonthDate
    }
  
  }
  
  export default new dateUtils()