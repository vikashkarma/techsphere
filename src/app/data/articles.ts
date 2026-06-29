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
}



];