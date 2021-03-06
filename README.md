# Technical challenge

This a code challenge forked from [JRGranell/javascript-challenge
](https://github.com/JRGranell/javascript-challenge)

In order to run this project follow the steps bellow:
```
> clone project
```
```
> npm install
```
```
> npm start
```
```
> open the link http://localhost:3000/ in your favorite browser
```
This App should be run simultaneously with [vortexa_api]() which serves as the backend

## The challenge

Your goal is to build a React and Redux-based UI to explore this data. The interface should have the following features:

1. A map to be able to visualise all the boat ramps.
2. A data visualisation of your choice that displays the number or ramps per construction material.
3. A data visualisation of your choice that displays the number of ramps per size category (values of `area` in 3 different ranges: `[0, 50)`, `[50, 200)`, and `[200, 526)`).
4. Zooming in the map should filter the visualised data to include only those ramps which are currently visible in the viewport.
5. Clicking on a data point on a visualisation, should filter the ramps on the map to reflect the selected data.
