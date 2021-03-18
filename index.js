var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const { courses } = require('./data.json')
// console.log(courses);

var schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]

  }

  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  }

  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);


//no esta con babel
let getCourse=args=>courses.filter(course=>course.id===args.id)[0];
let getCourses=args=>(args.topic) ? courses.filter(course=>course.topic===args.topic): courses;

let updateCourseTopic = ({id, topic}) => {
  courses.map(course => {
    if (course.id === id) {
      course.topic = topic;
      return course;
    }
  });

  return courses.filter(course => course.id === id)[0];
}
// let getCourse = (args) => {
//   let id = args.id;
//   return courses.filter(course => {
//       return course.id == id;
//   })[0];
// }

// let getCourses = (args) => {
//   if (args.topic) {
//     let topic = args.topic;
//     return courses.filter(course => course.topic === topic);
//   } else {
//     return courses;
//   }
// }
// var root = { hello: () => 'Hello world!' };
var root = { 
  course: getCourse, 
  courses: getCourses,
  updateCourseTopic: updateCourseTopic
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));