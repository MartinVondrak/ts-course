function callback1(): void {
    console.log("callback1 called");
}

const callback2 = (): void => console.log("callback2 called")

// funkce může být předána bez jako argument do jiné funkce a tam se teprve zavolat
function acceptCallback(callback: () => void): void {
    console.log("Calling callback function...");
    callback();
}

export {acceptCallback, callback1, callback2};



