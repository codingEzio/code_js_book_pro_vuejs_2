import addition from "./sum";

export function mean(values) {
    return addition(values) / values.length;
}

export {
    addition
};
export * from "./operations";

export function asyncAdd(values) {
    setTimeout(() => {
        let total = addition(values);
        console.log(`asyncAdd :: Async Total: ${total}`);
        return total;
    }, 1000); // exec after 1000 milliseconds
}

export function asyncProAdd(values) {
    return new Promise((callback) => {
        setTimeout(() => {
            let total = addition(values);
            console.log(`asyncProAdd :: Async Total: ${total}`);
            callback(total);
        }, 1000);
    });
}