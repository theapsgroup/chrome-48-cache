# Reproduction of the Chrome 48 Cache problem (Chromium issue 570622)

## Setting up

- clone
- `npm install`
- `node index.js`

This will serve up a local server using etags for cache control

## reproduction of the problem

- install chrome 48.0.2564.41 beta-m (64-bit)
- goto `http://localhost:6005`
- press the buttons

## observed problems

- Using sync xmlhttp loading, the response is empty on the second click
    - the `/test` resource is cached correctly, as verified by going to `chrome://cache`
    - in chrome network inspector, it is verified that the response is indeed empty
- the problem does not occur when cache is disabled
- the problem does not occur when etags are disabled
- the problem does not occur using async xmlhttp or fetch

## Chromium issue reference

<https://code.google.com/p/chromium/issues/detail?id=570622>