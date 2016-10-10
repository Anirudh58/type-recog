# Typing Pattern Recognizer

<h3> Introduction </h3>
  <p> This app tries to utilise the fact that every person has a unique typing pattern and possibly predict who the typist is after learning from a data set </p>
  
<h3> The method used </h3>
  <ul>
    <li> The user is asked to enter a given standard sentence 3 times. </li>
    <li> Each character of the sentence is associated with 3 parameters namely </li>
      <ol>
        <li> Character code (ASCII value of the entered character) </li>
        <li> Relative system timestamp (Time elapsed from the beginning of the sentence in milliseconds) </li>
        <li> Key hold time (Time for which that particular key is pressed </li>
      </ol>
    <li> <b> The N-gram approach </b> </li>
      <ul>
        <li> To differentiate further between users N-grams are considered from the input. (I have chosen N=3). </li>
        <li> For eg: The text "pumas are" contains 7 3-grams namely "pum", "uma", "mas", "as ", "s a", " ar", "are" </li>
        <li> If length of sentence is L, there will be L-N+1 N-grams </li>
        <li> Each N-gram is further associated with 3 parameters namely </li>
          <ol>
            <li> <u> Elapse time </u> - The difference in time between first character of the N-gram and (N+1)th character, which is basically the duration of the N-gram </li>
            <li> <u> Keystroke durations </u> - the sum of duration of each character of the N-gram </li>
            <li> <u> Latency </u> - the sum of latencies of each character in the N-gram </li>
          </ol>
        <li> These 3 parameters are used to learn for each user by the app. </li>
      </ul>
    <li> Decision trees are used in this app from the npmjs package for machine learning. So I'm expecting accuracy to be high after getting atleast 15 training examples from each user </li>
    
<h3> Setup </h3>

<ul>
  <li> Download. Unzip </li>
  <li> Run ` npm install` </li>
  <li> Start your mongo server by running ` mongod`</li>
  <li> cd into main file and run ` npm start` </li>
</ul>

<h3> Instructions </h3>

<ul>
  <li> Enter your name </li>
  <li> Enter the given text as it is 3 times in the text boxes under contribute named 'test1' 'test2' 'test3'. If you make any mistake BACKSPACE and re-write it correctly. </li>
  <li> Click ok and then submit </li>
</ul>

