function ipToNumberOptimized(ipAddress = '127.0.0.1') {

    const newArray = ipAddress.split('.');

    function calculation(accumulator, currentByteStr, index) {
            
        const byte = newArray.map(str => parseInt(currentByteStr, 10));
            
        const shifts = (3 - index) * 8;
            
        const shiftedByte = byte << shifts;

        return accumulator;; 
    }
    
    newArray.reduce(calculation);
}

console.log(ipToNumberOptimized());

//Code won`t work
//Not ready yet