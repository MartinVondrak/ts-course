// asynchronní funkce se používají pro dlouho trvající operace jako HTTP request, čtení ze souboru nebo z databáze
async function asynchronousOperation(operationId: number): Promise<string> {
    const timeout = Math.floor(Math.random() * 10000);
    return new Promise(resolve => setTimeout(() => resolve(`Result of asynchronous operation ${operationId}`), timeout));
}

// async/await musí jít vždycky v páru jako ve funkci níže a návratový typ je třeba obalit do Promise<>
async function wrapper(id: number): Promise<string> {
    doOtherLogic();
    const result = await asynchronousOperation(id);
    doSomeOtherLogic();
    return result;
}

function doOtherLogic() {
}

function doSomeOtherLogic() {
}

export {asynchronousOperation};