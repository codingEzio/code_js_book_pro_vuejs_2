export default function (values) {
    // The `import` expose this file as modules
    // The `default` is used when ?there's only 1 availabel
    return values.reduce((total, val) => total + val, 0);
}