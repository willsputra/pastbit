class RequestPrice {
    
    async fetchCurrentPrice() {
        let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        let data = await response.json()

        return data
    }

    async fetchPastPrice(period) {
        let response =  await fetch(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${period}&end=${period}`
        )

        let data = await response.json()
        return data
    }
}      

export default new RequestPrice()