# Woopra Test: Flow Analysis

## 1. Clone this project

## 2. Webpack + React + ES6 environment

Configure a webpack instance to create a development bundle which will run in the browser. You may use a boilerplate or project generator such as `create-react-app`. Feel free to add extra modules like css post processors and whatever other libraries you will need.

We should be able to run this project using ```yarn start```

## 3. Build a page

Build the react-redux foundation for the project and load a main view

## 4. Load the data

Load the data from data.json into your store

## 5. Render a D3 Chart

Create a graph chart using D3 that will render a visual of the nodes and edges. Edges should visually represent their total. A user should be able visualize the main flow of this graph in a glance. You can use colors, thickness, or whatever else comes to mind. Get creative.

## 6. Interactions

When the user clicks on an edge, the number will increment for that edge (using redux).

# What we will look for

1. A clean folder structure
1. A good approach to load data asynchronously to the store when the page loads (follow react-redux best practices) 
1. A clean implementation of D3
1. A smart and unique visual that will help the user immediately get insight from the visualized data.
1. Smart positioning of nodes
1. Handling unusual scenarios (such as nodes not completely connected, or when some edges are proportionately much bigger than other edges, etc...)
1. Loading screens and animations
1. Eye candy visuals

Happy coding.
