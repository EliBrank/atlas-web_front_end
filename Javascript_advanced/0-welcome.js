function welcome(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  const displayFullName = () => {
    console.log(`Welcome ${fullName}!`);
  }

  displayFullName();
}
