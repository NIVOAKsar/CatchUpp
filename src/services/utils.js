export function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function printObject(o) {
    return JSON.stringify(o);
}

export const Status = {
    Pending: 'pending',
    Failure: 'failure',
    Success: 'success'
};
