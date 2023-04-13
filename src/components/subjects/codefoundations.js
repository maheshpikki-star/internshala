import React from 'react'

export default function CodeFoundations() {
  return (
    <div>
      <br></br>
      <br></br>

      <h2 style={{ marginLeft: "50px" }}>Basic Coding Concepts</h2>
      <h3 style={{ marginLeft: "50px" }}>Variables</h3>
      <p style={{ marginLeft: "50px" }}>
        As the foundation of any computer programming language, variables act as
        “containers” that “hold” information. These containers then store this
        information for later use. For example, imagine you are visiting the
        homepage of a website. Once you land on this page, a dialog box pops
        into view with this simple greeting: “Hi! What’s your name?” This dialog
        box is a variable! In this code, the programmer could name this variable
        “visitorName.” This means that when you type your name into the form and
        hit submit, your information would be stored in the “visitorName”
        variable. The programmer could then reference this variable at any time
        to access the information it contains.
      </p>
      <h3 style={{ marginLeft: "50px" }}>Data Structures</h3>
      <p style={{ marginLeft: "50px" }}>
        Data structures allow programmers to streamline data collection when a
        large amount of related information is involved. Let’s go back to our
        “visitorName” variable from above, but imagine the computer programmer
        needs to store and reference 10 different visitors’ names rather than
        just one. Rather than creating 10 different variables for each new
        visitor — which would increase the sheer amount of text in the program
        and make adding or removing new contacts difficult — the programmer
        could simply use a data structure to contain all related variables. In
        this case, the data structure would be a List. With this List data
        structure, the programmer only needs to create one variable rather than
        10, which means the code would be much more flexible to change
      </p>
      <h3 style={{ marginLeft: "50px" }}>Control Structures</h3>
      <p style={{ marginLeft: "50px" }}>
        A control structure analyzes variables and selects a direction in which
        to go determined from the given parameters. For example, when a computer
        program is running, the code is being read by the computer line by line
        from top to bottom and (for the most part) left to right. As the code is
        being read, the computer will reach a point where it needs to make a
        “decision” (based on strict rules set by the computer programmer). At
        this point, the code could do things like jump to a different part of
        the program, re-run a certain piece of code again, or simply skip a
        block of code altogether. Whatever parameters are set by the programmer
        will affect the code flow. Think of control structures as the directions
        your program needs to allow it to make choices and execute commands
        under different conditions.
      </p>
      <h3 style={{ marginLeft: "50px" }}>Syntax</h3>
      <p style={{ marginLeft: "50px" }}>
        Just like in the English language, computer programming follows a syntax
        or a set of rules that define particular layouts of letters and symbols.
        Proper syntax ensures the computer reads and interprets code accurately.
        For example, let’s consider a simple email address and its required
        syntax. Email addresses are understood by readers and computers
        immediately due to their format. Typically, email addresses must consist
        of a string of letters and numbers, followed by the “@” symbol, and
        finally a website domain (e.g., bob_smith@companyname.com). This
        structure is known as the standard email syntax! It’s easy to imagine
        that if the email address were not syntactically correct
        (company@.comnamebob_smith), computers would not be able to process it.
        In a similar fashion, each computer programming language has its own
        syntax or appropriate order in how code should be written for the
        program to understand what it is supposed to do.
      </p>
      <h3 style={{ marginLeft: "50px" }}>Tools</h3>
      <p style={{ marginLeft: "50px" }}>
        In the physical world, tools allow workers to perform tasks that would
        otherwise be extremely difficult (think of how a hammer helps drive a
        nail into a piece of wood and what this job would be like without
        tools). Similarly, a tool in computer programming is a piece of software
        that helps programmers write code much faster. For example, one of the
        most important tools for computer programmers is an Integrated
        Development Environment (IDE). An IDE can check the syntax of code for
        errors, organize files, autocomplete commonly used code, and help you
        easily navigate through your code. Tools are the final crucial element
        to code, as they streamline processes and ensure accuracy.
      </p>
    </div>
  );
}
