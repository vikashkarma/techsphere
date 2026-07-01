export const ARTICLES = [
 {
  "id": "java-interview-questions",
  "title": "Top 10 Java Interview Questions",
  "category": "Java",
  "description": "Most asked Java interview questions.",
  "questions": [
    {
      "question": "What is the difference between 'static' and 'non-static' in Java?",
      "answer": "Static refers to methods or variables that belong to a class, whereas non-static refer to methods or variables within an instance of a class."
    },
    {
      "question": "How do you implement inheritance in Java using subclasses?",
      "answer": "Subclasses (or derived classes) inherit from their superclass by extending it. They can override inherited methods and add new ones, and they also have access to the subclass’s private members if they are not static."
    },
    {
      "question": "What is polymorphism in Java and how does it work?",
      "answer": "Polymorphism allows objects of different types to be treated as objects of a common superclass type. It works by using methods or variables that have the same name but implement them differently depending on the object's actual type."
    },
    {
      "question": "What is encapsulation in Java and why is it important?",
      "answer": "Encapsulation refers to bundling data (i.e., fields) with methods that work with that data. It ensures that classes are self-contained, prevents unauthorized access, improves code security, and aids in object-oriented design."
    },
    {
      "question": "How do you implement abstract classes and interfaces in Java?",
      "answer": "Abstract classes must be declared as public and may have methods and fields that can also be made abstract. Interfaces are defined using the interface keyword and allow multiple inheritance through implementation of one or more interfaces."
    }
  ]
},
{
  "id": "oops-concepts",
  "title": "Top 50 OOPS Interview Questions",
  "category": "Java",
  "description": "Most asked Oops interview questions.",
  "questions": [
    {
      "question": "What is the difference between 'static' and 'non-static' in Java?",
      "answer": "Static refers to methods or variables that belong to a class, whereas non-static refer to methods or variables within an instance of a class."
    },
    {
      "question": "How do you implement inheritance in Java using subclasses?",
      "answer": "Subclasses (or derived classes) inherit from their superclass by extending it. They can override inherited methods and add new ones, and they also have access to the subclass’s private members if they are not static."
    },
    {
      "question": "What is polymorphism in Java and how does it work?",
      "answer": "Polymorphism allows objects of different types to be treated as objects of a common superclass type. It works by using methods or variables that have the same name but implement them differently depending on the object's actual type."
    },
    {
      "question": "What is encapsulation in Java and why is it important?",
      "answer": "Encapsulation refers to bundling data (i.e., fields) with methods that work with that data. It ensures that classes are self-contained, prevents unauthorized access, improves code security, and aids in object-oriented design."
    },
    {
      "question": "How do you implement abstract classes and interfaces in Java?",
      "answer": "Abstract classes must be declared as public and may have methods and fields that can also be made abstract. Interfaces are defined using the interface keyword and allow multiple inheritance through implementation of one or more interfaces."
    },
    {
      "question": "What is a final class and what is its purpose?",
      "answer": "A final class in Java cannot be subclassed, making it immutable after initialization. This is useful for ensuring that an object's properties can't be changed once they are set to prevent bugs or accidental modifications."
    },
    {
      "question": "What is the difference between 'final' and 'static'? And how do you use them?",
      "answer": "Final applies to fields (variables) and methods, whereas static refers to variables that belong to a class rather than an instance. Final variables are declared as final and cannot be changed after initialization, while static variables belong to the class itself."
    },
    {
      "question": "What is abstract method in Java?",
      "answer": "An abstract method is part of an abstract class and has no body (no return type or implementation). It must be overridden by any subclass that extends this abstract class. Abstract methods ensure that classes are fully defined."
    }
  ]
},

{
  "id": "exceptions",
  "title": "Top 10 Exception Interview Questions",
  "category": "Java",
  "description": "Most asked exception interview questions.",
  "questions": [
    {
      "question": "What is an 'unchecked exception' in Java?",
      "answer": "Unchecked exceptions are those that can be thrown without being explicitly declared. They include errors such as ArrayIndexOutOfBoundsException and NullPointerException, which occur at runtime but aren't caught by try-catch blocks."
    },
    {
      "question": "How do you catch multiple types of checked exceptions using a single catch statement?",
      "answer": "You can use the 'throws' keyword in method signatures to specify that it may throw one or more checked exceptions, and then catch each type separately inside the try-catch block."
    },
    {
      "question": "What is the difference between an 'unchecked exception' and a 'checked exception'? And why should you declare them as checked?",
      "answer": "An unchecked exception occurs at runtime and can be thrown without being explicitly declared. Checked exceptions, on the other hand, must be declared and may cause compile-time errors if not handled properly.Unchecked exceptions are generally more common than checked ones because they occur in real-world scenarios where developers cannot always anticipate all possible errors."
    },
    {
      "question": "How do you throw an exception explicitly in Java?",
      "answer": "You can use the throw keyword to explicitly throw an exception. For example, if you catch an IOException and want to inform the user about it or log further information.In such cases, catching the exception and then re-throwing it is often more appropriate than just logging because it allows you to control how the exception is handled."
    },
    {
      "question": "What is a 'checked exception' in Java?",
      "answer": "Checked exceptions are those that must be declared as exceptions or explicitly thrown. They can only occur at runtime and should always be caught by the calling code.Examples of checked exceptions include IOException, SQLException, and RuntimeException."
    }
  ]
},
{
  "id": "threading",
  "title": "Top 10 Thread Interview Questions",
  "category": "Java",
  "description": "Most asked thread interview questions.",
  "questions": [
    {
      "question": "What is the difference between 'synchronized' and 'wait/notify' methods in Java threads?",
      "answer": "The synchronized keyword locks on an object to ensure that only one instance of a method can be run at a time. The wait() method allows a thread to suspend itself, while notify() wakes up the waiting thread by sending it a signal.Synchronization ensures thread safety and prevents race conditions, whereas 'wait/notify' are more flexible but do not provide strict synchronization guarantees."
    },
    {
      "question": "How do you create a daemon thread in Java?",
      "answer": "A daemon thread is created using the Thread.setDaemon(true) method. When set to true, this thread will terminate when the main thread exits or if it goes off the stack.Creating a daemon thread allows your program's non-daemon threads (main ones) to complete their tasks and exit before the JVM shuts down."
    },
    {
      "question": "What is a 'volatile' variable in Java, and how does it help prevent race conditions?",
      "answer": "A volatile variable ensures that reads from one thread are seen by all threads on the same JVM without causing races. It works by marking variables as read-only but allowing updates to be visible through multiple threads.This guarantees atomicity and consistency, preventing data inconsistency or inconsistencies in multithreaded environments."
    },
    {
      "question": "How do you implement a 'thread-safe' collection class in Java?",
      "answer": "To make a class thread-safe, it should follow these best practices:- Use the synchronized keyword to lock on an object.- Implement appropriate synchronization methods like wait() and notify().- Ensure all threads are aware of changes by using volatile fields where necessary."
    },
    {
      "question": "What is the difference between 'synchronized block' and 'synchronized method'? How do you use them?",
      "answer": "A synchronized block locks on an object, ensuring that only one instance of a method can be run at a time. A synchronized method, however, wraps around the entire method.It's useful for preventing race conditions within a single thread but doesn't provide synchronization across multiple threads."
    }
  ]
},
{
  "id": "java-8-interview-questions",
  "title": "Top 10 Java 8 Interview Questions",
  "category": "Java",
  "description": "Most asked Java 8 interview questions.",
  "questions": [
    {
      "question": "What is Lambda Expression in Java 8?",
      "answer": "Lambda expression is an anonymous function that provides a clear and concise way to represent a method. It enables functional programming in Java."
    },
    {
      "question": "What is a Functional Interface?",
      "answer": "A Functional Interface is an interface that contains exactly one abstract method. Examples include Runnable, Callable, Predicate and Function."
    },
    {
      "question": "What are built-in Functional Interfaces in Java 8?",
      "answer": "Common built-in functional interfaces are Predicate, Function, Consumer and Supplier. These are heavily used with Lambda Expressions and Stream API."
    },
    {
      "question": "What is Stream API?",
      "answer": "Stream API is used to process collections of data in a functional style. It supports filtering, mapping, sorting and reducing operations."
    },
    {
      "question": "What is the difference between Collection and Stream?",
      "answer": "Collections store data whereas Streams process data. Streams do not modify the original collection."
    },
    {
      "question": "What is Optional in Java 8?",
      "answer": "Optional is a container object that may or may not contain a value. It helps avoid NullPointerException."
    },
    {
      "question": "What is Method Reference?",
      "answer": "Method references provide a shorthand syntax for calling methods using the :: operator."
    },
    {
      "question": "What is the difference between map() and flatMap()?",
      "answer": "map() transforms each element individually while flatMap() flattens nested structures into a single stream."
    },
    {
      "question": "What is forEach() in Java 8?",
      "answer": "forEach() is a terminal operation used to iterate through stream elements."
    },
    {
      "question": "What are the advantages of Java 8?",
      "answer": "Java 8 introduced Lambda Expressions, Stream API, Functional Interfaces, Method References, Optional and a modern Date-Time API."
    }
  ]
},

{
  "id": "springboot-interview-questions",
  "title": "Top 10 Spring Boot Interview Questions",
  "category": "Spring Boot",
  "description": "Most asked Spring Boot interview questions.",
  "questions": [
    {
      "question": "What is Spring Boot?",
      "answer": "Spring Boot is an extension of the Spring Framework that simplifies application development by providing auto-configuration, embedded servers, and production-ready features."
    },
    {
      "question": "What are the advantages of Spring Boot?",
      "answer": "Spring Boot reduces boilerplate code, provides auto-configuration, supports embedded servers like Tomcat, and offers production-ready features such as monitoring and health checks."
    },
    {
      "question": "What is Auto Configuration in Spring Boot?",
      "answer": "Auto Configuration automatically configures Spring beans based on the dependencies available in the classpath. It minimizes manual configuration and speeds up development."
    },
    {
      "question": "What is the difference between @Component, @Service, and @Repository?",
      "answer": "@Component is a generic Spring bean, @Service is used for business logic classes, and @Repository is used for data access layers and provides exception translation."
    },
    {
      "question": "What is the purpose of @SpringBootApplication?",
      "answer": "@SpringBootApplication is a convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan into a single annotation."
    },
    {
      "question": "What is Dependency Injection in Spring Boot?",
      "answer": "Dependency Injection is a design pattern where Spring automatically provides required objects to a class instead of the class creating them manually."
    },
    {
      "question": "What is Spring Boot Starter?",
      "answer": "Spring Boot Starters are dependency descriptors that simplify Maven or Gradle configuration. For example, spring-boot-starter-web includes all dependencies needed for web applications."
    },
    {
      "question": "What is Spring Boot Actuator?",
      "answer": "Spring Boot Actuator provides production-ready features such as health checks, metrics, application monitoring, and management endpoints."
    },
    {
      "question": "How do you connect a Spring Boot application to a database?",
      "answer": "A database can be connected by adding the appropriate JDBC dependency and configuring properties such as datasource URL, username, and password in application.properties."
    },
    {
      "question": "What is the difference between @RestController and @Controller?",
      "answer": "@Controller is used for MVC applications that return views, while @RestController is used for REST APIs and automatically converts responses into JSON or XML."
    }
  ]
},
{
"id": "angular-interview-questions",
"title": "Top 10 Angular Interview Questions",
"category": "Angular",
"description": "Most asked Angular interview questions.",
"questions": [
{
"question": "What is Angular?",
"answer": "Angular is a TypeScript-based front-end framework developed by Google for building single-page web applications. It provides components, routing, dependency injection, forms, and many other features."
},
{
"question": "What are Components in Angular?",
"answer": "Components are the basic building blocks of Angular applications. Each component consists of a TypeScript class, HTML template, and CSS styles."
},
{
"question": "What is Data Binding in Angular?",
"answer": "Data binding is a mechanism that synchronizes data between the component and the view. Angular supports interpolation, property binding, event binding, and two-way data binding."
},
{
"question": "What is Dependency Injection?",
"answer": "Dependency Injection is a design pattern used to provide dependencies to a class instead of creating them manually. Angular has a built-in DI framework."
},
{
"question": "What is Angular Routing?",
"answer": "Angular Routing allows navigation between different components without reloading the page. Routes are configured using RouterModule."
},
{
"question": "What are Angular Directives?",
"answer": "Directives are instructions that modify the appearance or behavior of DOM elements. Examples include *ngIf, *ngFor, and ngClass."
},
{
"question": "What is Lazy Loading?",
"answer": "Lazy Loading loads feature modules only when required, reducing the initial bundle size and improving application performance."
},
{
"question": "What are Angular Signals?",
"answer": "Signals are Angular's reactive state management feature introduced to simplify state updates and improve performance."
},
{
"question": "What is the difference between Template-driven and Reactive Forms?",
"answer": "Template-driven forms are simple and use directives in templates, while Reactive Forms are model-driven and provide more control and validation options."
},
{
"question": "What is Change Detection in Angular?",
"answer": "Change Detection is the process Angular uses to update the DOM whenever application data changes."
}
]
},
{
"id": "chatgpt-guide",
"title": "Top 10 AI Interview Questions",
"category": "AI",
"description": "Most asked AI interview questions.",
"questions": [
{
"question": "What is Artificial Intelligence?",
"answer": "Artificial Intelligence is a branch of computer science that enables machines to perform tasks that normally require human intelligence."
},
{
"question": "What is Machine Learning?",
"answer": "Machine Learning is a subset of AI that allows systems to learn patterns from data and improve performance without explicit programming."
},
{
"question": "What is Deep Learning?",
"answer": "Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers to solve complex problems."
},
{
"question": "What is Generative AI?",
"answer": "Generative AI creates new content such as text, images, audio, and videos based on patterns learned from training data."
},
{
"question": "What is ChatGPT?",
"answer": "ChatGPT is a conversational AI model developed by OpenAI that can answer questions, generate content, and assist with various tasks."
},
{
"question": "What are Large Language Models (LLMs)?",
"answer": "LLMs are AI models trained on massive datasets to understand and generate human-like language."
},
{
"question": "What is Natural Language Processing?",
"answer": "NLP is a field of AI focused on enabling computers to understand, interpret, and generate human language."
},
{
"question": "What is Training Data?",
"answer": "Training data is the dataset used to teach AI models patterns, relationships, and knowledge."
},
{
"question": "What is Reinforcement Learning?",
"answer": "Reinforcement Learning is a machine learning technique where an agent learns through rewards and penalties."
},
{
"question": "What are AI Hallucinations?",
"answer": "AI hallucinations occur when an AI model generates incorrect or fabricated information that appears convincing."
}
]
}





];