var express = require("express");
var router = express.Router();

const terms = [
  {
    id: 1,
    term: "DevOps",
    description:
      "Software development and IT operations are combined in the DevOps set of practises. It seeks to speed up the systems development life cycle and offer continuous software delivery of the highest standard.",
    reference:
      "What is DevOps?, GitLab, [Online]. Available: https://about.gitlab.com/topics/devops/.",
  },

  {
    id: 2,
    term: "Wall of confusion",
    description:
      'The term "wall of confusion" is used in the world of software engineering to characterise the miscommunication between those who specify the requirements for application software and those who develop it, especially when the latter group does not include IT professionals.',
    reference:
      "S. Kawaguchi, The Wall of Confusion, Level Up Coding, 28 Feb 2020. [Online]. Available: https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26.",
  },

  {
    id: 3,
    term: "Agile",
    description:
      "A group of software development approaches based on iterative development, where requirements and solutions are developed through cooperation amongst self-organizing cross-functional teams, is referred to as Agile software development.",
    reference:
      "What is Agile Methodology in Project Management?, [Online]. Available: https://www.wrike.com/project-management-guide/faq/what-is-agile-methodology-in-project-management/.",
  },

  {
    id: 4,
    term: "Microservices",
    description:
      "Microservices are a method of software development that organises an application as a group of loosely linked services, adhering to the principles of service-oriented architecture (SOA).",
    reference:
      " M. F. James Lewis, Microservices, 25 March 2014. [Online]. Available: https://martinfowler.com/articles/microservices.html.",
  },

  {
    id: 5,
    term: "Waterfall model",
    description:
      "The waterfall model divides project activities into discrete, linear stages, each of which corresponds to a specialised set of tasks and is dependent upon the outputs of the previous phase. The method is common in some branches of engineering design.",
    reference:
      "SDLC - Waterfall Model, Tutorialspoint, [Online]. Available: https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm.",
  },

  {
    id: 6,
    term: "Cloud computing",
    description:
      "The on-demand availability of computer system resources, in particular data storage and processing power, without direct active supervision by the user is known as cloud computing. The phrase is typically used to describe data centres that are accessible to several people online.",
    reference:
      "What is cloud computing, [Online]. Available: https://www.oracle.com/au/cloud/what-is-cloud-computing/#:~:text=to%20the%20cloud-,Cloud%20computing%20defined,it%20as%20they%20use%20it..",
  },

  {
    id: 7,
    term: "Shift left",
    description:
      "Shift left is a technique used to identify and stop bugs as soon as the software delivery process begins. Shift left testing, at its core, refers to testing earlier rather than later in the software development process.",
    reference:
      "S. Gunja, Shift left vs shift right: A DevOps mystery solved, 27 Oct 2022. [Online]. Available: https://www.dynatrace.com/news/blog/what-is-shift-left-and-what-is-shift-right/#:~:text=Shift%20left%20is%20the%20practice,before%20any%20code%20is%20written..",
  },

  {
    id: 8,
    term: "Express.js",
    description:
      "As free and open-source software distributed under the MIT Licence, Express.js, or simply Express, is a back end web application framework for Node.js. It is intended to be used to create APIs and web apps.",
    reference:
      "Express.js, GeeksforGeeks, 19 Apr 2023. [Online]. Available: https://www.geeksforgeeks.org/express-js/.",
  },

  {
    id: 9,
    term: "Incremental steps",
    description:
      "A software development approach called incremental development involves designing, implementing, and testing the final product in stages over time (a bit more is added each time). It requires both development and maintenance",
    reference:
      "What is iterative and incremental development? Process, examples, 26 Jan 2023. [Online]. Available: https://blog.logrocket.com/product-management/what-is-iterative-incremental-development-process-examples/#:~:text=product%20is%20reached.-,What%20is%20incremental%20development%3F,the%20product%20as%20a%20whole..",
  },

  {
    id: 10,
    term: "Deployment",
    description:
      "The act of making software usable is called deployment. There may be transitions between the various actions that make up the basic deployment process. These actions may take place on either the producer or client side, or even on both.",
    reference:
      "What is Deployment?, umbraco, [Online]. Available: https://umbraco.com/knowledge-base/deployment/.",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { terms: terms });
});

module.exports = router;
