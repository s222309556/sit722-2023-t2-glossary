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

  {
    id: 11,
    term: "Technical Debt",
    description:
      "Technical debt in software development is the implied cost of additional rework incurred by picking an easy solution now rather than a better alternative that takes longer.",
    reference:
      "Technical Debt, [Online]. Available: https://www.techopedia.com/definition/27913/technical-debt.",
  },

  {
    id: 12,
    term: "Azure",
    description:
      "Microsoft Azure is a cloud computing service for designing, testing, deploying, and managing applications and services in Microsoft-managed data centres.",
    reference:
      "What is Azure?, Microsoft Azure, [Online]. Available: https://azure.microsoft.com/en-au/overview/what-is-azure/",
  },

  {
    id: 13,
    term: "DevOps Cycle",
    description:
      "Software development and deployment take place continuously within the DevOps cycle. Development and operation are both involved.",
    reference:
      "A. Bhasin, What is DevOps Life Cycle | Key Components & Phases with Examples?, 12 June 2023. [Online]. Available: https://testsigma.com/blog/author/anshita-bhasin/.",
  },

  {
    id: 14,
    term: "Continuous integration",
    description:
      "Continuous integration (CI) is a prevalent software development methodology wherein developers consistently merge their code modifications into a central repository. Subsequently, automated processes are initiated to build and test the integrated code changes.",
    reference:
      "H. Dhaduk, DevOps Lifecycle: 7 Phases Explained in Detail with Examples, 13 Jan 2022. [Online]. Available: https://www.simform.com/blog/devops-lifecycle/.",
  },

  {
    id: 15,
    term: "Continuous delivery",
    description:
      "Continuous delivery involves automatically building, testing, and getting updated code ready for production release. By delivering all code alterations to testing environments and/or production environments after the build step, it advances continuous integration.",
    reference:
      "Continuous integration vs. delivery vs. deployment, Atlassian, [Online]. Available: https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment",
  },

  {
    id: 16,
    term: "Continuous deployment",
    description:
      "Continuous deployment refers to the automated process of deploying software code to a production environment.",
    reference:
      "Continuous integration vs. delivery vs. deployment, Atlassian, [Online]. Available: https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment",
  },

  {
    id: 17,
    term: "PreProd",
    description:
      "Pre-production prepares code for production-like deployment. It verifies application behavior and resolves deployment concerns before production deployment.",
    reference:
      "J. Mulder, Enterprise DevOps for Architects: Leverage AIOps and DevSecOps for sure digital transformation, 2021.",
  },

  {
    id: 18,
    term: "Continuous improvement",
    description:
      "Continuous improvement improves products, services, and processes. These initiatives can seek gradual or sudden progress.",
    reference:
      "Continuous Improvement, [Online]. Available: https://asq.org/quality-resources/continuous-improvement",
  },

  {
    id: 19,
    term: "Cross-functional autonomous teams",
    description:
      "Self-organizing cross-functional autonomous teams produce a product or commercial result. Their members have diverse expertise.",
    reference:
      "Cross Functional Autonomous Teams - DevOps Principle #4, [Online]. Available: https://www.pufferfish.solutions/post/cross-functional-autonomous-teams-devops-principle-4",
  },

  {
    id: 20,
    term: "Continuous monitoring",
    description:
      "Continuous monitoring collects, analyses, and acts on IT system data to optimise performance and availability.",
    reference:
      "C. C. Sourojit Das, DevOps Lifecycle : Different Phases in DevOps, 24 Feb 2023. [Online]. Available: https://www.browserstack.com/guide/devops-lifecycle.",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { terms: terms });
});

module.exports = router;
