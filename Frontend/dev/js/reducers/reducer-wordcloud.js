export default function wordcloud(state = [], action) {
  if (action.type === 'GENERATE_WORDCLOUD') {
    console.log("GEN: " + action.query);
    return [ ...state,
      { value: action.query, count: 100 },
      { value: "what", count: 5 },
      { value: "blurry", count: 10 },
      { value: "papers", count: 15 },
      { value: "JavaScript", count: 38 },
      { value: "React", count: 30 },
      { value: "Nodejs", count: 28 },
      { value: "Express.js", count: 25 },
      { value: "HTML5", count: 33 },
      { value: "MongoDB", count: 18 },
      { value: "CSS3", count: 20 }
      ]
  }

  // if (action.type !== 'GET_PAPERS') {
  return state;
  // }
}