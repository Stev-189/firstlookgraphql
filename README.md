# first look graphql
## sin querer subi nodejs
```
GraphQL

Introduccion

npm init -y
npm install express graphql express-graphql
//npm i @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime nodemon -D
.babelrc (a) = 
	{
		"presets":[
			"@babel/env"
		], 
		"plugins": ["@babel/transform-runtime"]
	}

package.json (a) ("dev": "nodemon index.js --exec babel-node") npm run dev


//query ejemplo
query getSingleCourse($courseID: Int!){
  course(id: $courseID){
    title
    author
    description
    topic
    url
  }
}
//variable
{
  "courseID": 2
}

// fragment
query getCoursesWithFragments($courseID1: Int!, $courseID2: Int!) {
  course1: course(id: $courseID1) {
    ...courseFields
  }
  course2: course(id: $courseID2) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}

{
  "courseID1": 1,
  "courseID2": 3
}

//update
mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
```
Original From FastWEB actualizado to 2021/03/17 

https://www.youtube.com/watch?v=0Hvzg6PSosg 

https://graphql.org/ 

https://www.faztweb.com/cursos/graphql/1 
