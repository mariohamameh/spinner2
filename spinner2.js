let delay = 0;
const spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\n'];
for (const i of spinner) {
    setTimeout(() => {
        process.stdout.write(i);

    }, delay += 200);
}