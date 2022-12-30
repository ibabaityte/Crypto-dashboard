const setCurrencies = (currencies) => {
    return{
        type: "SET_CURRENCIES",
        payload: currencies
    };
};

export {setCurrencies};
