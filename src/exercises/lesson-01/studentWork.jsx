//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let myName = 'Andrew';
  let myAge = 1000; //That's not my real age
  let myhobbies = ['video games', 'music', 'exercising', 'learning'];

  const displayHobbies = myhobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <h1>
        <myName />
      </h1>

      <p>
        {' '}
        Hello, my name is Andrew Dass and I am <myAge /> years old. This may be
        my age or not...anyways I like technology and coding. I also like the
        following activities:{' '}
      </p>
      <ul>{displayHobbies}</ul>
    </div>
  );
}
