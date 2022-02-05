const checkTokenExpiration = (tokenExp) => {
    const currentTimestamp = Math.round((new Date()).getTime() / 1000);
    return tokenExp > currentTimestamp;
}

export default checkTokenExpiration;